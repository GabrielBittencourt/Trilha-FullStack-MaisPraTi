import { useState } from 'react'

function MirrorText() {
    const [text, setText] = useState('')

    return (
        <div className='container'>
            <div className='card'>
                <input type="text" value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
                <p>Você digitou: {text}</p>
            </div>
        </div>
        
    )
}

export default MirrorText