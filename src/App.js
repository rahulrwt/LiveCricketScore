 
import React,{Fragment, useEffect, useState} from "react";
import './App.css';
import {  Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from './api/Api';
function App() {
 const [matches,setMatches]=useState([]);

  useEffect(() => {
    getMatches()
    .then((data)=>{
      setMatches(data.matches);
      console.log(data.matches);
    })
    .catch((error)=>alert("Could not load data"))
 
  }, []);

  const[matchType,setMatchType]=useState([]);

  const handleChange = (event) => {
    setMatchType(event.target.value);
  };

  return (
    <div className="App">
      <Navbar/>
      <h1> Welcome to my Live Cricket Score App</h1>
      <Grid container>
        <Grid sm="2">
       

        </Grid>
        <Grid sm="8">
        { matches.map((match)=>(
          <Fragment>
          
            {match.type==matchType?(
            <MyCard match={match} /> 
              ):(
                ""
              )}
          </Fragment>
        )) }
   
        </Grid>
        <Grid sm="2">
        <InputLabel id="label" >Filter</InputLabel>
         <Select labelId="label" 
          id="select"
          value={matchType}
          onChange={handleChange}
          fullWidth="true"
          >
         <MenuItem value="ODI">ODI</MenuItem>
         <MenuItem value=""  >ANY</MenuItem>
         <MenuItem value="Twenty20">Twenty20</MenuItem>
         <MenuItem value="ODI">ODI</MenuItem>
         <MenuItem value=""  >ANY</MenuItem>
         <MenuItem value="First-class">First-class</MenuItem>

</Select>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
