import {Logo} from "~/components";
import styles from "./LogoAndTitle.module.scss";
import { Typography } from "@mui/material";
//import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const LogoAndTitle = (props: {title: string}) => {
    return (
        // <header className={styles["logo-and-header"]}>
        //     <Logo width="100%" height="100%" />
        //     <h5>{props.title}</h5>
        // </header>


        // <ListItem>
        //     <ListItemAvatar>
        //         <Avatar>
        //             <Logo width="100%" height="100%" />                    
        //         </Avatar>
        //     </ListItemAvatar>
        //     <ListItemText primary={props.title}/>
        // </ListItem>

        <Typography variant="body2"
            align="left"
            sx={{display: "flex"}}
        >
            <Logo />
            {props.title}
        </Typography>
    )
}

export default LogoAndTitle;