export type {
    EndsWith,
    StartsWith
} from "./types/strings";

export type {
    GeneralInstance,
    InvidiousInstance,
    PipedInstance,
    NitterInstance,
    LibredditInstance,
    TedditInstance,
    InstanceApi,
    OfficialDomain,
    ApiDomain,
    DomainGroup,
    InstanceGroup,
    Instance,
    ListableInstance,
    StandinGroup,
    //NameGroup,
    ValidUrl,
    Redirector
} from "./types/instances";

export {
    formats
} from "./constants/formats";

export {lightTheme} from "./themes";

export {
    getDataFromStorage,
    storeDataToStorage
} from "./storage";

// export {
//     publicInstances,
//     fetchInstances
// } from "./instanceApi";

export {
    initialInstances,
    initialDomainGroups
}from "./constants/instanceData";

export type {
    DomainsStructure
} from "./types/model.interface";

export {
    InstanceModel
} from "./model/InstanceModel";

export {
    capitalizeFirst
} from "./utils/conversions";

export {
    DOMAIN_GROUPS,
    REDIRECTS
} from "./constants/keys";

export type {
    StorageKey
} from "./types/browser";

export {Messages} from "./constants/messages";
export {BrowserMessages} from "./BrowserMessages";
