export default function AnswerBox(props) {
    let boxType = "";
    if (props.type === "start") {
        boxType = "kanji-box no-answer"; 
    } else {
        boxType = (props.type === "right") ? "kanji-box right-answer" : "kanji-box wrong-answer";
    }
    return (
        <span className={boxType}>{props.kanji}</span>
    )
}