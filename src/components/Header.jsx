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
                    <Link to="/"><li className='menuList'>Home</li></Link>
                    <Link to="/about"><li className='menuList'>About Us</li></Link>
                    <Link to="/login-signup"><li className='menuList'>LogIn</li></Link>
                </ul>
            </header>
        </>
    )
}


export default Header;