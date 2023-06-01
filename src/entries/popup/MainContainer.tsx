import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { Logo, Test } from "~/components";
import styles from "./MainContainer.module.scss";
import Box from "@mui/material/Box";
import {ToggledRedirector} from "~/components";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "~/ts";
import {ToggleGroupLegend} from "~/entries/popup";

const MainContainer = () => {
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={lightTheme}>
                <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", position: "relative", width: "300px"}}>
                    <header className={styles["popup-header"]}>
                        <Logo width="100%" height="100%" />
                        <h5>Standin Redirect</h5>
                    </header>
                    <Container disableGutters sx={{position: "relative"}}>
                        <List>
                            <ToggledRedirector />
                            <ToggledRedirector />
                            <ToggledRedirector />
                            <ToggledRedirector />
                            <ToggledRedirector />
                            <ToggledRedirector />
                        </List>

                        <ToggleGroupLegend />
                    </Container>

                </Container>
            </ThemeProvider>              
        </StyledEngineProvider>
      
    )
}

export default MainContainer;