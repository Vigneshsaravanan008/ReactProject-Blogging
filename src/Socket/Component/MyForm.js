import React, { useState } from 'react';
import { socket } from '../SocketChat';

export default function MyForm() {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        socket.timeout(5000).emit('create-something', value, () => {
            console.log(value);
            setIsLoading(false);
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={e => setValue(e.target.value)} />

            <button type="submit" disabled={isLoading}>Submit</button>
        </form>
    );
}