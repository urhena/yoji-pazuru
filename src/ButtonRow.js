import ButtonBox from "./ButtonBox";

export default function ButtonRow(props) {
    return (
        <div className="row-element">
            <ButtonBox kanji={props.question[0]} pressButton={props.handleAnswer} />
            <ButtonBox kanji={props.question[1]} pressButton={props.handleAnswer} />
            <ButtonBox kanji={props.question[2]} pressButton={props.handleAnswer} />
            <ButtonBox kanji={props.question[3]} pressButton={props.handleAnswer} />
        </div>
    )
}