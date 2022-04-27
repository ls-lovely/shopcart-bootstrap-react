import React from "react";
import styles from "./navbar.module.css";

interface NavbarProps {
  totalCount: number;
  title: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light p-3">
      <div className={styles.navbar_title}>{props.title}</div>
      <span className="badge bg-success">{props.totalCount}</span>
    </nav>
  );
};

export default Navbar;
