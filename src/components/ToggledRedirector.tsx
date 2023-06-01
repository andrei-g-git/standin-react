import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Switch from "@mui/material/Switch";
import { YoutubeStandin } from "~/components";
import { useState } from "react";
import styles from "./ToggleRedirector.module.scss";

const ToggledRedirector = () => {
    const [test, setTest] = useState("1");

    return (
        <ListItem sx={{width: "250px", paddingInlineStart: 0}}>
            <Switch sx={{marginRight: "15%"}}/>
            <ButtonGroup variant="contained" fullWidth >

                <FormControl fullWidth>
                    <InputLabel>Youtube</InputLabel>
                    <Select className={styles["square-border-right"]}
                        label="Youtube"
                        value={test}
                        onChange={(event: SelectChangeEvent) => setTest(event.target.value)}
                    >
                        <MenuItem value="1">Foo</MenuItem>
                        <MenuItem value="2">Barrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</MenuItem>
                        <MenuItem value="3">Balls</MenuItem>
                    </Select>                    
                </FormControl>

                <Button className={styles["square-border-left"]}
                    variant="outlined"
                    endIcon={<YoutubeStandin width="100%" height="100%" />}
                    size="large"
                    fullWidth
                />
            </ButtonGroup>        
        </ListItem>

    )
}

export default ToggledRedirector