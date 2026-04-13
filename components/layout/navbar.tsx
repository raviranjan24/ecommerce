import Link from "next/link";
import { menuData } from "@/utils/categoriesData";

const Navbar = () => {
  return (
    <nav className="box-navigation text-center">
      <ul className="box-nav-ul justify-content-start">

        {menuData.map((menu, i) => (
          <li key={i} className="menu-item mega-parent">
            
            {/* Parent Menu */}
            <Link href="#" className="item-link">
              {menu.title}
              <i className="icon icon-down" />
            </Link>

            {/* Mega Menu */}
            <div className="sub-menu mega-menu">
              <div className="container">
                <div className="mega-grid">

                  {/* Columns */}
                  {menu.columns?.map((col, j) => (
                    <div key={j} className="mega-column">

                      {/* Heading */}
                      {col.heading && <h6>{col.heading}</h6>}

                      {/* Links */}
                      <ul>
                        {col.links?.map((link, k) => (
                          <li key={k}>
                            <Link href={link.url}>
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>

                    </div>
                  ))}

                </div>
              </div>
            </div>

          </li>
        ))}

      </ul>
    </nav>
  );
};

export default Navbar;