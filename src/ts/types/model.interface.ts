import { ApiDomain, DomainGroup, Instance, InstanceGroup, OfficialDomain, Redirector, StandinGroup } from "~/ts";

export interface DomainsStructure{
    get DomainGroups(): DomainGroup[];
    set DomainGroups(groups: DomainGroup[]);

    get Redirectors(): Redirector[];
    set Redirectors(redirectors: Redirector[]);

    getCategory: (index: number) => OfficialDomain; //not actually domain, just name/handle
    setCategory: (category: OfficialDomain, index: number) => void;

    getApi: (categoryIndex: number, apiIndex: number) => ApiDomain/* string */;
    setApi: (api: ApiDomain/* string */, categoryIndex: number, apiIndex: number) => void;

    getInstances: (categoryIndex: number, apiIndex: number) => Instance[];
    setInstances: (instances: Instance[], categoryIndex: number, apiIndex: number) => void;

    toggleInstanceUse: (category: OfficialDomain, api: ApiDomain, instanceIndex: number) => void;

    toLocalStorage: () => void;

    extractInstanceGroups: () => InstanceGroup[];

    extractStandinData: () => StandinGroup[];

    setSelected: (selected: string, redirecting: boolean, groupIndex: number) => void;

    storeRedirectors: () => void;
}