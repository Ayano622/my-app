"use client";
import { Box } from "@mui/material";
import React from "react";

export const Sidebar = () => {
  const buttonOnClick = () => {
    // クリック処理
  };

  return (
    <div className="sideBar" style={{ width: "300px", flexShrink:0 }}>
      <Box component="div"
      onClick={()=> buttonOnClick()}
      sx={{ height: "64px", cursor: 'pointer' }}>AAAA</Box>
      <Box component="div"
      onClick={()=> buttonOnClick()}
      sx={{ height: "64px", cursor: 'pointer' }}>AAAA</Box>
      <Box component="div"
      onClick={()=> buttonOnClick()}
      sx={{ height: "64px", cursor: 'pointer' }}>AAAA</Box>
      <Box component="div"
      onClick={()=> buttonOnClick()}
      sx={{ height: "64px", cursor: 'pointer' }}>AAAA</Box>
    </div>
  );
};
