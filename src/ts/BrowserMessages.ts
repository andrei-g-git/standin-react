import browser from "webextension-polyfill";
import { Messages } from "~/ts";

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
}

