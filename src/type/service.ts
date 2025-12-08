import type { ReactNode } from "react";

export interface Service{
    title: string,
    desc: string,
    logo: () => ReactNode
}

export interface BackgroundHome {
    id: number;
    title: string;
    content: string;
    image: () => ReactNode;
}

export interface ServiceTab {
    id: number;
    label: string;
    image: string;
    title: string;
    content: string;
    desc: string
}

export interface Tabs {
    id: number;
    label: string;
    image: () => ReactNode;
    title: string;
    content: string;
}

export interface CarouselHome {
    carousel1: {
        title: string;
        image: () => ReactNode;
    };
    carousel2: {
        title: string;
        image: () => ReactNode;
    };
    carousel3: {
        title: string;
        image: () => ReactNode;
    };
}

export interface Parteneer {
    Name: string;
    poste: string;
    image: () => ReactNode;
    avis: string;
}