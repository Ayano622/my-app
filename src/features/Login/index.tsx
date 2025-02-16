import React from "react";
import { TextField, Button, Typography, Container, Card, Box } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import styles from "./LoginPage.module.css";

export const Login = () => {
    const loginWithGoogleOnClick = () => {
        window.location.href = "http://localhost:8080/auth/login";    
    }
  return (
    <Container className={styles.loginContainer}>
      <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1}>
        <Card className={styles.loginCard}>
          <Typography variant="h4" className={styles.title}>
            Login
          </Typography>

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            className={styles.inputField}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            className={styles.inputField}
          />

          <Button
            variant="contained"
            fullWidth
            className={styles.loginButton}
          >
            Login
          </Button>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            className={styles.googleButton}
            onClick = {loginWithGoogleOnClick}
          >
            Login with Google
          </Button>

          <div className={styles.links}>
            <Typography variant="body2" className={styles.forgotPassword}>
              <a href="#">Forgot Password?</a>
            </Typography>
            <Typography variant="body2">
              Don't have an account? <a href="#">Sign Up</a>
            </Typography>
          </div>
        </Card>
      </Box>
    </Container>
  );
}
