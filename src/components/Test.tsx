import React from 'react'
import Button from "@mui/material/Button";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import  ListItem  from '@mui/material/ListItem';

const Test = () => {
  return (
    <ListItem sx={{display: "flex"}}>
        <Button endIcon={<AcUnitIcon />}/>
        BLAHHHHHHHHHHHH
    </ListItem>
  )
}

export default Test