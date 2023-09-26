import React from 'react';

export const Button = ({ bank, handleEvent, audioRef }) => {
    return (
        <button
            className="btn btn-light btn-lg button btn-big drum-pad"
            id={bank.id}
            onKeyDown={handleEvent}
            onClick={handleEvent}
        >
            <audio
                className="clip"
                id={bank.keyTrigger}
                src={bank.url}
                ref={(element) => (audioRef.current[bank.keyTrigger] = element)}
            />
            {bank.keyTrigger}
        </button>
    );
}