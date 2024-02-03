import logo from '../assets/images/logo.png'
import '../Header.css'
export default function Header(){
    return(
        <div className="header-container">
            <div className="header--logo">
                <img src={logo} className="logo"alt="Meme logo"/>
                <p className='header--title'>Meme Generator</p>
            </div>
            <p>React project 4</p>
        </div>
    )
}