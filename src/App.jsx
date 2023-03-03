import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Main from "./components/Main";
import About from "./components/About";
function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
