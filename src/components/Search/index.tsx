import { IconButton, InputBase, Paper, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <div>
      <Paper sx={{ width: '200px', display: 'flex'}}>
      <IconButton aria-label="menu">
        <SearchIcon>
        </SearchIcon>
        </IconButton>
        <InputBase sx={{width: '200px', marginLeft: '0px'}}>
          </InputBase>
         
      
      </Paper>
    </div>
  )
}
