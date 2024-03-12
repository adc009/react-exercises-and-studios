import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.seriouseats.com/the-food-lab-5118015";
    let authorPhoto = "https://media.gq.com/photos/621e6b5f160ff42882711adc/3:2/w_2666,h_1777,c_limit/_IAN2287.jpg";
    let authorName = "J. Kenji Lopez-Alt";


    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "ONE WAY TRIP TO FLAVORTOWN" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>FLAVORTOWN CHRONICLES</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Grilled Steak</h1>
                    <p>Steak that is grilled</p>
                    <ol>
                        <li>Season the steak</li>
                        <li>Grill the steak</li>
                        </ol>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;