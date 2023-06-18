export const removeDomainFromURL = (url: string): string => {
    const urlObject = new URL(url);
    const everythingAfterDomain = url.split(urlObject.hostname)[1];
    console.log(everythingAfterDomain)    
    
    return everythingAfterDomain;
}