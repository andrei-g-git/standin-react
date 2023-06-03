import { ApiDomain, DomainGroup, DomainsStructure, InstanceGroup, OfficialDomain } from "~/ts";
import { InstanceAccordion } from "~/components"; //not good, this coincides with the InstanceGroup type...
import { 
    InstancesContext, 
    ListNotificationContext, 
    useInstanceGroups
} from "~/entries/options";
import { useEffect, useState } from "react";

const Domains = (props: {model: DomainsStructure}) => {
    //const instanceGroups = useInstanceGroups();
    const [instanceGroups, setInstanceGroups] = useState<InstanceGroup[]>();
    useEffect(() => {
        setInstanceGroups(props.model.extractInstanceGroups())        
    },
        [props.model]
    )

    return (
        <div>
            {
                instanceGroups?.map((item, index: number) => 
                    <InstancesContext.Provider value={item.instances}> 
                        <ListNotificationContext.Provider value={toggleInstanceUse(props.model, item.group, item.subgroup)}>
                            <InstanceAccordion title={item.subgroup}
                                category={item.group}
                                index={index}
                            />                        
                        </ListNotificationContext.Provider>
                    </InstancesContext.Provider>                     
                )
            }
        </div>
    )
}

const toggleInstanceUse = (model: DomainsStructure, category: OfficialDomain, apiName: ApiDomain) => 
    (index: number) => {
        if(model){
            model.toggleInstanceUse(category, apiName, index);
            model.toLocalStorage();
        }
    }

export default Domains;