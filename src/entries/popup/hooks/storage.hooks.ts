import { useEffect, useState } from "react";
import { DomainsStructure, InstanceModel, StandinGroup, } from "~/ts";

export const useLoadModel = (storageKey: string): DomainsStructure => {
    const [model, setModel] = useState<DomainsStructure>(new InstanceModel([])); //this could pose problems...
    useEffect(() => {   
        InstanceModel.createNew(storageKey)
            .then(model => setModel(model))    
    },
        []
    ); 

    return model;
}

export const useStandinData = (model: DomainsStructure) => {
    const [standinGroups, setStandinGroups] = useState<StandinGroup[]>([]);
    useEffect(() => {
        setStandinGroups(model.extractStandinData());
    },
        [model]
    );

    return standinGroups;
}