import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { Logo } from "~/components";
import {ToggledRedirector} from "~/components";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "~/ts";
import {Standins, ToggleGroupLegend} from "~/entries/popup";
import styles from "./MainPopup.module.scss";

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
                        
                        <Standins Standin={ToggledRedirector}/>

                        <ToggleGroupLegend />
                    </Container>

                </Container>
            </ThemeProvider>              
        </StyledEngineProvider>
      
    )
}

export default MainContainer;