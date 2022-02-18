import React from "react";
import mealsImage from '../../assets/meals.jpg'

import clasess from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return(
        <React.Fragment>
            <headr className={clasess.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </headr>
            <div className={clasess['main-image']}>
                <img src={mealsImage} alt=" A table full of delicious food!" />
            </div>
            
        </React.Fragment>

    )
};

export default Header