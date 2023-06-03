import { useEffect, useState } from "react";
import {DomainGroup, InstanceGroup} from "~/ts";
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