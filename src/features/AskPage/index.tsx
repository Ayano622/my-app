import { SearchBar } from "@/components/SearchBar";
import { Button } from "@mui/material";
import React from "react";
import { initialResultRecipe, ResultRecipeType } from "./types";

export default function AskPage() {
  const [searchedRecipes, setSearchedRecipes] =
    React.useState<ResultRecipeType[]>([initialResultRecipe]);

  const search = async () => {
    // レシピ検索APIの呼び出し
    let data: ResultRecipeType[] = [];
    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?type=dessert&apiKey=c86883fa9f3e4929bf53243dda727ef1"
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
    setSearchedRecipes(data)
    console.log(data);

    // LLM検索APIの呼び出し
  };

  return (
    <div>
      <div className="ask-header">
        {/* <div>AIに聞いてみよう</div> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SearchBar></SearchBar>
          <Button onClick={search}>検索</Button>
        </div>
      </div>
      <div
        className="ask-result"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        検索結果
        {
            searchedRecipes.length !== 1 ?
            <div>
            <div className="searchedItems">{searchedRecipes[0].title}</div>
        <div className="searchedItems1">{searchedRecipes[1].title}</div>
        <div className="searchedItems2">{searchedRecipes[2].title}</div>
        <div className="searchedItems3">{searchedRecipes[3].title}</div>
        <div className="searchedItems4">{searchedRecipes[4].title}</div>
        <div className="searchedItems5">{searchedRecipes[5].title}</div>
        <div className="searchedItems6">{searchedRecipes[6].title}</div>
        <div className="searchedItems7">{searchedRecipes[7].title}</div>
        <div className="searchedItems8">{searchedRecipes[8].title}</div>
        <div className="searchedItems9">{searchedRecipes[9].title}</div>
        {/* <div className="searchedItems10">{searchedRecipes[10].title}</div> */}
        </div> : "a"
        }
        
      </div>
    </div>
  );
}
