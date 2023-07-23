'use client';
import { useEffect } from "react";

const error = ({error, reset}: {error: any, reset: any}) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    
    return (
        <div>
        <button 
            onClick= {() => {
                reset()
            }}>
                Try again!
        </button>
        </div>
    )
}

export default error;