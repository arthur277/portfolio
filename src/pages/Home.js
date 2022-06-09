import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Arthur Deumeni</h1>
                    <h2>Developpeur front-end et back-end</h2>
                    <div className="pdf">
                        <a href="./media/CV Arthur D T.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;