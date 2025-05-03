import { ItemCard } from "@/components/ItemCard";
import React from "react";
import { useRouter } from "next/router";

export const Home = () => {
    const router = useRouter()


  const handelItemCardOnClick =() => {
    // router.push("recipe")
  }

  return (
    <div className="">
      <div >
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap"}}>
          <ItemCard id={1} name="sumple1" onClick={handelItemCardOnClick()} image="https://img.spoonacular.com/recipes/637016-312x231.jpg"></ItemCard>
          <ItemCard id={2} name="sumple2" image=""></ItemCard>
          <ItemCard id={3} name="sumple3" image=""></ItemCard>
          <ItemCard id={4} name="sumple4" image=""></ItemCard>
          <ItemCard id={5} name="sumple5" image=""></ItemCard>
          <ItemCard id={6} name="sumple6" image=""></ItemCard>
          <ItemCard id={7} name="sumple7" image=""></ItemCard>
          <ItemCard id={8} name="sumple8" image=""></ItemCard>
        </div>
      </div>
    </div>
  );
};
