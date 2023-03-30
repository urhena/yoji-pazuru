import { useState, useEffect } from "react";
import QuestionRow from "./QuestionRow";
import AnswerRow from "./AnswerRow";

export default function QuestionAnswer(props) {
    return(
        <QA key={props.record} qa={props.qa} />
    )
}

function QA(props) {

    const [answer, setAnswer] = useState({
        firstKanji: "　",
        firstType: "start",
        secondKanji: "　",
        secondType: "start",
        thirdKanji: "　",
        thirdType: "start",
        fourthKanji: "　",
        fourthType: "start",
        counter: 0
    });
    
    function checkAnswer() {
        const solution = [answer.firstKanji, answer.secondKanji, answer.thirdKanji, answer.fourthKanji];
        const result = [];
        for (let position = 0; position < 4; position++) {
            result.push(props.qa[0].split("")[position] === solution[position]);
        }
        return result;
    }

    function paintBoxes() {
        const checkedAnswer = checkAnswer();
        let result = []; 
        let tmp = "";
        for (let index = 0; index < 4; index++) {
            tmp = checkedAnswer[index] ? "right" : "wrong";
            result.push(tmp);
        }
        setAnswer(prevAnswer => ({
            ...prevAnswer,
            firstType: result[0],
            secondType: result[1],
            thirdType: result[2],
            fourthType: result[3],
            counter: 0
        }))
    }

    useEffect(() => {
        if (answer.counter === 4) {
            paintBoxes();
        }
    }, [answer.counter]);

    function fillAnswer(kanji) {
        if (answer.counter === 0) {
            setAnswer(prevAnswer => ({
                ...prevAnswer, 
                firstKanji: kanji,
                firstType: "start",
                counter: 1
            }));
        } else if (answer.counter === 1) {
            setAnswer(prevAnswer => ({
                ...prevAnswer, 
                secondKanji: kanji,
                secondType: "start",
                counter: 2
            }));
        } else if (answer.counter === 2) {
            setAnswer(prevAnswer => ({
                ...prevAnswer, 
                thirdKanji: kanji,
                thirdType: "start",
                counter: 3
            }));
        } else if (answer.counter === 3) {
            setAnswer(prevAnswer => ({
                ...prevAnswer, 
                fourthKanji: kanji,
                counter: 4
            }));
        } else {
            alert("Warning!");
        }
    }

    return (
        <div className="question-answer">
            <QuestionRow question={props.qa[1]} handleAnswer={fillAnswer} />
            <AnswerRow solution={answer} />
        </div>
    )
}