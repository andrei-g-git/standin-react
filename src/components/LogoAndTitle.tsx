import {Logo} from "~/components";
import styles from "./LogoAndTitle.module.scss";

const LogoAndTitle = (props: {title: string}) => {
    return (
        <header className={styles["logo-and-header"]}>
            <Logo width="100%" height="100%" />
            <h5>{props.title}</h5>
        </header>
    )
}

export default LogoAndTitle;