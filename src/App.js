import Header from "./Header";
import Main from "./Main"; 
import Footer from "./Footer";

import data from "./yjjg.json";

export default function App() {

    function randomizeJukugo(jukugo) {
        let chars = jukugo.split("");
        for (let i = chars.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = chars[i];
            chars[i] = chars[j];
            chars[j] = k;
        }
        return chars;
    }

    const jukugo = data.yjjg[Math.floor(Math.random() * data.yjjg.length)];
    const randomizedJukugo = randomizeJukugo(jukugo);

    return (
        <>
            <Header />
            <Main jukugo={jukugo} randomizedJukugo={randomizedJukugo} />
            <Footer />
        </>
    )
}