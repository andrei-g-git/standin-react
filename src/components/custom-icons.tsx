import Icon from "@mui/material/Icon";
import { EndsWith, IconDictionary, JsxDimension } from "~/ts";
import logo128 from "~/assets/logo128.svg";
import youtube from "~/assets/youtubeStandin.svg";
import twitter from "~/assets/youtubeStandin.svg";
import reddit from "~/assets/youtubeStandin.svg";;
import tiktok from "~/assets/youtubeStandin.svg";
import medium from "~/assets/youtubeStandin.svg";
import imgur from "~/assets/youtubeStandin.svg";

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

export const IconWithSize = (props: { width?: number | EndsWith<"%"> | EndsWith<"rem">, height?: number | EndsWith<"%"> | EndsWith<"rem"> }) => {
    return (<CustomIcon image={youtube} height={props?.height} width={props?.width} />)
}

export const Logo = (props: { width?: number | EndsWith<"%"> | EndsWith<"rem">, height?: number | EndsWith<"%"> | EndsWith<"rem"> }) => {
    return (<CustomIcon image={logo128} height={props?.height} width={props?.width} />)
}

export const YoutubeStandin = (props: { width?: number | EndsWith<"%"> | EndsWith<"rem">, height?: number | EndsWith<"%"> | EndsWith<"rem"> }) => {
    return (<CustomIcon image={youtube} height={props?.height} width={props?.width} />)
}

export const StandinIcons: IconDictionary = {
    "youtube": (props: {width?: JsxDimension, height?: JsxDimension}): JSX.Element => {
        return(<CustomIcon image={youtube} height={props.height} width={props.width} />)
    },   
     "twitter": (props: {width?: JsxDimension, height?: JsxDimension}): JSX.Element => {
        return(<CustomIcon image={twitter} height={props.height} width={props.width} />)
    },
    "reddit": (props: {width?: JsxDimension, height?: JsxDimension}): JSX.Element => {
        return(<CustomIcon image={reddit} height={props.height} width={props.width} />)
    },   
    "tiktok": (props: {width?: JsxDimension, height?: JsxDimension}): JSX.Element => {
        return(<CustomIcon image={tiktok} height={props.height} width={props.width} />)
    },
    "medium": (props: {width?: JsxDimension, height?: JsxDimension}): JSX.Element => {
        return(<CustomIcon image={medium} height={props.height} width={props.width} />)
    },    
    "imgur": (props: {width?: JsxDimension, height?: JsxDimension}): JSX.Element => {
        return(<CustomIcon image={imgur} height={props.height} width={props.width} />)
    },   
    "none":  (props: {width?: JsxDimension, height?: JsxDimension}): JSX.Element => {
        return(<></>)
    },   
}

// export const Logo = (props: { width?: number | EndsWith<"%">, height?: number | EndsWith<"%"> }) => {
//     return (
//         <Icon fontSize="large">
//             <img src={logo128} height={props?.height} width={props?.width} />
//         </Icon>
//     )
// }
