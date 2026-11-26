import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../content/site';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Sulge' : 'Menüü'}
        </button>
        <nav id="main-nav" className={open ? 'main-nav open' : 'main-nav'} aria-label="Peamenüü">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end={item.path === '/'} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
