import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { OfficialDomain } from "~/ts";
import {InstanceList} from "~/components";
import { useEffect } from "react";

const InstanceAccordion = (props: {
    title: string,
    category: OfficialDomain,
    index: number
}) => {
    useEffect(() => {
        console.log("instance group loaded");
        console.log("title: ", props.title, "  category:  ", props.category)        
    },
        []
    )

    return (
        <Accordion>
            <AccordionSummary sx={{display: "flex", alignItems: "center", gap: "1rem"}}
                expandIcon={<ExpandMore/>}
            >
                <div style={{display: "flex", alignItems: "center", gap: "1rem", width: "100%"}}>
                    <p style={{fontSize: "1rem"}}>{props.title}</p>
                    <p style={{color: "gray"}}>{props.category}</p>
                </div>

            </AccordionSummary>
            <AccordionDetails>
                <InstanceList index={props.index}/>
            </AccordionDetails>
        </Accordion>
    )
}

export default InstanceAccordion;