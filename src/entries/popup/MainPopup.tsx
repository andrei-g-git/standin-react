import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { Logo, LogoAndTitle } from "~/components";
import {ToggledRedirector} from "~/components";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "~/ts";
import {Standins, ToggleGroupLegend} from "~/entries/popup";
import styles from "./MainPopup.module.scss";

const MainContainer = () => {
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={lightTheme}>
                <Container sx={{/* display: "flex", flexDirection: "column", alignItems: "center", position: "relative", */ width: "300px"}}>
                    <header className={styles["popup-header"]}>
                        <LogoAndTitle title="Standin React" />
                    </header>
                    <Container className={styles["redirectors"]}
                        disableGutters 
                        sx={{position: "relative", height: "85%"}}
                    >
                        
                        <Standins Standin={ToggledRedirector}/>

                        <ToggleGroupLegend />
                    </Container>

                </Container>
            </ThemeProvider>              
        </StyledEngineProvider>
      
    )
}

export default MainContainer;