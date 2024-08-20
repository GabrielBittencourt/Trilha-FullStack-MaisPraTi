import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="card">
                <p>Você clicou <span className="contador">{count}</span> vezes</p>
                <button className="button" onClick={() => setCount(count + 1)}>
                    Clique aqui
                </button>
            </div>
        </div>
        
    )
}

export default Counter