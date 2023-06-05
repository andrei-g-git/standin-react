import "./main"; //everything below should be in main...


//this doesn't run on install yet, it probably runs on every options page mount

//test
// import { getDataFromStorage, initialInstances, initialDomainGroups, StartsWith} from "~/ts";
// import {publicInstances, fetchInstances, } from "~/entries/background";
// import browser from "webextension-polyfill";

// let supportedDomains = initialDomainGroups;//[

// publicInstances.forEach((group) => {
//     group.apis.forEach(async (api) => {
//         const apiUrl = api.api;
//         const instanceData = await fetchInstances(apiUrl, api.format, () => {});
//         const urls = api.getUrls(instanceData as any);

//         for(const domainGroup of supportedDomains){
//             if(domainGroup.group === group.group){
//                 domainGroup.apis.push({
//                     api: api.name,
//                     instances: urls.map((url: StartsWith<"https://"> | StartsWith<"http://">) => {
//                         let instance = {
//                             name: url.replace("https://", "").replace("http://", ""),
//                             url: url,
//                             using: false,
//                             selected: false
//                         }
//                         const matching = initialInstances.find(instance => instance.url === url)
//                         if(matching){
//                             instance.using = true;
//                             instance.selected = matching.selected
//                         }
                        
//                         return instance;
//                     })
//                 })
//             }
//         }
//     })
// })

// setTimeout(() => {
//     const domainGroups = supportedDomains;


//     browser.storage.local.set({domainGroups: domainGroups})
// },
//      3000
// )

// setTimeout(() => {
//     getDataFromStorage(browser, ["domainGroups"])
//         .then(data => {
//             //console.log("stored data : \n", data)
//         })
//     // browser.storage.local.get(["domainGroups"])
//     //     .then(data => console.log("DATA: ", data))
// },
//     1000
// )

