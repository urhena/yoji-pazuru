export default function QuestionBox(props) {
    return (
        <span className="kanji-box" onClick={() => props.handleClick(props.kanji)}>{props.kanji}</span>
    )
}