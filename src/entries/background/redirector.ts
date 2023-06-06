import { BrowserMessages, StorageKey, Redirector, REDIRECTS } from "~/ts";
import browser from "webextension-polyfill";

type HTMLElementEvent<T extends HTMLElement> = Event & {target: T}

//let redirects: Redirector[] = [];

export const interceptLinkClick = (redirects: Redirector[]) => 
    (event: MouseEvent) => {
        console.log("CLICKED")
        let href: string | null;

        if(event){
            const eventTarget = (<HTMLElementEvent<HTMLElement>><unknown>event).target;
            if(eventTarget && eventTarget.tagName === "A"){
                href = eventTarget.getAttribute("href");

                if(href){
                    event.preventDefault();

                    const sourceAndTarget = redirects.find(item => item.source === href)
                    console.log("SOURCE AND TARGET: ", sourceAndTarget)
                    if(sourceAndTarget){
                        browser.tabs.create({url: sourceAndTarget.target})
                    }
                }
            }
        }
}

export const loadRedirects = (key: string/* StorageKey */) => {
    return new Promise((resolve, reject) => {
        browser.storage.local.get(key)
            .then(data => {
                resolve(data[key])
            });
    });
}


// loadRedirects(REDIRECTS) 
//     .then(redirectData => {
//         redirects = redirectData as unknown as Redirector[];
//     });


// BrowserMessages.listenInstanceChange(loadRedirects, REDIRECTS);

// document.addEventListener("click", interceptLinkClick(redirects));