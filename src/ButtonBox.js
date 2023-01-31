export default function ButtonBox(props) {
    return (
        <span className="button-box">
            <button type="button" className="order-button" onClick={() => props.pressButton(1, props.kanji)}>1</button>
            <button type="button" className="order-button" onClick={() => props.pressButton(2, props.kanji)}>2</button>
            <button type="button" className="order-button" onClick={() => props.pressButton(3, props.kanji)}>3</button>
            <button type="button" className="order-button" onClick={() => props.pressButton(4, props.kanji)}>4</button>
        </span>
    )
}