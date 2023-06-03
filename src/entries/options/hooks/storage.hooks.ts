import { useEffect, useState } from "react";
import {DomainGroup, DomainsStructure, InstanceGroup, InstanceModel, initialDomainGroups} from "~/ts";
import browser from "webextension-polyfill";

export const useInstanceGroups = () => {
    const [instanceGroups, setInstanceGroups] = useState<InstanceGroup[]>([]);
    useEffect(() => {
        browser.storage.local.get("domainGroups")
            .then(data => {
                const instanceGroups = extractInstances(data.domainGroups);
                setInstanceGroups(instanceGroups);
            })
    },
        []
    );  
    console.log("INSTANCE GROUPS:  ", instanceGroups)
    return instanceGroups;   
}

const extractInstances = (domainGroups: DomainGroup[]): InstanceGroup[] => {
    let instances: InstanceGroup[] = [];
    domainGroups.forEach((group: DomainGroup) => {
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

export const useStoredDomains = (key: string) => {
    const [model, setModel] = useState<DomainsStructure>(new InstanceModel(initialDomainGroups));
    useEffect(() => {
        browser.storage.local.get(key)
            .then(data => {
                setModel(new InstanceModel(data.domainGroups))
            })        
    },
        []
    ) 

    return model;
}