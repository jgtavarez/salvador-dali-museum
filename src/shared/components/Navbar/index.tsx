import { NavLink } from 'react-router-dom';
import { navlinks } from '../../data/index';
import styles from './styles.module.css';
import { useNavbar } from '../../hooks/useNavbar';

export const Navbar = () => {
  const { show, toggleNavbar } = useNavbar();

  return (
    <div>
      <nav className={`${styles.navbar} ${show && styles.active} container mx-auto`}>
        <div className={styles.hamburger} onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul>
          {
            navlinks.map(({ to, text }) => (
              <li key={text} onClick={toggleNavbar}>
                <NavLink to={to} className={({ isActive }) => isActive ? 'text-light-blue' : ''}>{text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

