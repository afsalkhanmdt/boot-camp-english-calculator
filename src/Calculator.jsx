function Calculator(){
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



    return(
        <div className="container">
            <section className="monitor">
                <div className="input-string">
                25*25
                </div>
                <div className="output">
                625
                </div>
            </section>
            <section className="input-buttons">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="red">/</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className="red">*</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="red">-</button>
                <button>.</button>
                <button>0</button>
                <button className="green">=</button>
                <button className="red">+</button>
            </section>
        </div>
    )
}

export default Calculator