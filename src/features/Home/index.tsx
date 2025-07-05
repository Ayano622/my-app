import { ItemCard } from "../../components/ItemCard";
import React from "react";
import { useRouter } from "next/router";
import { NavigationToMyList } from "@/components/NavigationToMyList";
import { InputText } from "@/uiParts/inputText";
import { Box } from "@mui/material";

export const Home = () => {
    const router = useRouter()


  const handelItemCardOnClick =() => {
    // router.push("recipe")
  }

  return (
    <Box className="" sx={{textAlign: "center", margin: "50px"}}>
      <InputText sx={{width: "800px"}}></InputText>
      <div >
        <div style={{ justifyContent: 'center', margin: "50px"}}>
          {/* <NavigationToMyList>
      </NavigationToMyList> */}
        </div>
      </div>
    </Box>
  );
};
