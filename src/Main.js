import { useState } from "react";
import QuestionRow from "./QuestionRow";
import ButtonRow from "./ButtonRow";
import AnswerRow from "./AnswerRow";

export default function Main(props) {

    const [answer, setAnswer] = useState({
        firstKanji: props.randomizedJukugo[0],
        secondKanji: props.randomizedJukugo[1],
        thirdKanji: props.randomizedJukugo[2],
        fourthKanji: props.randomizedJukugo[3]
    });

    function fillAnswer(position, kanji) {
        if (position === 1) {
            setAnswer(prevAnswer => ({
                ...prevAnswer, 
                firstKanji: kanji
            }))
        } else if (position === 2) {
            setAnswer(prevAnswer => ({
                ...prevAnswer, 
                secondKanji: kanji
            }))
        } else if (position === 3) {
            setAnswer(prevAnswer => ({
                ...prevAnswer, 
                thirdKanji: kanji
            }))
        } else {
            setAnswer(prevAnswer => ({
                ...prevAnswer, 
                fourthKanji: kanji
            }))
        }
    }

    function checkAnswer() {
        const solution = [answer.firstKanji, answer.secondKanji, answer.thirdKanji, answer.fourthKanji];
        const result = [];
        for (let position = 0; position < 4; position++) {
            result.push(props.jukugo.split("")[position] === solution[position]);
        }
        return result;
    }

    return (
        <main className="cmain">
            <QuestionRow data={props.randomizedJukugo} />
            <ButtonRow question={props.randomizedJukugo} handleAnswer={fillAnswer} />
            <AnswerRow solution={answer} isSolutionRight={() => checkAnswer()} />
        </main>
    )
}