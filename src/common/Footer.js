import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <nav className='footer'>
                <h1>Footer</h1>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>

        </nav>
    );
}
export default Footer;