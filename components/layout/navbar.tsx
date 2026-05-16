"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [category, setCategory] = useState<any[]>([]);
  const loadCategory = async () => {
    try {
      const data = await getCategory();
      setCategory(data?.data || []);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    loadCategory();
  }, []);

  return (
    <nav className="box-navigation text-center">
      <ul className="box-nav-ul justify-content-start">
        {category?.map((menu: any, i: number) => (
          <li key={i} className="menu-item mega-parent">
            <Link
              href={`/categories/${menu?._id || ""}`}
              className="item-link"
            >
              {menu?.name || menu?.title}
              {menu?.columns?.length > 0 && (
                <i className="icon icon-down" />
              )}
            </Link>
            {menu?.columns?.length > 0 && (
              <div className="sub-menu mega-menu">
                <div className="container">
                  <div className="mega-grid">
                    {menu?.columns.map((col: any, j: number) => (
                      <div key={j} className="mega-column">
                        {col?.heading && <h6>{col.heading}</h6>}
                        <ul>
                          {col?.links?.map((link: any, k: number) => (
                            <li key={k}>
                              <Link
                                href={
                                  `/categories/${link?._id || ""}`
                                }
                              >
                                {link?.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

export const getCategory = async () => {
  //const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  //const url = `${baseUrl}/api/v1/header-categories`;
  const url="https://helioshome-backend.vercel.app/api/v1/header-categories";
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch category: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
};