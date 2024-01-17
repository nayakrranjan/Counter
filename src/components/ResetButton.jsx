export default function ResetButton({resetCount}) {
    return (
        <div className="rst">
            <button className="reset-button" onClick={function(){resetCount()}}>Reset</button>
        </div>
    )
}