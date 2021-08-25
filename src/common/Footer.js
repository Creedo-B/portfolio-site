import {Link} from 'react-router-dom';
import './style.css';
import '../App.scss';

const Footer = () => {
    return (
        <nav className='footer'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/about' className='link'>About</Link>
                <Link to='/portfolio' className='link'>Portfolio</Link>
                <Link to='/contact' className='link'>Contact</Link>
        </nav>
    );
}
export default Footer;