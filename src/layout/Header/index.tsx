import { Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'
import CakeIcon from "@mui/icons-material/Cake";
import { SearchBar } from '@/components/SearchBar';

export const Header = () => {

    const router = useRouter()
  const logoOnClick = () => {
    router.push('/')
  }
  const loginOnClick = () => {
    router.push('/login')
  }
  return (
    <header>
        <div style={{ height: "100px", display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => logoOnClick()}>
            <CakeIcon sx={{size: '48px', color: 'pink'}}></CakeIcon>
          </IconButton>
          <Typography
            color="#dcc6b9"
            sx={{ margin: "auto", fontSize: "32px", fontFamily: "Roboto" }}
            onClick={logoOnClick}
          >
            おかしのきろく
          </Typography>
          <SearchBar />
          <Button sx={{marginLeft: '10px', backgroundColor: "#dcc6b9", color: "white" 
          }}>検索</Button>
          <Button
          onClick={loginOnClick}
            sx={{ margin: "10px", backgroundColor: "#dcc6b9", color: "white" }}
          >
            Login
          </Button>
        </div>
      </header>
  )
}
