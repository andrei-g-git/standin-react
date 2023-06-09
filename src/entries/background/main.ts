import browser from "webextension-polyfill";

	//test
	import { getDataFromStorage, initialInstances, initialDomainGroups, StartsWith, Redirector, BrowserMessages, REDIRECTS} from "~/ts";
	import {publicInstances, fetchInstances, loadRedirects, interceptLinkClick, } from "~/entries/background";


let redirects: Redirector[] = [];
console.log("empty redirects: ", redirects)
const actuallyLoadRedirects = (key: string) => {
	loadRedirects(key)
		.then(redirectData => {
			
			redirects = redirectData as unknown as Redirector[];
			console.log("REDIRECTS: ", redirects)			
		})
}

browser.runtime.onInstalled.addListener(() => {
	console.log("Extension installed");





	// loadRedirects(REDIRECTS) 
	// 	.then(redirectData => {
	// 		console.log("REDIRECT DATA: ", redirectData)
	// 		redirects = redirectData as unknown as Redirector[];
	// 	});
	actuallyLoadRedirects(REDIRECTS);
	BrowserMessages.listenInstanceChange(actuallyLoadRedirects, REDIRECTS);
	// document.addEventListener("click", interceptLinkClick(redirects));

	//test
	setTimeout(() => {
		BrowserMessages.onTabChange(redirects);
	},
		5000
	)
	//BrowserMessages.onTabChange(redirects);



	//test
	let supportedDomains = initialDomainGroups;//[
	
	publicInstances.forEach((group) => {
		group.apis.forEach(async (api) => {
			const apiUrl = api.api;
			const instanceData = await fetchInstances(apiUrl, api.format, () => {});
			const urls = api.getUrls(instanceData as any);
	
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
});
