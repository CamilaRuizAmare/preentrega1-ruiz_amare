import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black ">
            <div className="container-fluid">
                <a className="navbar-brand text-light ms-2" href="#">NiloShop</a>
                <ul className="navbar-nav">
                    <li className="nav-item px-2">
                        <a className="nav-link text-light" href="#">Promociones</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link text-light" href="#">Hogar&Deco</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link text-light" href="#">Contacto</a>
                    </li>
                </ul>
            </div>

            <CartWidget />
        </nav>
    );
};

export default NavBar;