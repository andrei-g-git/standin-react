import { EndsWith, OfficialDomain } from "~/ts";

export type ResizableIcon = (props: { //conflicts with implementation of same type from custom-icons
    width?: JsxDimension,//number | EndsWith<"%"> | EndsWith<"rem">, 
    height?: JsxDimension//number | EndsWith<"%"> | EndsWith<"rem">
}) => JSX.Element;

export type IconDictionary = {
    [key in OfficialDomain]: ResizableIcon
}

export type JsxDimension = number | EndsWith<"%"> | EndsWith<"rem">;