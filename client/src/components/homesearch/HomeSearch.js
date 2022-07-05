import React from 'react';
import {IconButton,Paper,InputBase} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HomeSearch = (props) => {
  const checkentry=(event)=>{
    props.getSearchValue(event.target.value)
  }
  return (
    <Paper
      component="form"
      sx={{ mr:"15px",p: '2px', display: 'flex', alignItems: 'center', width: 200,height: 30}}
    >
     <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search from the site' }}
        onChange={checkentry}
      />
      <IconButton type="submit" sx={{ p: '1px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
  </Paper>
  )
}

export default HomeSearch