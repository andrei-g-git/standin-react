import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { OfficialDomain } from "~/ts";
import {InstanceList} from "~/components";
import { useEffect } from "react";

const InstanceGroup = (props: {
    title: string,
    category: OfficialDomain
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
                {/* <Typography variant="h6">
                    {props.title}
                </Typography>
                <Typography sx={{color: "text.secondary"}}>
                    {props.category}
                </Typography> */}

                <div style={{display: "flex", alignItems: "center", gap: "1rem", width: "100%"}}>
                    <p style={{fontSize: "1rem"}}>{props.title}</p>
                    <p style={{color: "gray"}}>{props.category}</p>
                </div>

            </AccordionSummary>
            <AccordionDetails>
                <InstanceList />
            </AccordionDetails>
        </Accordion>
    )
}

export default InstanceGroup;