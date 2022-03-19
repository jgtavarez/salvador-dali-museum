import { NavLink } from 'react-router-dom';
import { navlinks } from '../../data/index';
import styles from './styles.module.css';
import { useNavbar } from '../../hooks/useNavbar';

export const Navbar = () => {
  const { show, toggleNavbar } = useNavbar();

  return (
    <div style={{backgroundColor: 'var(--beige)'}}>
      <nav className={`${styles.navbar} ${show && styles.active} container mx-auto`}>
        <h3 className={styles.name}>Salvador Dalí</h3>

        <div className={styles.hamburger} onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul>
          {
            navlinks.map(({ to, text }) => (
              <li key={text} onClick={toggleNavbar}>
                <NavLink to={to} className={({ isActive }) => isActive ? 'active-link' : ''}>{text}</NavLink>
              </li>
            ))
          }
        </ul>

        <div className={styles.social}>
          <a href='https://github.com/JuanGabriel2960/salvador-dali-museum' target="_blank" rel='noreferrer'>
            <img src='./github.png' alt='' />
          </a>
        </div>
      </nav>
    </div>
  )
}

