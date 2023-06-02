import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
            <AccordionSummary>
                <Typography variant="h6">
                    {props.title}
                </Typography>
                <Typography variant="subtitle2">
                    {props.category}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <InstanceList />
            </AccordionDetails>
        </Accordion>
    )
}

export default InstanceGroup;