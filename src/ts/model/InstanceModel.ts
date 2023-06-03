import { ApiDomain, DomainGroup, Instance, InstanceGroup, OfficialDomain } from "../types/instances";
import { DomainsStructure } from "~/ts";
import browser from "webextension-polyfill";

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

        browser.storage.local.set({fuck: "me"})
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

}