import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import App from "./App";
import AboutFire from "./components/Main/About/AboutFire";
import AboutField from "./components/Main/About/AboutField";
import AboutForest from "./components/Main/About/AboutForest";
import AboutOcean from "./components/Main/About/AboutOcean";
import AboutStar from "./components/Main/About/AboutStar";
  
  const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/aboutfire' element={<AboutFire />} />
          <Route path='/aboutfield' element={<AboutField />} />
          <Route path='/aboutforest' element={<AboutForest />} />
          <Route path='/aboutocean' element={<AboutOcean />} />
          <Route path='/aboutstar' element={<AboutStar />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter;