import { ApiDomain, Instance, InstanceGroup, OfficialDomain } from "~/ts";

export interface Domains{
    get Category(): OfficialDomain; //not actually domain, just name/handle
    set Category(category: OfficialDomain);

    get Api(): ApiDomain;
    set Api(api: ApiDomain);

    get Instances(): Instance[];
    set Instances(instances: Instance[]);

    storeDomainGroups: (domainGroups: InstanceGroup[]) => void;
}