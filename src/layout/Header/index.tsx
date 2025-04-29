import { Button, IconButton, Tab, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { SearchBar } from "@/components/SearchBar";
import styles from "./styles.module.css";
import { COMMON } from "@/common/constants";

export const Header = () => {
  const router = useRouter();
  const logoOnClick = () => {
    router.push("/");
  };
  const loginOnClick = () => {
    router.push("/login");
  };
  const askAIOnClick = () => {
    router.push("/ask");
  };
  const menuBtnOnClick = () => {
    router.push("/searchAi");
  };

  // const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  // const drawer = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <header>
      <div style={{ height: "100px", display: "flex", alignItems: "center" }}>
        {/* <IconButton
          // onClick={}
          sx={{ size: "48px", alignContent: "center", marginLeft: "10px" }}
        >
          <MenuBookIcon></MenuBookIcon>
        </IconButton> */}
        {/* <Drawer open={sidebarOpen} onClose={drawer}>
          <p>hello</p>
        </Drawer> */}
        <Typography
          className={styles.title}
          color="#dcc6b9"
          sx={{ margin: "auto", fontSize: "32px", fontFamily: "Roboto" }}
          onClick={logoOnClick}
        >
          {COMMON.HEADER.TITLE}
        </Typography>
        <SearchBar />
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#dcc6b9",
            color: "white",
          }}
        >
          検索
        </Button>
        <Button
          onClick={loginOnClick}
          sx={{ margin: "10px", backgroundColor: "#dcc6b9", color: "white" }}
        >
          Login
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tab
          label="レシピ検索"
          sx={{ margin: "10px 20px auto 20px" }}
          onClick={askAIOnClick}
        ></Tab>
        <Tab
          sx={{ margin: "10px 20px auto 20px" }}
          onClick={menuBtnOnClick}
          label="レシピAI"
        ></Tab>
        <Tab sx={{ margin: "10px 20px auto 20px" }} label="器具"></Tab>
        <Tab sx={{ margin: "10px 20px auto 20px" }} label="コラム"></Tab>
      </div> 
    </header>
  );
};
