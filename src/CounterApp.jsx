
import { useState } from 'react';

const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value );

    const handleEvent = () => { 
        //setCounter(counter + 1);
        setCounter( ( c ) => c + 1  );
    }

    const handleSubtrat = () => {
        setCounter( (c) => c - 1 );
    }
    
    const handleReset = () => {
        setCounter(value);
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleEvent }> +1 </button>
        <button onClick={ handleSubtrat }> -1 </button>
        <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>
    </>
  )
}

export default CounterApp
