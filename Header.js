
import {Fragment} from 'react'
import mealsImage from '../../src/assets/React_Header.png'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header=props=>{
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton></HeaderCartButton>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='a table full of delicious food'></img>
        </div>
    </Fragment>
    )
}
export default Header;