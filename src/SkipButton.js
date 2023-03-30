export default function SkipButton(props) {
    return(
        <div>
            <button type="button" className="skip-button" onClick={props.handleClick}></button>
        </div>
    )
}