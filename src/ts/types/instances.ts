// export type GeneralInstance = {
//     [key: string]: {
//         [key: string]: {
//             api: string,
//             format: number,
//             getUrls: (instanceData: any) => string[]        
//         }        
//     }

import { StartsWith } from "./strings";

// }

export type GeneralInstance = {
    group: "string",
    apis: {
        name: string,
        api: string,
        format: number,
        getUrls: (instanceData: any) => string[];
    }[]           
}

export type InvidiousInstance = [
    string,
    {[key: string]: any}
];

export type PipedInstance = {
    name: string
    api_url: string
    locations: string
    version: string
    up_to_date: boolean,
    cdn: boolean,
    registered: number,
    last_checked: number,
    cache: boolean,
    s3_enabled: boolean
}

export type NitterInstance = {
    name: string,
    url: string,
    icon: string,
}

export type LibredditInstance = {
    url: string,
    country: string,
    version: string,
    description: string,
}

export type TedditInstance = {
    url: string,
    onion?: string,
    i2p?: string,
    notes?: string,
}

export type Instance = InvidiousInstance | PipedInstance | NitterInstance | LibredditInstance | TedditInstance;

export type OfficialDomain = "none" | "youtube" | "twitter" | "reddit" | "tiktok" | "medium" | "imgur";

export type DomainGroup = {
    group: OfficialDomain,
    apis: {
        api: string,
        instances: {
            name: string,
            url: StartsWith<"https://"> | StartsWith<"http://">
        }[]
    }[]
}

