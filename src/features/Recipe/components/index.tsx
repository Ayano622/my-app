import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./styles.module.css"; // module.css をインポート
import { RecipePageProps } from "./types";
export const Recipe: React.FC<RecipePageProps> = (props) => {
  const { image, instructions } = props
 
  React.useEffect(() => {
    console.log(instructions);
  },[])

  return (
      <Box sx={{margin: "32px"}}>
        <CardMedia
      
        component="img"
        image={image} // 仮の画像
        alt=""
        className={styles.recipeImage}
        width={"100px"}
        height={"100px"}
      />
      {/* テキストエリア */}
      <CardContent className={styles.recipeContent}>
        <Typography variant="h5" className={styles.recipeTitle}>
          aaaa
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className={styles.recipeDescription}
        >
          {instructions}
        </Typography>
      </CardContent>
      </Box>
    
  );
};
