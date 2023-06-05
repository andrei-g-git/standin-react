import { DomainGroup, Instance } from "~/ts";

export const initialInstances: Instance[] = [
    {
        url: "https://youtube.com",
        name: "youtube.com",
        using: true,
        selected: true,
    },
    {
        url: "https://youtu.be"               ,
        name: "youtu.be"               ,
        using: true,
        selected: false,
    } ,
    {
        url: "https://piped.kavin.rocks",
        name: "piped.kavin.rocks",
        using: true,
        selected: false,
    },
    {
        url: "https://piped.video"              ,
        name: "piped.video"              ,
        using: true,
        selected: false,
    }, 
    {
        url: "https://tokhmi.xyz",
        name: "tokhmi.xyz",
        using: true,
        selected: false,
    },
    {
        url: "https://api-piped.mha.fi",
        name: "api-piped.mha.fi",
        using: true,
        selected: false,
    },
    {
        url: "https://yewtu.be",
        name: "yewtu.be",
        using: true,
        selected: false,
    },
    {
        url: "https://invidious.snopyta.org",
        name: "invidious.snopyta.org",
        using: true,
        selected: false,
    },
    {
        url: "https://vid.puffyan.us",
        name: "vid.puffyan.us",
        using: true,
        selected: false,
    },
    {
        url: "https://tube.cadence.moe",
        name: "tube.cadence.moe",
        using: true,
        selected: false,
    },
    {
        url: "https://twitter.com",
        name: "twitter.com",
        using: true,
        selected: true,
    },
    {
        url: "https://nitter.net",
        name: "nitter.net",
        using: true,
        selected: false,
    },
    {
        url: "https://reddit.com",
        name: "reddit.com",
        using: true,
        selected: true,
    },
    {
        url: "https://teddit.net",
        name: "teddit.net",
        using: true,
        selected: false,
    },
    {
        url: "https://libredd.it",
        name: "libredd.it",
        using: true,
        selected: false,
    },
    {
        url: "https://medium.com",
        name: "medium.com",
        using: true,
        selected: true,
    },
    {
        url: "https://scribe.rip",
        name: "scribe.rip",
        using: true,
        selected: false,
    },
    {
        url: "https://md.vern.cc",
        name: "md.vern.cc",
        using: true,
        selected: false,
    },
    {
        url: "https://tiktok.com",
        name: "tiktok.com",
        using: true,
        selected: true,
    },
    {
        url: "https://proxitok.herokuapp.com",
        name: "proxitok.herokuapp.com",
        using: true,
        selected: false,
    }, 
    {
        url: "https://imgur.com",
        name: "imgur.com",
        using: true,
        selected: true,
    },
    {
        url: "https://i.bcow.xyz",
        name: "i.bcow.xyz",
        using: true,
        selected: false,
    },
    {
        url: "https://imgin.voidnet.tech"   ,
        name: "imgin.voidnet.tech"   ,
        using: true,
        selected: false,
    } 
];


export const initialDomainGroups: DomainGroup[] = [
    {
        group: "youtube",
        redirecting: false,
        apis: [
            {
                api: "youtube",
                instances: [
                    {
                        name: "youtube.com",
                        url: "https://youtube.com",
                        using: true,
                        selected: true
                    },
                    {
                        name: "youtu.be",
                        url: "https://youtu.be",
                        using: true,
                        selected: false
                    }
                ]
            }
        ]
    },
    {
        group: "twitter",
        redirecting: false,
        apis: [
            {
                api: "twitter",
                instances: [
                    {
                        name: "twitter.com",
                        url: "https://twitter.com",
                        using: true,
                        selected: true
                    }
                ]
            }
        ]
    },
    {
        group: "reddit",
        redirecting: false,
        apis: [
            {
                api: "reddit",
                instances: [
                    {
                        name: "reddit.com",
                        url: "https://reddit.com",
                        using: true,
                        selected: true
                    }
                ]
            }
        ]
    }    
];