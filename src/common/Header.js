import {Link} from 'react-router-dom';
import './style.css';
import '../App.scss';
import logo from '../images/bcLogo.png';

const Header = () => {
    return (
        <div className='header'>
        <img className='logo' src={logo} alt="Logo"/>
        <nav>
                <Link to='/' className='link' >Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/portfolio' className='link'>Portfolio</Link>
                <Link to='/contact' className='link'>Contact</Link>
        </nav>
        </div>
    );
}
export default Header;