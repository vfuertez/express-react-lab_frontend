import {Link} from 'react-router-dom'

function Header(props) {
    
    const navStyle= {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black", 
        padding: "8px",
        margin: "auto",
        width: "90%"
    }
    
    return (
        <header>
            <h1 className='title'>My Portfolio Page</h1>
            <nav style={navStyle} >
            <Link to ='/'>
                <div className='nav'>HOME</div>
            </Link>
            <Link to = '/about'>
                <div className='nav'>ABOUT</div>
            </Link>
            <Link to='/projects'>
                <div className='nav'>PROJECTS</div>
            </Link>
            </nav>
        </header>
    )
}

export default Header