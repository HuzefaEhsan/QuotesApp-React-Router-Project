import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = function () {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quotes App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to={'quotes'}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'new-quote'}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
