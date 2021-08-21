import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <main className='content__child-app'>

            <h1>404</h1>

            <h2><i>Sorry this page was not found</i></h2>

            <Link to='/'>click here to go to the home page</Link>

        </main>
    );
}
export default PageNotFound;