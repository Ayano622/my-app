import { MenuCard } from "@/components/MenuCard";
import { Tab,} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

export const Home = () => {
    const router = useRouter()

   

  return (
    <div className="">
      <div >
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap"}}>
          <MenuCard id={1} name="cake1" image="https://img.spoonacular.com/recipes/637016-312x231.jpg"></MenuCard>
          <MenuCard id={2} name="cake2" image=""></MenuCard>
          <MenuCard id={3} name="cake3" image=""></MenuCard>
          <MenuCard id={3} name="cake3" image=""></MenuCard>
          <MenuCard id={3} name="cake3" image=""></MenuCard>
          <MenuCard id={3} name="cake3" image=""></MenuCard>
          <MenuCard id={3} name="cake3" image=""></MenuCard>
          <MenuCard id={3} name="cake3" image=""></MenuCard>
        </div>
      </div>
    </div>
  );
};
