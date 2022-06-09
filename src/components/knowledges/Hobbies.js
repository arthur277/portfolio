import React from 'react';

const Hobbies = () => {
    return (

        <div className="hobbies">
            <h3>Interets</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Course à pied</span>
                </li>
                <li className="hobby">
                    <i className="fab fab-book"></i>
                    <span>Lecture</span>
                </li>
                <li className="hobby">
                    <i className="fab fa-bitcoin"></i>
                    <span>Crypto-monnaies</span>
                </li>
            </ul>
        </div>

    );
};

export default Hobbies;