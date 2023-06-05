// export type GeneralInstance = {
//     [key: string]: {
//         [key: string]: {
//             api: string,
//             format: number,
//             getUrls: (instanceData: any) => string[]        
//         }        
//     }

import { EndsWith, StartsWith } from "./strings";

// }

export type GeneralInstance = {
    group: string,
    apis: {
        name: ApiDomain,//string,
        api: string,
        format: number,
        getUrls: (instanceData: any) => (StartsWith<"https://"> | StartsWith<"http://">)[];//string[];
    }[]           
}

export type InvidiousInstance = [
    string,
    {[key: string]: any}
];

export type PipedInstance = {
    name: string
    api_url: StartsWith<"https://"> | StartsWith<"http://">,//string
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
    url: StartsWith<"https://"> | StartsWith<"http://">,//string,
    icon: string,
}

export type LibredditInstance = {
    url: StartsWith<"https://"> | StartsWith<"http://">,//string,
    country: string,
    version: string,
    description: string,
}

export type TedditInstance = {
    url: StartsWith<"https://"> | StartsWith<"http://">, //string,
    onion?: string,
    i2p?: string,
    notes?: string,
}

export type InstanceApi = InvidiousInstance | PipedInstance | NitterInstance | LibredditInstance | TedditInstance;

export type OfficialDomain = "none" | "youtube" | "twitter" | "reddit" | "tiktok" | "medium" | "imgur";

export type ApiDomain = "none" | "youtube" | "twitter" | "reddit" | "tiktok" | "medium" | "imgur" | "invidious" | "piped" | "nitter" | "teddit" | "libreddit" | "scribe" | "proxytok";

export type DomainGroup = {
    group: OfficialDomain,
    redirecting: boolean,
    apis: {
        api: ApiDomain,
        instances: Instance[]
    }[]
}

export type InstanceGroup = {
    group: OfficialDomain, 
    subgroup: ApiDomain,
    instances: {
        name: string,
        checked: boolean
    }[]
};

export type Instance = {
    name: string,
    url: StartsWith<"https://"> | StartsWith<"http://">,
    using: boolean,
    selected: boolean
}

export type ListableInstance = {
    name: string,
    checked: boolean
}

export type StandinGroup = {
    group: OfficialDomain,
    redirecting: boolean,
    selected: string,
    instances: {
        name: string,
        url: StartsWith<"https://"> | StartsWith<"http://">
    }[]
}

// export type NameGroup = {
//     group: OfficialDomain,
//     selected: string,
//     instances: {
//         name: string,
//         url: StartsWith<"https://"> | StartsWith<"http://">
//     }[]
// }

export type Redirector = {
    // official: OfficialDomain, //these should be urls
    // replacer: string
    source: ValidUrl,
    target: ValidUrl,
    //redirecting: boolean
}

export type ValidUrl = StartsWith<"https://"> | StartsWith<"http://">;

