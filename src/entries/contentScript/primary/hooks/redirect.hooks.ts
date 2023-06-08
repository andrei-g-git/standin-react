import { useEffect, useState } from "react";
import { BrowserMessages, Redirector, ValidUrl } from "~/ts";
import browser from "webextension-polyfill";

type HTMLElementEvent<T extends HTMLElement> = Event & {target: T}

export const useRedirect = () => {
    const [redirects, setRedirects] = useState<Redirector[]>([])

    useEffect(() => {
        BrowserMessages.listenTabsChange((data: Redirector[] | string, url: ValidUrl) => {
            console.log("GOT TAB CHANGE MESSAGE: \n data:   ", data, "\n url:  ", url )
            const sourceAndTarget = (<Redirector[]>data).find(item => item.source === url);
            if(sourceAndTarget){
                document.location.href = sourceAndTarget.target;                    
            }
        
        })       
    },
        []
    )    
}

export const useRedirector = (storageKey: string) => { //not using

    const [redirects, setRedirects] = useState<Redirector[]>([])

    useEffect(() => {
        loadRedirects(storageKey) 
            .then(redirectData => {
                console.log("REDIRECT DATA: ", redirectData)
                setRedirects(redirectData as unknown as Redirector[]);
            });
        //BrowserMessages.listenInstanceChange(loadRedirects, storageKey);
        BrowserMessages.listenRedirectsChange(setRedirects);
        document.addEventListener("click", interceptLinkClick(redirects));           
    },
        []
    )

 
}

const loadRedirects = (key: string/* StorageKey */) => {
    return new Promise((resolve, reject) => {
        browser.storage.local.get(key)
            .then(data => {
                resolve(data[key])
            });
    });
}

const interceptLinkClick = (redirects: Redirector[]) => {
    console.log("ADDED CLICK HANDLER")
    return (event: MouseEvent) => {
        console.log("CLICKED")
        let href: string | null;

        if(event){
            console.log("MOUSE EVENT: ", event)
            const eventTarget = (<HTMLElementEvent<HTMLElement>><unknown>event).target;
            if(event.target){
                if(eventTarget.tagName === "A"){
                    console.log("EVENT TARGET:  ", eventTarget)
                    href = eventTarget.getAttribute("href");

                    if(href){
                        console.log("HREF:  ", href)

                        event.preventDefault();

                        const sourceAndTarget = redirects.find(item => item.source === href)
                        console.log("SOURCE AND TARGET: ", sourceAndTarget)
                        if(sourceAndTarget){
                            browser.tabs.create({url: sourceAndTarget.target})
                        }
                    }
                } else if(["https://", "http://"].some(substring => (<HTMLImageElement>eventTarget).src.includes(substring))){
                    href = (<HTMLImageElement>eventTarget).src;

                    if(href){
                        console.log("HREF:  ", href)

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
    }
}

