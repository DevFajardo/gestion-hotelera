import { useState } from "react";

const Clean = ({ habitacion }) => {
    const [isClean, setIsClean] = useState(!habitacion.estado.includes("sucia"));
    const [cleaning, setCleaning] = useState(false);

    const cleanRoom = () => {
        setIsClean(true); // Set to true if you want to mark the room as clean
        setCleaning(false); // End cleaning
    };

    const switchCleaning = () => setCleaning(!cleaning);

    const handleButtonClick = () => {
        switchCleaning();
        if (cleaning) {
            cleanRoom();
        }
    };

    return (
        <div className="card-status">
            {cleaning ? (
                <>
                    <button onClick={handleButtonClick} className="status-text">End</button>
                    <span> 💚</span>
                </>
            ) : (
                <>
                    <span className="status-text">SUCIA</span>
                    <span> 💔</span>
                    <button onClick={handleButtonClick}>Limpiar</button>
                </>
            )}
        </div>
    );
};

export default Clean;
