import { useState } from 'react';

export default function RandomColor() {
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }

        setColor(hexColor);
    }

    return (
        <div style={{
            color: 'white',
            paddingTop: '100px',
            textAlign: 'center',
            width: '100vw',
            height: '100vh',
            fontFamily: 'Courier New',
            background: color
        }}>

            <button
                style={{
                    fontSize: '28px',
                    color: 'black',
                    cursor: 'pointer'
                }}
                onClick={handleCreateRandomHexColor}>Generate Random Color</button>
            <p>currentColor: {color}</p>
        </div>
    );
};