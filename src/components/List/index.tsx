import { Box } from "@mui/material";
import { ItemCard } from "../ItemCard";
import { useRouter } from "next/router";
import React from "react";
import { getMoviesList } from "./api";

const exampleList: {index: number, name: string}[] = [
  {index: 1, name: "Titanic", },
  {index: 2, name: "Harry Potter and the Philosopher's Stone"},
  {index: 3, name: "Top Gun"},
]

export const List = () => {
  let data: any[] = []
  React.useEffect(() => {
  getMoviesList().then((result) => {
    console.log(result);
    console.log(result.results);
    data.push(result.results[0])
    // for(const i of result.results) {
    //   data.push(i)
    // }
  })
  console.log(data);
},[])
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
