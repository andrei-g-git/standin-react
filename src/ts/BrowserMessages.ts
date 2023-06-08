import React from "react";
import browser from "webextension-polyfill";
import { Messages, REDIRECTS, Redirector, ValidUrl } from "~/ts";

export class BrowserMessages{

    static instancesChanged = async (data?: {[key: string]: any}) => {
        try{
            return await browser.runtime.sendMessage({message: Messages.INSTANCES_CHANGED});
        } catch(error){
            console.error("From BrowserMessages:  ", error);
        }
    }

    static listenInstanceChange = (handleMessage: (key: string) => void, storageKey: string) => {
        browser.runtime.onMessage.addListener((message: Messages, sender: browser.Runtime.MessageSender) => {
            handleMessage(storageKey)
        })
    }

    static redirectsChanged = async () => {
        let redirects: Redirector[] = []; //don't need this...
        //return new Promise((resolve, reject) => {
            browser.storage.local.get(REDIRECTS)
                .then(data => {
                    redirects = data[REDIRECTS];
                    try{
                        browser.runtime.sendMessage({redirects: redirects})
                    } catch(error){
                        console.error("From BrowserMessages:  ", error);
                    }                
                })            
        //})

    }

    static listenRedirectsChange = (setRedirects: React.Dispatch<React.SetStateAction<Redirector[]>>) => {
        browser.runtime.onMessage.addListener((message: {redirects: Redirector[]}, sender: browser.Runtime.MessageSender, sendResponse: () => void) => {
            setRedirects(message.redirects);
        })
    }

    static onTabChange = (messageOrData: Redirector[] | string) => {
        browser.tabs.onUpdated.addListener(
            (tabId: number, changeInfo: browser.Tabs.OnUpdatedChangeInfoType, tab) => {
                if(changeInfo.url){
                    browser.tabs.sendMessage(
                        tabId,
                        {
                            data: messageOrData,
                            url: changeInfo.url
                        }
                    )
                }
            }
        )
    }

    static listenTabsChange = (handleTabChange: (data: Redirector[] | string, url: ValidUrl) => void) => {
        browser.runtime.onMessage.addListener((
            message: {
                data: Redirector[] | string,
                url: ValidUrl
            },
            sender: browser.Runtime.MessageSender, 
            sendResponse: () => void
        ) => {
            handleTabChange(message.data, message.url);
        });
    }
}

