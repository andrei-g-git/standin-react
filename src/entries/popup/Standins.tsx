import Container from '@mui/material/Container';
import List from '@mui/material/List';
import React from 'react';
import {ToggleGroupLegend} from '~/entries/popup';
import { useLoadModel, useStandinData } from './hooks/storage.hooks';
import { BrowserMessages, DomainsStructure, IconDictionary, PossiblyDomain, StandinGroup } from '~/ts';
import RedirectButton from '~/components/RedirectButton';
import { StandinIcons } from '~/components/custom-icons';

const Standins = (props: {Standin: React.FunctionComponent<any>}) => {
    const model = useLoadModel("domainGroups");
    const standinGroups: StandinGroup[] = useStandinData(model);

    return (
        <Container disableGutters sx={{position: "relative"}}>
            <List>
                {
                    standinGroups?.map((standinData, index: number) => 
                        <props.Standin index={index}
                            group={standinData.group}
                            redirecting={standinData.redirecting}
                            selected={standinData.selected}
                            instances={standinData.instances.map(instance => instance.name)}
                            notify={storeStandinAction(model)}
                            RedirectButton={<RedirectButton
                                Icon={StandinIcons[standinData.group]}
                                selected={standinData.selected as PossiblyDomain}/> //not a good idea, should change the type in standinData
                            }
                        />   
                    )
                }
            </List>

            <ToggleGroupLegend />
        </Container>
    )
}

const storeStandinAction = (model: DomainsStructure) => {
    return (selected: PossiblyDomain/* string */, checked: boolean, index: number) => {
        model.setSelected(selected, checked, index);
        model.toLocalStorage();
        model.storeRedirectors();
        //BrowserMessages.instancesChanged();
        BrowserMessages.redirectsChanged();
    }
}

export default Standins;