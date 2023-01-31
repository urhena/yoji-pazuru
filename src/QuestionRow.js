import QuestionBox from "./QuestionBox";

export default function QuestionRow(props) {
    return (
        <div className="row-element">
            {props.data.map(char => <QuestionBox key={props.data.indexOf(char)} kanji={char.toString()} />)}
        </div>
    )
}