import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useEffect, useState } from "react";
import { InstancesContext, ListNotificationContext } from "~/entries/options";
import { ListableInstance } from "~/ts";

const InstanceList = (props: {instances?: string[], index: number}) => {
    const instances = useContext(InstancesContext);
    const notifyToggled = useContext(ListNotificationContext);
    const [chcecked, setChecked] = useState<boolean[]>([]);
    useEffect(() => {
        setChecked(instances.map(instance => instance.checked));
    },
        []
    );

    return (
        <List /* sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} */>
            {
                instances?.map((instance: ListableInstance | undefined, index: number) => 
                    <ListItem disablePadding key={index}>
                        <ListItemButton dense
                            onClick={() => handleClick(
                                index,
                                instances,
                                setChecked,
                                notifyToggled
                            )}
                        >
                            <ListItemIcon>
                                <Checkbox edge="start"
                                    disableRipple
                                    checked={instance? instance.checked : false}
                                />
                            </ListItemIcon>
                            <ListItemText primary={instance? instance.name : "n/a"} />
                        </ListItemButton>
                    </ListItem>
                )
            }                           
        </List>
    )
}

const handleClick = (
    index: number, 
    instances: ListableInstance[],
    setChecked: (value: React.SetStateAction<boolean[]>) => void, 
    notify: (index: number) => void
) => {
    instances[index].checked = !instances[index].checked;
    setChecked(instances.map(instance => instance.checked));
    notify(index);
}

export default InstanceList;





{/* <li>
    <Checkbox edge="start"
        disableRipple
        checked={true}
    />  
    <p>{domain? domain : "n/a"}</p>                      
</li>    */}             