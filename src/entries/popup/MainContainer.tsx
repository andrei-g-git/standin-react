import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Logo, Test } from "~/components";
import styles from "./MainContainer.module.scss";
import Box from "@mui/material/Box";
import {ToggledRedirector} from "~/components";

const MainContainer = () => {
    return (
        <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", position: "relative", width: "300px"}}>
            <header className={styles["popup-header"]}>
                <Logo width="100%" height="100%" />
                <h5>Standin Redirect</h5>
            </header>
            <List>
                <ToggledRedirector />
                <ToggledRedirector />
                <ToggledRedirector />
                <ToggledRedirector />
                <ToggledRedirector />
                <ToggledRedirector />
            </List>
            <Box sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                border: "solid 1px black",
                width: "50%",
                height: "100%",
                transform: "translateX(-50%)",
                pointerEvents: "none"
            }}>

            </Box>
        </Container>
    )
}

export default MainContainer;