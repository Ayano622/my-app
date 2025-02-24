import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./styles.module.css"; // module.css をインポート
import { RecipePageProps } from "./types";
export const Recipe: React.FC<RecipePageProps> = (props) => {
  const { id, name, image, instructions } = props
 
  React.useEffect(() => {
    console.log(instructions);
  },[])

  return (
    <Card className={styles.recipeCard}>
      {/* 画像エリア */}
      <CardMedia
      
        component="img"
        image={image} // 仮の画像
        alt="レシピ画像"
        className={styles.recipeImage}
        width={"100px"}
        height={"100px"}
      />
      {/* テキストエリア */}
      <CardContent className={styles.recipeContent}>
        <Typography variant="h5" className={styles.recipeTitle}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className={styles.recipeDescription}
        >
          {instructions}
        </Typography>
      </CardContent>
    </Card>
  );
};
