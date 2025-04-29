"use client";
import { Home } from "@/features/Home";
import { Header } from "@/layout/Header";

// export default function HomePage() {
//   return (
//     <div>
//       <Header />
//       <Home />
//       </ div>
//   );
// }
// import { CssVarsProvider } from '@mui/joy/styles'; // MUI Joyの場合
// または
// import { ThemeProvider, createTheme } from "@mui/material/styles"; // MUI Materialの場合

// const theme = createTheme({})

export default function HomePage() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
