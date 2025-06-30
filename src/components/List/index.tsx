import { Box } from "@mui/material";
import { ItemCard } from "../ItemCard";
import { useRouter } from "next/router";

const exampleList: {index: number, name: string}[] = [
  {index: 1, name: "Titanic", },
  {index: 2, name: "Harry Potter and the Philosopher's Stone"},
  {index: 3, name: "Top Gun"},
]

export const List = () => {
  const router = useRouter()
  const handleCardOnClick = (index:number) => {
    router.push(`search/${index}/`)
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center"}}>
        {
          exampleList.map((item) => (
            <ItemCard key={item.index} id={item.index} name={item.name} image="https://example" handleCardOnClick={()=>handleCardOnClick(item.index)} ></ItemCard>
          )
          )
        }
    </Box>
  );
};
