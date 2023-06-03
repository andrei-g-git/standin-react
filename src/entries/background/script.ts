import "./main";


//test
import { publicInstances, fetchInstances } from "~/ts";

let supportedDomains = [
    {
        group: "youtube",
        apis: [
            {
                api: "youtube",
                instances: [
                    {
                        name: "youtube.com",
                        url: "https:/youtube.com"
                    },
                    {
                        name: "youtu.be",
                        url: "https://youtu.be"
                    }
                ]
            }
        ]
    },
    {
        group: "twitter",
        apis: [
            {
                api: "twitter",
                instances: [
                    {
                        name: "twitter.com",
                        url: "https:/twitter.com"
                    }
                ]
            }
        ]
    },
    {
        group: "reddit",
        apis: [
            {
                api: "reddit",
                instances: [
                    {
                        name: "reddit.com",
                        url: "https:/reddit.com"
                    }
                ]
            }
        ]
    }    
];

publicInstances.forEach((instance) => {
    instance.apis.forEach(async (api) => {
        const apiUrl = api.api;
        const instances = await fetchInstances(apiUrl, api.format, () => {});
        console.log(`${api.name} instances:  \n`, instances);
    })
})
