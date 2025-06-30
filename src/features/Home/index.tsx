import { ItemCard } from "../../components/ItemCard";
import React from "react";
import { useRouter } from "next/router";
import { NavigationToMyList } from "@/components/NavigationToMyList";

export const Home = () => {
    const router = useRouter()


  const handelItemCardOnClick =() => {
    // router.push("recipe")
  }

  return (
    <div className="">
      <NavigationToMyList>


      </NavigationToMyList>
      <div >
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap"}}>
        </div>
      </div>
    </div>
  );
};
