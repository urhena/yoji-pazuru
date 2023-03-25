export default function SubmitButton(props) {
    return (
        <div className="row-element">
            <button type="button" className="submit-button" onClick={props.handleClick}></button>
        </div>
    )
}