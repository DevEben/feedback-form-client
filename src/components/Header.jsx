import './Header.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <header>
                <div class="headerImg">
                    <h3>Insight<span>Buddy</span></h3>
                </div>
                <ul id="menuItems">
                    <li className='menuList'><Link to="/">Home</Link></li>
                    <li className='menuList'><Link to="/about">About Us</Link></li>
                    <li className='menuList'><Link to="/login-signup">LogIn</Link></li>
                </ul>
            </header>
        </>
    )
}


export default Header;