import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

export const App = () => {
  return (
    <Router>
      <ThemeProvider defaultTheme="system">
        <div className="site-wrapper">
          <Header />
          <div className="wrapper"></div>
          <Footer />
          <Toaster richColors />
        </div>
      </ThemeProvider>
    </Router>
  );
};
