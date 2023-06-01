import {createTheme} from "@mui/material/styles";

export const lightTheme = createTheme({
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        }
    }
})