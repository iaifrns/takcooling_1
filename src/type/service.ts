import type { ReactNode } from "react";

export interface Service{
    title: string,
    desc: string,
    logo: () => ReactNode
}