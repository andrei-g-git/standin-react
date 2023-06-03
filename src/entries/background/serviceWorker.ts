import "./main";


//test
import { publicInstances, fetchInstances, storeDataToStorage, getDataFromStorage, initialInstances, initialDomainGroups, StartsWith} from "~/ts";
import browser from "webextension-polyfill";

let supportedDomains = initialDomainGroups;//[
//     {
//         group: "youtube",
//         apis: [
//             {
//                 api: "youtube",
//                 instances: [
//                     {
//                         name: "youtube.com",
//                         url: "https:/youtube.com",
//                         using: true,
//                         selected: true
//                     },
//                     {
//                         name: "youtu.be",
//                         ulr: "https://youtu.be",
//                         using: true,
//                         selected: false
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         group: "twitter",
//         apis: [
//             {
//                 api: "twitter",
//                 instances: [
//                     {
//                         name: "twitter.com",
//                         url: "https:/twitter.com",
//                         using: true,
//                         selected: true
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         group: "reddit",
//         apis: [
//             {
//                 api: "reddit",
//                 instances: [
//                     {
//                         name: "reddit.com",
//                         url: "https:/reddit.com",
//                         using: true,
//                         selected: true
//                     }
//                 ]
//             }
//         ]
//     }    
// ];


publicInstances.forEach((group) => {
    group.apis.forEach(async (api) => {
        const apiUrl = api.api;
        const instanceData = await fetchInstances(apiUrl, api.format, () => {});
        //console.log(`${group.group.toUpperCase()}  ${api.name} instances:  \n`, instanceData);
        const urls = api.getUrls(instanceData as any);
        console.log(`${group.group.toUpperCase()}  ${api.name} instances:  \n  urls:  \n`, urls);

        for(const domainGroup of supportedDomains){
            if(domainGroup.group === group.group){
                domainGroup.apis.push({
                    api: api.name,
                    instances: urls.map((url: StartsWith<"https://"> | StartsWith<"http://">) => {
                        let instance = {
                            name: url.replace("https://", "").replace("http://", ""),
                            url: url,
                            using: false,
                            selected: false
                        }
                        const matching = initialInstances.find(instance => instance.url === url)
                        if(matching){
                            instance.using = true;
                            instance.selected = matching.selected
                        }
                        
                        return instance;
                    })
                })
            }
        }
    })
})

setTimeout(() => {
    const domainGroups = supportedDomains;
    //console.log("SUPPORTED DOMAINS:   ", {domainGroups: supportedDomains})
    //storeDataToStorage(browser, {foo: "bar"})

    browser.storage.local.set({domainGroups: domainGroups})
},
     3000
)

setTimeout(() => {
    getDataFromStorage(browser, ["domainGroups"])
        .then(data => {
            //console.log("stored data : \n", data)
        })
    // browser.storage.local.get(["domainGroups"])
    //     .then(data => console.log("DATA: ", data))
},
    1000
)

