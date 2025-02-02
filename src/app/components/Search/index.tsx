import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <div>
      <Paper sx={{ width: '100px', display: 'flex'}}>
        <InputBase></InputBase>
      <IconButton aria-label="menu">
        <SearchIcon>
        </SearchIcon>
        </IconButton>
      </Paper>
    </div>
  )
}
