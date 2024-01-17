import {PropTypes} from 'prop-types';

export default function CounterButton({by, incrementCount, decrementCount}) {
    return (
        <div className="counter-btns">
            <div className="btn-div">
                <button className="cntr-btn" onClick={() => decrementCount(by)}>
                    -{by}
                </button>
                <button className="cntr-btn" onClick={() => incrementCount(by)}>
                    +{by}
                </button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}