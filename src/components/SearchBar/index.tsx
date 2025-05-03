import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  return (
    <div style={{display: 'flex'}}>
      <Paper sx={{ width: '200px', display: 'flex', boxShadow:'none', backgroundColor: "#f0f0f0"}} >
      <IconButton aria-label="menu"> 
       
        </IconButton> 
         <InputBase sx={{width: '200px', marginLeft: '0px'}}>
          </InputBase>
      </Paper>
    </div>
  )
}
