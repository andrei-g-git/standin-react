import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { YoutubeStandin } from "~/components";
import { useState } from "react";

const ToggledRedirector = () => {
    const [test, setTest] = useState("1");

    return (
        <MenuItem sx={{width: "250px"}}>
            <ButtonGroup variant="contained" fullWidth>
                <FormControl fullWidth>
                    <InputLabel>Youtube</InputLabel>
                    <Select sx={{ borderTopRightRadius: "0%", borderBottomRightRadius: "0%" }}
                        label="Youtube"
                        value={test}
                        onChange={(event: SelectChangeEvent) => setTest(event.target.value)}
                    >
                        <MenuItem value="1">Foo</MenuItem>
                        <MenuItem value="2">Barrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</MenuItem>
                        <MenuItem value="3">Balls</MenuItem>
                    </Select>                    
                </FormControl>

                <Button sx={{ borderTopLeftRadius: "0%", borderBottomLeftRadius: "0%", width: "auto"}}
                    variant="outlined"
                    endIcon={<YoutubeStandin width="100%" height="100%" />}
                    size="large"
                    fullWidth
                />
            </ButtonGroup>        
        </MenuItem>

    )
}

export default ToggledRedirector