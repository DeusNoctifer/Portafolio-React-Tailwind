import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "@/pages/NotFound.jsx"
import { Toaster } from "@/components/ui/toaster.jsx"
import { LanguageProvider } from "@/context/LanguageContext";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || (!savedTheme && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <LanguageProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
