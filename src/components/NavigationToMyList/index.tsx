import { Button, Container, Paper } from "@mui/material";
import { useRouter } from "next/router";

export const NavigationToMyList = () => {
    const router = useRouter()
    const handleOnClick = () => {
        router.push('/list')
    }

  return (
    <>
      <Container sx={{textAlign:"center"}}>
        <Paper>
            <Button 
            sx={{width:'200px', height:'200px'}}
            onClick={handleOnClick}>Go To My List</Button>
        </Paper>
      </Container>
    </>
  );
};
