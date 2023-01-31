export default function SubmitButton(props) {
    return (
        <div className="row-element single">
            <button type="button" className="submit-button" onClick={props.handleClick}>確認</button>
        </div>
    )
}