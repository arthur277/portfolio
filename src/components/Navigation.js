import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className="id">
                <div className="idcontent">
                    <img src="./media/hi2.jpg" alt="profil-pic" />
                    <h3 className="hi">Arthur Deumeni</h3> <br />
                    <p className="hi1">-Organisé <br /> -Diynamique <br /> -Polyvalent <br /> -Respectueux</p>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeclassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink exact to="/competences" activeclassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Competences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeclassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink exact to="/contact" activeclassName="navActive">
                            <i className="fas fa-check"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                            rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>fromScratch - 2022</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;