import Container from "@mui/material/Container";
import { LogoAndTitle } from "~/components";
import styles from "./Options.module.scss";
import {Domains} from "~/entries/options";

const MainContainer = () => {
    return (
        <div className={styles["main-container"]}>
            <header className={styles["header"]}>
                <LogoAndTitle title="Standin options" />
            </header>

            <Container className={styles["domains-container"]}
                maxWidth="sm"
            >
                <Domains />
            </Container>
        </div>
    )
}

export default MainContainer