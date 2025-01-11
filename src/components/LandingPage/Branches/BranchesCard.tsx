import React from 'react';

import branchesCard from "./BranchesCard.module.css";

type BranchesCardProps = {
    title: string;
    branchTitle?: string;
    description: string;
    color: string;
    colorSecondary: string;
    children?: React.ReactNode;
};
export default function BranchesCard(props: BranchesCardProps)
{
    return (
        <div className={branchesCard.card} style={{ '--card-color': props.color } as React.CSSProperties}>
            <div style={{ "color": 'var(--card-color)' }}>Overview</div>
            <h2>{props.title}</h2>

            <p className='desc'>{props.description}</p>

            <ul>
                {props.children}
            </ul>

            <a>Learn more about {props.branchTitle ? props.branchTitle : props.title}</a>
        </div>
    );
};

interface BranchesCardActivityProps
{
    color: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}
export function BranchesCardActivity(props: BranchesCardActivityProps)
{
    return (
        <div className={branchesCard.activity} style={{ '--icon-color': props.color } as React.CSSProperties}>
            <div>
                {props.icon}
            </div>
            <span id="desc">{props.children}</span>
        </div>
    );
}