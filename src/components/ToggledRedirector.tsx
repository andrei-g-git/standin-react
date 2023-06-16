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
import { convertLength } from "@mui/material/styles/cssUtils";

const ToggledRedirector = (props: {
    group: OfficialDomain,
    redirecting: boolean,
    selected: string,
    instances: string[],
    index: number,
    notify: (selected: string, redirecting: boolean, index: number) => void
}) => {
    const [selected, setSelected] = useState(props.selected);
    const [checked, setChecked] = useState(props.redirecting);

    return (
        <ListItem sx={{/* height: "3rem", */ paddingInlineStart: 0/* , paddingTop: 0, paddingBottom: 0 */}}>
            <Switch sx={{marginRight: "10%"}}
                checked={checked}
                onChange={handleSwitch(
                    selected,
                    props.index,
                    setChecked,
                    props.notify
                )}
            />
            <ButtonGroup sx={{width: "180px", maxWidth: "180px", minWidth: "180px"/* , paddingInlineStart: 0 */}}
                variant="contained" 
                //fullWidth 
                disableRipple //and do it on children components too
                size="small"
            >

                <FormControl fullWidth
                    //size="small"
                >
                    <InputLabel>{capitalizeFirst(props.group)}</InputLabel>
                    <Select className={styles["square-border-right"]}
                        label={capitalizeFirst(props.group)}
                        value={selected}
                        onChange={handleSelect(
                            checked,
                            props.index,
                            setSelected,
                            props.notify
                        )}
                    >
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
                    //size="small"
                    fullWidth
                    onClick={() => thisShouldntBeHere(props.selected)}
                />
            </ButtonGroup>        
        </ListItem>

    )
}

const thisShouldntBeHere = (selected: string) => {
    chrome.tabs.query({
            active: true,
            //lastFocusedWindow: true
            currentWindow: true
        },
        (tabs) => {
            const source = tabs[0].url;
            if(source){
                const urlObject = new URL(source);
                const commonFullPath = source.split(urlObject.hostname)[1]
                console.log(commonFullPath)   
                
                chrome.tabs.create({
                    url: "https://" + selected + commonFullPath
                })
            }

        }
    )
}

const handleSwitch = (
    selected: string, 
    index: number,    
    setChecked: React.Dispatch<React.SetStateAction<boolean>>,
    notify: (selected: string, redirecting: boolean, index: number) => void 
) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        notify(selected, event.target.checked, index);
    }
} 

const handleSelect = (
    checked: boolean,
    index: number,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    notify: (selected: string, redirecting: boolean, index: number) => void
) => {
    return (event: SelectChangeEvent<string>) => {
        setSelected(event.target.value);
        notify(event.target.value, checked, index);
    }
}

export default ToggledRedirector;