import * as React from 'react';

export type BadgeColorFamily = any | "";

export type BadgeType = "success" | "error" | "warning" | "new" | "info";

export type BadgeClassName = string | Object | any[];

export interface BadgeProps {
    text: string;
    icon?: string;
    hasIcon?: boolean;
    isSmall?: boolean;
    colorFamily?: BadgeColorFamily;
    type?: BadgeType;
    className?: BadgeClassName;
}

declare const Badge: React.FC<BadgeProps>;

export default Badge;

