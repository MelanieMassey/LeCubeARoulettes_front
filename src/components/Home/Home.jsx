import React from "react";
import './Home.css';
import logo from '../../assets/logo.png';
import img01 from '../../assets/photo01.png';

export default function Home(){

    return(
        <div className='main'>
            <section className="first-section">
                <div id='logo-container'>
                <img className='logo' src={logo} alt='Logo de la boutique le cube à roulettes'/>
                </div>
            </section>
            <section className="second-section">
                <img className='index-img01 index-img' src={img01}/>
                <div className='welcome-message'>
                <p>Bonjour et bienvenue !</p>
                <p>Je vous propose au Cube à Roulettes, un large choix de jeux, jouets, mais pas que, sélectionnés par mes soins du haut de mes nombreuses années d'expérience dans le domaine du jouet, mais aussi en tant que maman de trois enfants certifiés testeurs experts !</p>
                <p>Il me tient à coeur de faire du Cube à Roulettes, non seulement un lieu où l'on trouve des articles de qualités mais par dessus tout, un espace qui je l'espère, saura rendre votre quotidien plus beau, fun et vivant ! Bref comptez sur moi pour mettre des paillettes dans vos vies !</p>
                <p>Pour y parvenir, je mets beaucoup d'énergie à organiser des ateliers à destination des enfants mais aussi des parents, des tout-petits, des nounous... Mes idées n'étant pas limitées, à tout instant je saurai vous surprendre et répondre à vos demandes.</p>
                <p>Venez me rendre visite, bonne humeur garantie.</p>
                <p>Elisabeth</p>
                </div>
            </section>
        </div>
    )
}