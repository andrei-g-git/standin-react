import { Browser } from "webextension-polyfill";

export async function storeDataToStorage(browser: Browser, data: any /* {[key: string]: any} */){
    return new Promise((resolve, reject) => {
        browser.storage.local.set(data);
        //reject(new Error("couldn't store"))
    });
}

export async function getDataFromStorage(browser: Browser, keys: string | Record<string, any> | string[] | null | undefined){
    return new Promise((resolve, reject) => {
        browser.storage.local.get(keys);
        //reject(new Error("something went wrong"))
    });
}