import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

export default function App() {
  const Home=lazy(()=>import('./pages/home'))
  const About=lazy(()=>import('./pages/about'))

  return (
    <BrowserRouter>
      <Suspense
       fallback={
        <div className="flone-preloader-wrapper">
          <div className="flone-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      }
      >
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<About/>} path="/about"/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
