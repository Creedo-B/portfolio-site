// import {data1} from '../App.js'

function About(props) {

    console.log(props);

    return (
        <div className='content__child-app'>
            <h1>About</h1>
            <h2>My name is {props.name}</h2>
        </div>
    );
}
export default About;

