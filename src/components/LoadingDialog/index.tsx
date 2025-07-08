import { CircularProgress, Dialog } from "@mui/material";
import { LoadingProps } from "./type";
import { FC } from "react";


export const LoadingDialog: FC<LoadingProps> = (props) => {
    const handleClose = () => {
        props.setOpen(false)
    }
    return (
        <>
        <Dialog open={props.open} onClose={handleClose}>
            <CircularProgress />
        </Dialog>
        </>
    )
}