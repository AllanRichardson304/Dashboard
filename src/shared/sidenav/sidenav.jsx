import home from '../../assets/img/house.png';
import dashboard from '../../assets/img/dashboard.png';
import downarrow from '../../assets/img/down-arrow.png';
import product from '../../assets/img/note.png';
import admin from '../../assets/img/settings.png';
export const Sidenav = () => {
    return (
      <div className="sidenav">
        <div className="sidenav__logo">
            ACME
        </div>
        <div className="sidenav__menu">
            <ul>
                <li> <img src={home} alt="" /> Home</li>
                <li><img src={dashboard} alt="" /> Dashboard</li>
                <li><img src={downarrow} alt="" /> Inbox</li>
                <li><img src={product} alt="" />Product</li>
                <li><img src={admin} alt="" />Admin</li>
            </ul>
        </div>
      </div>
    )
  }
  
  