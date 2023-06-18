import { 
    GeneralInstance, 
    formats,     
    InvidiousInstance, 
    PipedInstance,
    NitterInstance,
    LibredditInstance,
    TedditInstance,

} from "~/ts";

import yaml from "js-yaml";

export const publicInstances: GeneralInstance[] = [
    {
        group: "youtube",
        apis: [
            {
                name: "invidious",
                api: "https://api.invidious.io/instances.json",
                format: formats.JSON,
                getUrls: (instanceData: InvidiousInstance[]) => {
                    return instanceData.map((item: InvidiousInstance) => item[1].uri);
                }
            },
            {
                name: "piped",
                api: "https://piped-instances.kavin.rocks",
                format: formats.JSON,
                getUrls: (instanceData: PipedInstance[]) => {
                    return instanceData.map((item: PipedInstance) => item.api_url);
                }
            },        
        ],
    },
    {
        group: "twitter",
        apis: [
            {
                name: "nitter",
                api: "https://raw.githubusercontent.com/xnaas/nitter-instances/master/.upptimerc.yml",
                format: formats.YAML,
                getUrls: (instanceData: {[key: string]: any}) => {
                    const instances = instanceData.sites;
                    return instances.map((item: NitterInstance) => item.url);
                }
            },              
        ]
      
    },
    {
        group: "reddit",
        apis: [
            {
                name: "libreddit",
                api: "https://raw.githubusercontent.com/libreddit/libreddit-instances/master/instances.json",
                format: formats.JSON,
                getUrls: (instanceData: {
                    updated: string,
                    instances: LibredditInstance[]
                }) => {
                    const instances = instanceData.instances;
                    return instances.map((item: LibredditInstance) => item.url);
                }
            },     
            {
                name: "teddit",
                api: "https://codeberg.org/teddit/teddit/raw/branch/main/instances.json",
                format: formats.JSON,
                getUrls: (instanceData: TedditInstance[]) => {
                    return instanceData.map((item: TedditInstance) => item.url);
                }
            }             
        ]
          
    }
];

export const fetchInstances = async (url: string, format: number, onSuccess: Function): Promise<{[key: string]: any} | Promise<unknown> | undefined> => {
    try{
        const response = await fetch(url);
        if(response.status === 200){
            const blob = await response.blob()
            const rawData = await blob.text();

            switch(format){
                case formats.JSON:
                    return await JSON.parse(rawData);
                case formats.YAML:
                    return await yaml.load(rawData);
                default: 
                    return await JSON.parse(rawData);
            }
        }
    } catch(error) {
        console.log(error)
    }
}


//scribe "api", it's crap
//https://git.sr.ht/~edwardloveall/scribe/blob/main/docs/instances.md