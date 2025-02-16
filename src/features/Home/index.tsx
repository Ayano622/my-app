import { MenuCard } from "@/components/MenuCard";
import { Tab,} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

export const Home = () => {
    const router = useRouter()

   

  return (
    <div className="">
      <div >
       
        <div style={{ display: "flex", paddingRight: "140px" }}>
          <MenuCard id={1} name="cake1" image="image1"></MenuCard>
          <MenuCard id={2} name="cake2" image="image1"></MenuCard>
          <MenuCard id={3} name="cake3" image="image1"></MenuCard>
          <MenuCard id={3} name="cake3" image="image1"></MenuCard>
        </div>
      </div>
    </div>
  );
};
