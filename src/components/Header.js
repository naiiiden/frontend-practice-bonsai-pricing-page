import Logo from "../images/bonsai-logo.svg";

const Header = () => {
     return (
         <header className="header">
             <img src={Logo} alt="Bonsai's logo" className="header--logo"/>
             <button className="header--menu--button">
                 <div style={{width: "1rem", height: "1rem", background: "red"}}></div>
             </button>
             <nav className="header--nav">
                <ul className="header--nav--ul">
                    <li className="header--center">Product</li>
                    <li>Templates</li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Reviews</a></li>
                    <li className="header--right"><a href="" className="login--link">LOG IN</a></li>
                    <li><a href="" className="start--link">START FREE</a></li>
                </ul>
             </nav>
         </header>
     )
}

export default Header;