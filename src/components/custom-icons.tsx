import Icon from "@mui/material/Icon";
import { EndsWith } from "~/ts";
import logo128 from "~/assets/logo128.svg";
import youtube from "~/assets/youtubeStandin.svg";

const CustomIcon = (props: { 
    width?: number | EndsWith<"%"> | EndsWith<"rem">, 
    height?: number | EndsWith<"%"> | EndsWith<"rem">,
    image: string 
}) => {
    return (
        <Icon fontSize="inherit" sx={{height: props?.height, width: props?.width, display: "flex", textAlign: "center"}}>
            <img src={props.image} height={props?.height} width={props?.width} />
        </Icon>
    )
}

export const Logo = (props: { width?: number | EndsWith<"%"> | EndsWith<"rem">, height?: number | EndsWith<"%"> | EndsWith<"rem"> }) => {
    return (<CustomIcon image={logo128} height={props?.height} width={props?.width} />)
}

export const YoutubeStandin = (props: { width?: number | EndsWith<"%"> | EndsWith<"rem">, height?: number | EndsWith<"%"> | EndsWith<"rem"> }) => {
    return (<CustomIcon image={youtube} height={props?.height} width={props?.width} />)
}

// export const Logo = (props: { width?: number | EndsWith<"%">, height?: number | EndsWith<"%"> }) => {
//     return (
//         <Icon fontSize="large">
//             <img src={logo128} height={props?.height} width={props?.width} />
//         </Icon>
//     )
// }
