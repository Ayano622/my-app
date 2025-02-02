import { Typography } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Search } from "./components/Search";

export default function Home() {
  return (
    <div className="">
      <header>
        <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
        <Typography sx={{margin: 'auto', fontSize: '32px'}}>Title/タイトル</Typography>
        </div>
      </header>
      <div style={{display: 'flex'}}>
        <Sidebar>
        </Sidebar>
        <div style={{display: 'flex', marginLeft: '200px'}}>
          {/* contents */}
          <Search>
          </Search>
        </div>
      </div>
    </div>
  );
}
