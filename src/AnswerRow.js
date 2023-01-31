import { useState } from "react";
import AnswerBox from "./AnswerBox";
import SubmitButton from "./SubmitButton";

export default function AnswerRow(props) {

    const [types, setTypes] = useState(["start", "start", "start", "start"]);

    function paintBoxes() {
        const checkedAnswer = props.isSolutionRight();
        let result = []; 
        let tmp = "";
        for (let index = 0; index < 4; index++) {
            tmp = checkedAnswer[index] ? "right" : "wrong";
            result.push(tmp);
        }
        setTypes(result);
    }

    return (
        <>
            <div className="row-element">
                <AnswerBox kanji={props.solution.firstKanji} type={types[0]} />
                <AnswerBox kanji={props.solution.secondKanji} type={types[1]} />
                <AnswerBox kanji={props.solution.thirdKanji} type={types[2]} />
                <AnswerBox kanji={props.solution.fourthKanji} type={types[3]} />
            </div>
            <SubmitButton handleClick={paintBoxes} />
        </>
    )
}