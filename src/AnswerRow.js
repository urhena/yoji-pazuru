import AnswerBox from "./AnswerBox";

export default function AnswerRow(props) {
    return (
        <div className="row-element">
            <AnswerBox kanji={props.solution.firstKanji} type={props.solution.firstType} />
            <AnswerBox kanji={props.solution.secondKanji} type={props.solution.secondType} />
            <AnswerBox kanji={props.solution.thirdKanji} type={props.solution.thirdType} />
            <AnswerBox kanji={props.solution.fourthKanji} type={props.solution.fourthType} />
        </div>
    )
}