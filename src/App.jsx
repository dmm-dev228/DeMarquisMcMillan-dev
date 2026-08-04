import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CogniHavenProject from "./pages/projects/CogniHavenProject";
import ConnectMProject from "./pages/projects/ConnectMProject";
import StockHousingProject from "./pages/projects/StockHousingProject";
import WeatherSubscriptionProject from "./pages/projects/WeatherSubscriptionProject";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />    
                <Route path="/about" element={<About />} />                       
                <Route
                    path="/projects/cognihaven"
                    element={<CogniHavenProject />}
                />
                <Route
                    path="/projects/connectm"
                    element={<ConnectMProject />}
                />
                <Route
                    path="/projects/stock-housing-regression"
                    element={<StockHousingProject />}
                />
                <Route
                    path="/projects/weather-subscription-platform"
                    element={<WeatherSubscriptionProject />}
                />
            </Routes>
        </MainLayout>
    );
}

export default App;