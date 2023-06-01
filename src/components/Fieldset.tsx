import { EndsWith } from "~/ts";
import styles from "./Fieldset.module.scss";

const Fieldset = (props: {
    width?: number | EndsWith<"%">,
    height?: number | EndsWith<"%">,
    legend: string
}) => {
    return (
        <fieldset className={styles["fieldset"]}>
            <legend className={styles["legend"]}>
                {props.legend}
            </legend>
        </fieldset>
    )
}

export default Fieldset