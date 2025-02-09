'use client'
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Sidebar } from "../components/Sidebar";
import { Search } from "../components/Search";
import CakeIcon from "@mui/icons-material/Cake";
import { MenuCard } from "../components/MenuCard";

export default function Home() {


  const logoOnClick = () => {
    // homeに戻る
  }

  return (
    <div className="">
      <header>
        <div style={{ height: "100px", display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => logoOnClick()}>
            <CakeIcon sx={{size: '48px', color: 'pink'}}></CakeIcon>
          </IconButton>
          <Typography
            color="#dcc6b9"
            sx={{ margin: "auto", fontSize: "32px", fontFamily: "Roboto" }}
          >
            おかしのきろく
          </Typography>
          <Search />
          <Button
            sx={{ margin: "30px", backgroundColor: "#dcc6b9", color: "white" }}
          >
            Login
          </Button>
        </div>
      </header>
      <div style={{ display: "flex" }}>
        <Sidebar></Sidebar>
        <div style={{ display: "flex"}}>
          <MenuCard></MenuCard>
          {/* contents */}
        </div>
      </div>
    </div>
  );
}
