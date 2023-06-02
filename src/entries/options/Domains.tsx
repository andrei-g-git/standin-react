import { createContext, useEffect, useState } from "react";
import { DomainGroup } from "~/ts";
import { InstanceGroup } from "~/components";
import { InstancesContext } from "~/entries/options";
import browser from "webextension-polyfill";


// const DomainGroupContext = createContext<DomainGroup>({
//     group: "none",
//     apis: [
//         {
//             api: "",
//             instances: [
//                 {
//                     name: "",
//                     url: "https://"
//                 }
//             ]
//         }
//     ]    
// });

//export const InstancesContext = createContext<string[]>([]);

const Domains = () => {
    const [domainGroups, setDomainGroups] = useState<DomainGroup[] | undefined>([]);
    useEffect(() => {
        browser.storage.local.get("domainGroups")
            .then(data => setDomainGroups(data.domainGroups))

        setTimeout(() => {
            console.log("domain groups from use Effect: ", domainGroups)
        },
            100
        )
    },
        []
    );   
    
    console.log("domain groups: ", domainGroups)

    return (
        <div>
            {
                (domainGroups && domainGroups.length) && domainGroups.map((group: DomainGroup, index: number) => 
                    <InstancesContext.Provider value={group.apis[index]?.instances.map(instance => instance.name)}>
                        <InstanceGroup title={group.apis[index]?.api}
                            category={group.group}
                        />
                    </InstancesContext.Provider>    
                )
            }
        </div>
    )
}

export default Domains;