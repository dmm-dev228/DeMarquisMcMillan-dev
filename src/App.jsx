import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CogniHavenProject from "./pages/projects/CogniHavenProject";
import ConnectMProject from "./pages/projects/ConnectMProject";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route
                    path="/projects/cognihaven"
                    element={<CogniHavenProject />}
                />
                <Route
                    path="/projects/connectm"
                    element={<ConnectMProject />}
                />
            </Routes>
        </MainLayout>
    );
}

export default App;