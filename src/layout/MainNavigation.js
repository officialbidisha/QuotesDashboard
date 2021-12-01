import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'
const MainNavigation = () => {
    return <header className={classes.header}>
        <div> Great Quotes</div>
        <div className={classes.nav}>
            <ul>
                <li><NavLink to='/quotes' activeClassName={classes.active}> All Quotes
                </NavLink></li>
                <li><NavLink to='/new-quote' activeClassName={classes.active}> Add a quote
                </NavLink></li>
            </ul>
        </div>
    </header>
}

export default MainNavigation;