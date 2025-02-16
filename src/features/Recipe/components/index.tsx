import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./styles.module.css"; // module.css をインポート

export const Recipe =() => {
  return (
    <Card className={styles.recipeCard}>
      {/* 画像エリア */}
      <CardMedia
        component="img"
        image="/okashiSumple1.jpeg" // 仮の画像
        alt="レシピ画像"
        className={styles.recipeImage}
        width={"100px"}
        height={"100px"}
      />
      {/* テキストエリア */}
      <CardContent className={styles.recipeContent}>
        <Typography variant="h5" className={styles.recipeTitle}>
          レシピタイトル
        </Typography>
        <Typography variant="body2" color="textSecondary" className={styles.recipeDescription}>
          これはレシピの説明が入る部分です。シンプルなデザインにしています。
        </Typography>
      </CardContent>
    </Card>
  );
}
