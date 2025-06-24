import { Button } from "@mui/material"
import React from "react";
import { useRouter } from "next/navigation";


export const PostButton = () => {
    const router = useRouter()
    const handleOnClick = () => {
        router.push('/post')
    }

    return(
        <>
        <Button onClick={handleOnClick}>Post</Button>
        </>
    )
}