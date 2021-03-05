import { Button, Card, CardActions, CardContent,Dialog ,DialogTitle,DialogContent,DialogContentText, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { getMatches,getMatchDetail } from "../api/Api";
import vs from  "../img/vs.png";


const MyCard =({ match })=>{

    const [detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);
    const handleClick=(id)=>
    {
        getMatchDetail(id).then((data)=>{
           
            setDetail(data);
            console.log(data);
            handleOpen();
        }
        
            )
        .catch((error)=>console.log("ERROR:",error));
    }
    const getMatchCart=()=>{
       return ( 
       <Card style={{marginTop:20}} >
            <CardContent>

            <Grid container justify="center" alignItems="center" spacing={4} > 
            <Grid item>
                <Typography variant="h5"> {match['team-1']}</Typography>  </Grid>
            <Grid item> 
            <img style={{width:85}}src={vs} alt=""/>
             </Grid>
             <Grid item  > 
             <Typography variant="h5"> {match['team-2']}</Typography> 
              </Grid>
            </Grid>
                 
            </CardContent>
            <CardActions>
               <Grid container justify="center">
               <Button
               onClick={ ()=>{
                   handleClick(match.unique_id)
               }}
               
               variant="contained"
               color="primary" 
               style={{marginRight:15}}
               >
                    Show Details
                </Button>
                <Button variant="contained" color="primary">
                     Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                </Button>
               </Grid>
            </CardActions>
        </Card>)
    }

    const handleClose=()=>
    {
        setOpen(false);
    }

    
    const handleOpen=()=>
    {
        setOpen(true);
    }
    const getDialog=()=>
    (
        <Dialog open={open} onClose={handleClose}>
       <DialogTitle id="alert-dialog-title"> {"Match Detail.."}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                <Typography>
                    {detail.stat}
                    <Typography>
                        Match
                        <span>{detail.matchStarted? "Started":"Stil ot Started"} </span>
                    </Typography>
                    
                </Typography>
                <Typography>
                        Score
                        <span>
                            {" "}
                            {detail.score}
                        </span>
                    </Typography>
            </DialogContentText>
        </DialogContent>
        <Button onClick={handleClose} color="primary" autoFocus >
            Close
        </Button>
        </Dialog>
    )
        return (
           <div>
               {getMatchCart()}
               {getDialog()}
               
           </div>
            
            );
 
};
export default MyCard;