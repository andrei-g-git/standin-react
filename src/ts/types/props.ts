import { EndsWith } from "./strings";

export type HasWidthAndLength = {
    width?: number | EndsWith<"%"> | EndsWith<"rem">;
    height?: number | EndsWith<"%"> | EndsWith<"rem">;
}