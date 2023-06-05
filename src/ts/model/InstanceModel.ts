//import { ApiDomain, DomainGroup, Instance, InstanceGroup, OfficialDomain } from "../types/instances";
import { ApiDomain, DomainGroup, Instance, InstanceGroup, OfficialDomain, DomainsStructure, StandinGroup, StartsWith, initialDomainGroups, initialInstances } from "~/ts";
import browser from "webextension-polyfill";
import { Redirector, ValidUrl } from "../types/instances";

export class InstanceModel implements DomainsStructure{
    constructor(private domainGroups: DomainGroup[]){}

    get DomainGroups(): DomainGroup[] {
        return this.domainGroups;
    }
    set DomainGroups(groups: DomainGroup[]) {
        this.domainGroups = groups;
    }

    getCategory = (index: number) => {
        return this.domainGroups[index].group;
    }
    setCategory = (category: OfficialDomain, index: number) => {
        this.domainGroups[index].group = category;
    }
    getApi = (categoryIndex: number, apiIndex: number) => {
        return this.domainGroups[categoryIndex]
            .apis[apiIndex]
            .api;
    }
    setApi = (api: ApiDomain/* string */, categoryIndex: number, apiIndex: number) => {
        this.domainGroups[categoryIndex]
        .apis[apiIndex]
        .api = api;
    }
    getInstances = (categoryIndex: number, apiIndex: number) => {
        return this.domainGroups[categoryIndex]
        .apis[apiIndex]
        .instances;
    }
    setInstances = (instances: Instance[], categoryIndex: number, apiIndex: number) => {
        this.domainGroups[categoryIndex]
        .apis[apiIndex]
        .instances = instances;
    }

    toLocalStorage = () => {
        browser.storage.local.set({domainGroups: this.domainGroups})
    }
    
    toggleInstanceUse = (category: OfficialDomain, apiName: ApiDomain, index: number) => {
        const group = this.domainGroups.find(group => group.group === category);
        if(group){
            const subgroup = group.apis.find(api => api.api === apiName);
            if(subgroup){
                subgroup.instances[index].using = !subgroup.instances[index].using;

                console.log(`${subgroup.instances[index].name} checked status:  ${subgroup.instances[index].using}`)            
            }       
        }
    }

    extractInstanceGroups = () => {
        let instances: InstanceGroup[] = [];
        this.domainGroups.forEach((group: DomainGroup) => {
            group.apis.forEach(api => {
                instances.push({
                    group: group.group,
                    subgroup: api.api,
                    instances: api.instances.map(instance => {
                        return {
                            name: instance.name,
                            checked: instance.using
                        }
                    })
                });
            })
        });
        return instances;        
    }

    extractStandinData = () => {
        let standins: StandinGroup[] = [];
        this.domainGroups.forEach((group: DomainGroup) => {
            let selected: string = group.group;/* initialInstances.find(instance => (instance.name === group.group && instance.selected))!.name; */ //should just be group.group since it's just an initialization...
            //console.log("SELECTED: ", selected) //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            const instances:{
                name: string,
                url: StartsWith<"https://"> | StartsWith<"http://">
            }[] = [];
            group.apis.forEach(api => {
                instances.push(
                    ...api.instances //careful -- spread
                        .filter(instance => instance.using)
                        .map(used => {
                            return {
                                name: used.name,
                                url: used.url
                            }
                        })
                );

                const matching = api.instances.find(instance => instance.selected)?.name;
                if(matching) selected = matching;
            })
            standins.push({
                group: group.group,
                redirecting: group.redirecting,
                selected: selected,
                instances: instances
            });            
        });
        return standins;           
    }

    setSelected = (selected: string, redirecting: boolean, index: number) => {
        const domainGroup = this.domainGroups[index];
        domainGroup.redirecting = redirecting;
        domainGroup.apis.forEach(api => {
            api.instances.forEach((instance => {
                instance.name === selected?
                    instance.selected = true
                :
                    instance.selected = false;
            }))
        })

    }

    storeRedirectors = () => {
        const redirectors: Redirector[] = [];
        this.domainGroups.forEach(group => {
            let target: ValidUrl = initialInstances.find(instance => instance.name === group.group)?.url || "https://nope.zip";
            // const target = group.apis
            //     .filter(api => api.instances.find(instance => instance.selected))[0]
            //     .
            group.apis.forEach(api => { //crap...
                api.instances.forEach(instance => {
                    instance.selected && (target = instance.url);
                })
            })
            group.apis.forEach(api => {
                api.instances.forEach(instance => {
                    if(instance.selected) target = instance.url;
                    const source: ValidUrl = instance.url;
                    redirectors.push({
                        source: source,
                        target: group.redirecting? target : source,
                        //redirecting: group.redirecting
                    })
                })
            })
        })

        browser.storage.local.set({redirects: redirectors});
    }

    static createNew = (storageKey: string | Record<string, any> | string[] | null | undefined): Promise<DomainsStructure> => {
        const newModel = new InstanceModel(initialDomainGroups);
        return new Promise((resolve, reject) => {
            browser.storage.local.get(storageKey)
                .then(data => {
                    newModel.DomainGroups = data.domainGroups;
                    if (browser.runtime.lastError) {
                        return reject(browser.runtime.lastError);
                    }                    
                    resolve(newModel);
                })               
        })

    }

}