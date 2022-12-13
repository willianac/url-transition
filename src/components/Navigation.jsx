import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation () {
    const activeLink = {
        color : 'white',
        textDecoration : 'inherit',
        marginRight: '20px',
        fontSize : '18px'
    }

    const notActive = {
        color : '#20dbd8',
        textDecoration : 'inherit',
        marginRight: '20px',
        fontSize : '18px'
    }
    return (
        <nav>
            <h1>React Transition</h1>
            <div>
                <NavLink to='/' style={({ isActive }) => isActive ? activeLink : notActive}>Page 1</NavLink>
                <NavLink to='/route2' style={({ isActive }) => isActive ? activeLink : notActive}>Page 2</NavLink>
                <NavLink to='/route3' style={({ isActive }) => isActive ? activeLink : notActive}>Page 3</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;