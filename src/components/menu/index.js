import NavLink from "../link";
import { data } from "./data";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        {data.map(({ id, href, label }) => (
          <li key={id}>
            <NavLink href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
