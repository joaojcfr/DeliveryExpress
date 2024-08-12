import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ThemeContext } from '../ThemeProvider';
import { useContext } from 'react';

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import App from '../App';
=======
>>>>>>> a666070cbd133d6c580b8fbe845ff985c9d336a6
>>>>>>> 49f0e5102db198198c0b53d5a0edf1b015075551
>>>>>>> 05b513e877d0f3572bad1779d6bed6aab60c3b05

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(false)
  const [isMenuHidden, setMenuHidden] = useState(true)
  const [isSubMenuHidden, setSubMenuHidden] = useState(true)

    const handleMenuEntered = (menu) =>{
      setHoveredMenu(menu)
    }
    const handleMenuexit = () =>{
      setHoveredMenu(false)
    }
    const handleMouseEnter = (link) => {
      setHoveredLink(link);
    };
    const handleMouseLeave = () => {
      setHoveredLink(null);
    };
    const handleSubMenu = (menuH, subMenuH) => {
      if(menuH === false && subMenuH === false){
        setMenuHidden(!isMenuHidden)
        setSubMenuHidden(!isSubMenuHidden)
      }
    }
    
/*`${styles.description} ${styles.yellow}` */

  return (
    <div className={styles.nav}>
       <div className={styles.top_row_left}> 
        
        <img id={styles.logo} src="./src/Images/logo.jpeg" alt="" />

      </div>
      <div className={styles.top_row_middle}>
        <div className={styles.top_middle}>
          <div className={hoveredMenu === "Home"? styles.hovered_link : styles.unhovered_link}
          onMouseEnter={() => {
            handleMenuEntered("Home")
            setHoveredLink("Home")
          }}
          onMouseLeave={() => {
            handleMenuexit()
            setHoveredLink(false)
          }}
          >
<<<<<<< HEAD
             <Link to='/' className={hoveredLink === "Home" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Home</Link>
=======
<<<<<<< HEAD
            <div
              href="" className={hoveredLink === "Home" ? styles.hovered_raw_link : styles.unhovered_raw_link}>
             <Link to='/'>Home</Link>
              </div>
=======
<<<<<<< HEAD

              <Link to="/" className={hoveredLink === "Home" ? styles.hovered_raw_link : styles.unhovered_raw_link}> Home </Link>
=======
             <Link to='/' className={hoveredLink === "Home" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Home</Link>
>>>>>>> a666070cbd133d6c580b8fbe845ff985c9d336a6
>>>>>>> 49f0e5102db198198c0b53d5a0edf1b015075551
>>>>>>> 05b513e877d0f3572bad1779d6bed6aab60c3b05
          </div>
          <div className={hoveredMenu === "Contact"? styles.hovered_link : styles.unhovered_link}
          onMouseEnter={() => {
            handleMenuEntered("Contact")
            setHoveredLink("Contact")
          }}
          onMouseLeave={() => {
            setHoveredLink(false)
            handleMenuexit()
          }}
          >
            <Link to="/Contact" className={hoveredLink === "Contact" ? styles.hovered_raw_link : styles.unhovered_raw_link}> Contact</Link>
          </div>
          <div className={hoveredMenu === "Rate"? styles.hovered_link : styles.unhovered_link}
          onMouseEnter={() => {
            handleMenuEntered("Rate")
            setHoveredLink("Rate")
          }}
          onMouseLeave={() => {
            setHoveredLink(false)
            handleMenuexit()
          }}
          >
             <Link to="/Rate" className={hoveredLink === "Rate" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Rate </Link>
          </div>
        </div>
        <div className={styles.bottom_middle}>
            <h1>Delivery Express</h1>
        </div>
        
        </div>
      <div className={styles.top_row_right}>
        <div className={styles.top_login_left}>
          <div className={hoveredMenu === "Login"? styles.hovered_link_login : styles.unhovered_link_login}
          onMouseEnter={() => {
            handleMenuEntered("Login")
            setHoveredLink("Login")
          }}
          onMouseLeave={() => {
            setHoveredLink(false)
            handleMenuexit()
          }}
          >
            <Link to="/Login" className={hoveredLink === "Login" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Login </Link>
          </div>
          <div className={hoveredMenu === "SignUp"? styles.hovered_link_login : styles.unhovered_link_login}
          onMouseEnter={() => {
            handleMenuEntered("SignUp")
            setHoveredLink("SignUp")
          }}
          onMouseLeave={() => {
            setHoveredLink(false)
            handleMenuexit()
          }}
          >
            <Link to="/Signup" className={hoveredLink === "SignUp" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Sign Up</Link>
          </div>
        </div>


        <div>
        <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
        </div>

        
        <div className={styles.top_login_right}
          onMouseLeave={() => {
          handleSubMenu(isMenuHidden,isSubMenuHidden)
          }
        }
        >
          <div className={hoveredMenu === "login_menu"? styles.hamburguer_icon_selected : styles.hamburguer_icon_unselected}
            onMouseEnter={() => handleMenuEntered("login_menu")}
            onMouseLeave={() => handleMenuexit()}
            onClick={() => {
              setMenuHidden(!isMenuHidden)
              setSubMenuHidden(!isSubMenuHidden)
              }}>
                <i className="fa-solid fa-bars"></i>
          </div>
          <div className={isMenuHidden === true ? styles.hidden_links : styles.show_links}>
            <div className={hoveredMenu === "MyAccount"? styles.hovered_link_submenu : styles.unhovered_link_submenu}
            onMouseEnter={() => {
              handleMenuEntered("MyAccount")
              setHoveredLink("MyAccount")
            }}
            onMouseLeave={() => {
              setHoveredLink(false)
              handleMenuexit()
            }}>
              <a
              href="" className={hoveredLink === "MyAccount" ? styles.hovered_raw_link : styles.unhovered_raw_link}>My Account
              </a>
            </div>
            <div className={hoveredMenu === "Orders"? styles.hovered_link_submenu : styles.unhovered_link_submenu}
            onMouseEnter={() => {
              handleMenuEntered("Orders")
              setHoveredLink("Orders")
            }}
            onMouseLeave={() => {
              setHoveredLink(false)
              handleMenuexit()
            }}
            >
              <a
                href="" className={hoveredLink === "Orders" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Orders
              </a>
            </div>
            <div className={hoveredMenu === "Messages"? styles.hovered_link_submenu : styles.unhovered_link_submenu}
            onMouseEnter={() => {
              handleMenuEntered("Messages")
              setHoveredLink("Messages")
            }}
            onMouseLeave={() => {
              setHoveredLink(false)
              handleMenuexit()
            }}
            >
              <a
                href="" className={hoveredLink === "Messages" ? styles.hovered_raw_link : styles.unhovered_raw_link}>Messages
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar