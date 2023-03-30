import { useState } from "react";
import QuestionAnswer from "./QuestionAnswer";
import SkipButton from "./SkipButton";

export default function Main(props) {

    const [data, setData] = useState({
        count: 0,
        jukugo: "四字熟語",
        randomizedJukugo: ["語", "熟", "字", "四"]
    });

    function updateData() {
        const tmp = props.yjjgList.pop();
        const number = data.count;
        setData({
            count: number + 1,
            jukugo: tmp,
            randomizedJukugo: props.shuffleFunction(tmp.split(""))
        })
    };

    return (
        <main className="cmain">
            <QuestionAnswer qa={[data.jukugo, data.randomizedJukugo]} record={data.count} />
            <SkipButton handleClick={updateData} />
        </main>
    )
}