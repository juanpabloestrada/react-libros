import { useState, useEffect } from "react";

const CountComponent = () => {
    const [count, setCount] = useState(1)


        useEffect(() => {
            console.log('Se ejecuta el useEffect si dependencias')
        });

        useEffect(() => {
            console.log('se ejecuta el useEffect con array de dependencias vacia');
        }, [])

        useEffect(() => {
            console.log('se ejecuta el useEffect con dependencias');
        }, [count])

        const handleAddCount = () => {
            setCount(count + 1);
        }

        const handleRemoveCount = () => {
            setCount(count - 1);
        }

    return (
        <div>
            <button onClick={handleAddCount}>+</button>
            <div>{count}</div>
            <button onClick={handleRemoveCount}>-</button>
        </div>
    );
};

export default CountComponent;