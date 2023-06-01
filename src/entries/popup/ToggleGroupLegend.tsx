import Box from "@mui/material/Box";
import { Fieldset } from "~/components";
import styles from "./ToggleGroupLegend.module.scss";
import {StyledEngineProvider} from "@mui/material/styles";

const ToggleGroupLegend = () => {
    return (
        <Box className={styles["toggle-group-legend"]}>
            <Fieldset legend="Auto-redirect"/>
        </Box>
    )
}

export default ToggleGroupLegend