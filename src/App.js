import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/info";
import Interests from "./components/Interests";
import '../src/App.scss';

export default function App() {
    return (
        <div className="profile-card">
            <Info></Info>
            <About></About>
            <Interests></Interests>
            <Footer></Footer>
        </div>
    )
}