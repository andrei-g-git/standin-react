import List from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { InstancesContext } from "~/entries/options";

const InstanceList = (props: {instances?: string[]}) => {
    const instances = useContext(InstancesContext);

    setTimeout(() => {
        console.log("from list, instances:  ", instances) //works the first run, is undefined the second
    },
        1000
    )

    return (
        <List>
            {
                /* props. */instances?.map((domain: string) => 
                    <ListItem key={domain}
                        disablePadding
                    >
                        {/* <ListItemButton dense> */}
                            {/* <ListItemIcon> */}
                                <Checkbox edge="start"
                                    disableRipple
                                    checked={true}
                                />
                            {/* </ListItemIcon> */}
                            <ListItemText primary={domain} />
                        {/* </ListItemButton> */}
                    </ListItem>
                )
            }
        </List>
    )
}

export default InstanceList;