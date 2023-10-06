import './App.css';
import Banner from "./components/banner/banner";
import Participation from "./components/participation/participation";
import Exclusive from "./components/exclusive/exclusive";
import Rights from "./components/rights/rights";
import Club from "./components/club/club";

function App() {
    return (
        <div className="App">
            <Banner/>
            <Participation/>
            <Exclusive/>
            <Club/>
            <Rights/>
        </div>
    );
}

export default App;
