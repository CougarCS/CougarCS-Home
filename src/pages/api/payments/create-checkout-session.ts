import type { APIRoute } from 'astro';
import Stripe from 'stripe';

export const POST: APIRoute = async ({ params, request, url, redirect }) =>
{
    const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY!, { typescript: true });

    const tenure = url.searchParams.get('tenure');
    const product = url.searchParams.get('product');

    if (!product)
    {
        return redirect(url.toString(), 303);
    }

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: product,
                quantity: 1,
            },
        ],
        custom_fields: [
            {
                key: 'uhID',
                label: {
                    type: 'custom',
                    custom: 'UH Student ID',
                },
                type: 'numeric',
                numeric: {
                    minimum_length: 7,
                    maximum_length: 7,
                }
            },
            {
                key: 'shirtSize',
                label: {
                    type: 'custom',
                    custom: 'Shirt Size',
                },
                type: 'dropdown',
                dropdown: {
                    options: [
                        { label: 'X-Small', value: 'XS' },
                        { label: 'Small', value: 'S' },
                        { label: 'Medium', value: 'M' },
                        { label: 'Large', value: 'L' },
                        { label: 'X-Large', value: 'XL' },
                        { label: 'XX-Large', value: 'XXL' },
                    ]
                }
            }
        ],
        metadata: {
            tenure: tenure
        },
        customer_creation: 'always',
        phone_number_collection: {
            enabled: true,
        },
        allow_promotion_codes: true,
        mode: 'payment',
        success_url: `${url.origin}/join/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url.origin}/join`
    });

    if (session.url)
    {
        return redirect(session.url, 303);
    }

    return new Response('Error creating checkout session', { status: 500 });
};