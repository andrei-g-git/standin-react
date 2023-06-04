import Container from '@mui/material/Container';
import List from '@mui/material/List';
import React from 'react';
import {ToggleGroupLegend} from '~/entries/popup';
import { useLoadModel, useStandinData } from './hooks/storage.hooks';
import { StandinGroup } from '~/ts';

const Standins = (props: {Standin: React.FunctionComponent<any>}) => {
    const model = useLoadModel("domainGroups");
    const standinGroups: StandinGroup[] = useStandinData(model);

    return (
        <Container disableGutters sx={{position: "relative"}}>
            <List>
                {/* <props.Standin />
                <props.Standin />
                <props.Standin />
                <props.Standin />
                <props.Standin />
                <props.Standin /> */}
                {
                    standinGroups?.map(standinData => 
                        <props.Standin group={standinData.group}
                            selected={standinData.selected}
                            instances={standinData.instances.map(instance => instance.name)}
                        />   
                    )
                }
            </List>

            <ToggleGroupLegend />
        </Container>
    )
}

export default Standins;