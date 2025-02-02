import { Typography } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Search } from "./components/Search";
import { MenuCard } from "./components/MenuCard";

export default function Home() {
  return (
    <div className="">
      <header>
        <div style={{ height: "100px", display: "flex", alignItems: "center" }}>
          <Typography sx={{ margin: "auto", fontSize: "32px" }}>
            Title/タイトル
          </Typography>
        </div>
      </header>
      <div style={{display: 'flex'}}>
        <Sidebar></Sidebar>
        <div>
          <div style={{ marginLeft: "200px" }}>
            {/* contents */}
            <Search></Search>
          </div>
          <div style={{ display: "flex" }}>
            <MenuCard></MenuCard>
            <MenuCard></MenuCard>
            <MenuCard></MenuCard>
            <MenuCard></MenuCard>
            <MenuCard></MenuCard>
          </div>
        </div>
      </div>
    </div>
  );
}
