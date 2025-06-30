import { Box, Button, TextField, Typography } from "@mui/material";
import "./index.module.css";
import { useRouter } from "next/navigation";

export const Post = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/list");
  };
  return (
    <>
      <div className="post">
        <Box sx={{ width: "800px"}}>
          <Typography>画像</Typography>
          <Box sx={{ backgroundColor: "grey", height:"200px" }}>
            
          </Box>
        </Box>
        <Box sx={{ width: "800px", height: "100px", color: "gray" }}>
          <Typography>タイトル</Typography>
          <TextField></TextField>
        </Box>
        <Box sx={{ width: "800px", height: "100px", color: "gray" }}>
          <Typography>キャプション</Typography>
          <TextField></TextField>
        </Box>
        <Box sx={{ height: "200px", color: "gray" }}>
          <Typography>感想</Typography>
          <TextField></TextField>
        </Box>
        <Button onClick={handleOnClick}>投稿</Button>
      </div>
    </>
  );
};
