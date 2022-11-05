import { useState } from "react"

function Calculator(){

    const [input,setInput] = useState(0);
    const [output,setOutPut] = useState(0);
    const [lastOperator,setLastOperator] = useState(false)

    const inputs = [
        {
            value: 7
        },
        {
            value: 8
        }
        ,{
            value: 9
        }
        ,{
            value: "/",
            className: "red"
        }
        ,{
            value: 4
        }
        ,
        {
            value: 5
        }
        ,{
            value: 6
        }
        ,{
            value: "*",
            className: "red"
        }
        ,{
            value: 1
        },
        {
            value: 2
        },
        {
            value: 3
        },
        {
            value: "-",
            className: "red"
        },
        {
            value: ".",
            
        },
        {
            value: 0
        }
        ,{
            value: "=",
            className: "green"
        },
        {
            value: "+",
            className: "red"
        }
    ]

    function onInput(value,type){
        if(type === "equal"){
            try{
                let result = eval(input);
                setOutPut(result)
                setInput(0)
                return
            }catch(error){
                alert("It's an invalid input");
                return
            }
        }
        if(input === 0 && type === "operant") return setInput(value)
        if(lastOperator && type === "operator") return
        setLastOperator(type === "operator")
        setInput(input+""+value)
    }

    function keyType(name){
        switch(name){
            case "red":
                return "operator";
            case "green":
                return "equal";
            default:
                return "operant"
        }
    }


    return(
        <div className="container">
            <section className="monitor">
                <div className="input-string">
                {input}
                </div>
                <div className="output">
                {output}
                </div>
            </section>
            <section className="input-buttons">
                {inputs.map(
                    ({value,className})=>
                    <button
                        className={className}
                        onClick={()=>onInput(
                            value,
                            keyType(className)
                            )}
                    >
                        {value}
                    </button>
                )}
            </section>
        </div>
    )
}

export default Calculator