import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { InstancesContext } from "~/entries/options";
import { ListableInstance } from "~/ts";

const InstanceList = (props: {instances?: string[]}) => {
    const instances = useContext(InstancesContext);

    return (
        <List /* sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} */>
            {
                instances?.map((instance: ListableInstance | undefined, index: number) => 
                    <ListItem disablePadding key={index}>
                        <ListItemButton dense>
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

export default InstanceList;





{/* <li>
    <Checkbox edge="start"
        disableRipple
        checked={true}
    />  
    <p>{domain? domain : "n/a"}</p>                      
</li>    */}             