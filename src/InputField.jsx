import { useState } from "react";

const InputField = ({label}) => {
    let [length, setLength] = useState(0);

    return (
        <div>
        <input
         type="text" 
         placeholder={label}
         onKeyUp={(e) => {
            let value = e.target.value
            setLength(value.length)

            console.log(length)
         }}
         />
         {length}
        </div>
    )
}

export default InputField;