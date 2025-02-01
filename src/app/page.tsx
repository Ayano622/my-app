import { Typography } from "@mui/material";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <header>
        {/* TODO: constantsに記載 */}
        <Typography>中華料理一覧</Typography>
      </header>
      <div style={{display: 'flex'}}>
        <Sidebar>

        </Sidebar>
        
        <div>
          contents
        </div>
      </div>
    </div>
  );
}
