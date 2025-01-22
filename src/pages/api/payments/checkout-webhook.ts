import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);
const endpointSecret = import.meta.env.STRIPE_CHECKOUT_WEBHOOK_SECRET;

// https://docs.stripe.com/checkout/fulfillment
export const POST: APIRoute = async ({ request }) =>
{
    const rawBody = await request.text();
    const signature = request.headers.get('stripe-signature');

    let event: Stripe.Event;

    try
    {
        if (!signature || !endpointSecret)
        {
            throw new Error('Stripe signature or endpoint secret is missing!');
        }

        event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);
    } catch (err)
    {
        console.error('Error verifying Stripe webhook signature:', err);
        return new Response(`Webhook Error: ${err}`, { status: 400 });
    }

    try
    {
        const session = event.data.object as Stripe.Checkout.Session;

        if (
            event.type === 'checkout.session.completed'
            || event.type === 'checkout.session.async_payment_succeeded'
        )
        {
            console.log(`Checkout session completed! Session ID: ${session.id}`);
            console.log(`Making request to legacy CougarCS API`);

            const legacyResponse = await fetch(`${import.meta.env.COUGARCS_LEGACY_API}/api/payment/sessionRegister`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sessionId: session.id
                })
            });

            if (!legacyResponse.ok)
            {
                throw new Error(`Legacy API request failed: ${legacyResponse.statusText}`);
            }
        }

        return new Response(JSON.stringify({ received: true }), { status: 200 });
    } catch (err)
    {
        console.error('Error handling webhook event:', err);
        return new Response(`Webhook handler failed: ${err}`, { status: 400 });
    }
};
