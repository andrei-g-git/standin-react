import { createContext, useEffect, useState } from "react";
import { DomainGroup, OfficialDomain } from "~/ts";
import { InstanceGroup } from "~/components";
import { 
    InstancesContext, 
    useInstanceGroups
} from "~/entries/options";

const Domains = () => {
    const instanceGroups = useInstanceGroups();

    return (
        <div>
            {
                instanceGroups.map(item => 
                    <InstancesContext.Provider value={item.instances}> 
                        <InstanceGroup title={item.subgroup}
                            category={item.group}
                        />
                    </InstancesContext.Provider>                     
                )
            }
        </div>
    )
}

export default Domains;