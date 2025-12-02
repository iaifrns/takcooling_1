import type { ReactNode } from "react";

export interface Service{
    title: string,
    desc: string,
    logo: () => ReactNode
}

export interface ServiceTab {
    id: number,
    label: string,
    image: string,
    content: string,
    title:string
}