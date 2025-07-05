import { Box, Button, TextField } from "@mui/material";
import { Props } from "./type";
import { FC } from "react";

export const InputText: FC<Props> = (props: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Box
          sx={{
            border: 1,
            borderRadius: "10px",
            width: "800px",
            position: "relative",
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            multiline
            rows={2}
            sx={{
              width: "800px",
              fieldset: {
                border: "none",
                paddingButton: "100px",
              },
               paddingBottom: "30px"
            }}
          />
          <Button sx={{ position: "absolute", bottom: 16, right: 16 }}>
            ⇧
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
