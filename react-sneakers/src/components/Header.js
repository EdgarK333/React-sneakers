import {Link} from 'react-router-dom';

function Header(props) {

return(
<header className="d-flex justify-between align-center p-40">
<Link to="/">
    <div className="d-flex align-center">
      <img width={40} height={40} src="/img/logo.png" alt="logoPNG" />
    <div>
      <h3 className="text-uppercase" >React Sneakers</h3>
      <p className="opacity-5">Магазин лучших кросовок</p>
    </div>
    </div>
    </Link>
    <ul className="d-flex">

    <li onClick={props.onClickCart} className="mr-30 cu-p">
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      <span>1205 руб</span>
      </li>
      <li className="mr-20 cu-p">
      <Link to="/favorites">
      <img width={20} height={20} src="/img/heart.svg" alt="Favorites" />
      </Link>
      
      </li>

      <li>
      <img width={20} height={20} src="/img/user.svg" alt="userPNG" />
      
      </li>
    </ul>
  </header>
);
}

export default Header;