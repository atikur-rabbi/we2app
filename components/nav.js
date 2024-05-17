import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/shark', label: 'Shark' },
  { href: '/event', label: 'Event' },
  { href: '/event/about', label: 'About' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-inverse navbar-static-top mb-0">
      <div className="container">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Everything Sharks</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav mr-auto">
              {links.map(({ key, href, label }) => (
                <li key={key}>
                  <Link className={pathname === href ? 'active' :''} href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
      </div>    
    </nav>
  )
};

export default Nav;