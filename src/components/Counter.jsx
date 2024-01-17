import { useState } from 'react';

import CounterButton from './CounterButton';
import ResetButton from './ResetButton';
import './Counter.css'

export default function Counter() {
    const [counter, updateCount] = useState(0);
    const incrementCount = by => {
        updateCount(counter + by)
    }
    const decrementCount = by => {
        if (counter >= by)
            updateCount(counter - by)
    }
    const resetCount = () => {
        updateCount(0);
    }
    return (
        <>
            <span className="cntr-body">
                {counter}
            </span>
            <CounterButton incrementCount={incrementCount} decrementCount={decrementCount}/>
            <CounterButton by={5} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <CounterButton by={10} incrementCount={incrementCount} decrementCount={decrementCount}/>
            <ResetButton resetCount={resetCount} />
        </>
    )
}