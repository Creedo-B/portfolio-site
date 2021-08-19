import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
                <h1>Header</h1>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio App</Link>
                <Link to='/contact'>Contact</Link>

        </nav>
    );
}
export default Header;