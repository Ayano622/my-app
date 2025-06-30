import { SearchBar } from "../../components/SearchBar";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ResultRecipeType } from "./types";
import { ItemCard } from "../../components/ItemCard";
import { useRouter } from "next/router";

export default function SearchAi() {
  const [searchedRecipes, setSearchedRecipes] = React.useState<
    ResultRecipeType[]
  >([]);
  const [instructions, setInstructions] = React.useState<string>("");
  const router = useRouter();

  const recipeOnClick = async () => {
    console.log("click");

    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/645479/information?apiKey=c86883fa9f3e4929bf53243dda727ef1"
      );
      if (!response.ok) {
        console.log("not fetch");
      } else {
        const json = await response.json();
        setInstructions(String(json));
        console.log(response);
        console.log(json.instructions);
      }

      router.push(`search/{id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const search = async () => {
    // レシピ検索APIの呼び出し
    let data: ResultRecipeType[] = [];
    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?type=bread&apiKey=c86883fa9f3e4929bf53243dda727ef1"
      );
      if (!response.ok) {
        throw new Error(`レスポンスステータス:, ${response.status}`);
      } else {
        const json = await response.json();
        data = json.results;
      }
    } catch (error: unknown) {
      console.error("error", error);
    }
    setSearchedRecipes(data);
    console.log(data);

    // LLM検索APIの呼び出し
  };

  return (
    <div>
      <div className="ask-header" >
        <Box sx={{textAlign: "center", margin: "100px 10px"}}>
          <Typography>Comming Soon...</Typography>
        </Box>
      </div>
      <div
        className="ask-result"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        <div
          className="ask-result"
          style={{
            textAlign: "center",
            marginTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {searchedRecipes?.map((recipe) => (
            <ItemCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.title}
              image={recipe.foodImageUrl}
              handleCardOnClick={recipeOnClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
