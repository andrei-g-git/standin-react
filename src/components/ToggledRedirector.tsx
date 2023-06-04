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
import { OfficialDomain, capitalizeFirst } from "~/ts";

const ToggledRedirector = (props: {
    group: OfficialDomain,
    selected: string,
    instances: string[]
}) => {
    const [selected, setSelected] = useState(props.selected);

    return (
        <ListItem sx={{width: "250px", paddingInlineStart: 0}}>
            <Switch sx={{marginRight: "15%"}}/>
            <ButtonGroup variant="contained" 
                fullWidth 
                disableRipple //and do it on children components too
            >

                <FormControl fullWidth>
                    <InputLabel>{capitalizeFirst(props.group)}</InputLabel>
                    <Select className={styles["square-border-right"]}
                        label={capitalizeFirst(props.group)}
                        value={selected}
                        onChange={(event: SelectChangeEvent) => setSelected(event.target.value)}
                    >
                        {/* <MenuItem value="1">Foo</MenuItem>
                        <MenuItem value="2">Barrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</MenuItem>
                        <MenuItem value="3">Balls</MenuItem> */}
                        {
                            props.instances.map(instance =>
                                <MenuItem value={instance}>
                                    {instance}
                                </MenuItem>    
                            )
                        }
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