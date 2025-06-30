import { Box } from "@mui/material";
import { ItemCard } from "../ItemCard";

export const List = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center"}}>
        <ItemCard>my Item</ItemCard>
        <ItemCard>my Item</ItemCard>
        <ItemCard>my Item</ItemCard>
    </Box>
  );
};
