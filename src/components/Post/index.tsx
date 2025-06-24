import { Box } from "@mui/material";
import './index.module.css'

export const Post = () => {
  return (
    <>
        <div className="post">
            <Box sx={{width: '800px', height: '200px', color: 'gray'}}>
                画像を入れる
                画像を入れる
                画像を入れる
            </Box>
            <Box sx={{width: '800px', height: '100px', color: 'gray'}}>
                タイトル
            </Box>
            <Box sx={{width: '800px', height: '100px', color: 'gray'}}>
                キャプション
                キャプション
                キャプション
            </Box>
            <Box sx={{width: '800px', height: '200px', color: 'gray'}}>
                感想
                感想
                感想
            </Box>
        </div>
        </>
  );
};
