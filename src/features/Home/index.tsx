import { ItemCard } from "../../components/ItemCard";
import React from "react";
import { useRouter } from "next/router";
import { NavigationToMyList } from "@/components/NavigationToMyList";
import { InputText } from "@/uiParts/inputText";
import { Box } from "@mui/material";
import { LoadingDialog } from "@/components/LoadingDialog";

export const Home = () => {
  const router = useRouter()
  const [dialogOpen, setDialogOpen] = React.useState<boolean>(false)

  

  return (
    <Box className="" sx={{textAlign: "center", margin: "50px"}}>
      <InputText sx={{width: "800px"}} setOpen={setDialogOpen} ></InputText>
      <LoadingDialog open={dialogOpen} setOpen={setDialogOpen} ></LoadingDialog>
      <div >
        <div style={{ justifyContent: 'center', margin: "50px"}}>
          {/* <NavigationToMyList>
      </NavigationToMyList> */}
        </div>
      </div>
    </Box>
  );
};
