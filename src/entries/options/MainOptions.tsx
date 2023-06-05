import Container from "@mui/material/Container";
import { LogoAndTitle } from "~/components";
import styles from "./Options.module.scss";
import {Domains, useStoredDomains} from "~/entries/options";
import { useEffect } from "react";

const MainOptions = () => {
    const model = useStoredDomains("domainGroups");
    useEffect(() => {
        console.log("model from MainOprions", model)
    },
        [model]
    )
    return (
        <div className={styles["main-container"]}>
            <header className={styles["header"]}>
                <LogoAndTitle title="Standin options" />
            </header>

            <Container className={styles["domains-container"]}
                maxWidth="sm"
            >
                <Domains model={model}/>
            </Container>
        </div>
    )
}

export default MainOptions