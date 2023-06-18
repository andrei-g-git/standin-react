import Button from "@mui/material/Button/Button";
import { HasWidthAndLength, OfficialDomain, PossiblyDomain } from "~/ts";

const RedirectButton = (props: {
    className: string,
    Icon: /* OfficialDomain | */ React.FunctionComponent<any>,//((props: HasWidthAndLength) => JSX.Element)
    selected: PossiblyDomain
}) => {
    return (
        <Button className={props.className}
            variant="outlined"
            endIcon={<props.Icon width="100%" height="100%" />}
            //size="small"
            fullWidth
            onClick={() => handleClick(props.selected)}
        />
    )
}

const handleClick = (selected: string) => {
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

export default RedirectButton;