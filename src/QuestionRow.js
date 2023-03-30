import QuestionBox from "./QuestionBox";

export default function QuestionRow(props) {
    return (
        <div className="row-element">
            {[0, 1, 2, 3].map(index => <QuestionBox key={index} kanji={props.question[index].toString()} handleClick={props.handleAnswer} />)}
        </div>
    )
}