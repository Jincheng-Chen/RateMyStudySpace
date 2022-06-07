import React from 'react'
import {Button, Card, Box, Typography, CardActionArea} from "@mui/material"
import {makeStyles} from '@mui/styles'
const useStyles = makeStyles({
    button:
    {
        width: "100%",
        height: "60vh"
    }
})
function QueryButton({cityData}) {
    const classes = useStyles()
    
  return (
    <Card onClick = {() => console.log("clicked")}>
        <CardActionArea  href={"review/" + cityData.label}>
            <Box sx ={{backgroundImage: `url(${cityData.url})`}} className = {classes.button}></Box>
            <Typography variant = "h4">{cityData.label}</Typography>
        </CardActionArea>
    </Card>
  )
}

export default QueryButton