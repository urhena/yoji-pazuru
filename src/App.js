import Header from "./Header";
import Main from "./Main"; 
import Footer from "./Footer";

import yjjg from "./yjjg.json";

export default function App() {

    function shuffleArray(input) {
        let tmp = input;
        for (let i = tmp.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = tmp[i];
            tmp[i] = tmp[j];
            tmp[j] = k;
        }
        return tmp;
    }

    const randomList = shuffleArray(yjjg);

    return (
        <>
            <Header />
            <Main yjjgList={randomList} shuffleFunction={shuffleArray} />
            <Footer />
        </>
    )
}