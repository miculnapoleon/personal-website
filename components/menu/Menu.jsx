import Link from "next/link";
import styles from './menu.module.scss'

const MENU_ITEMS = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Photography",
    path: "/photography",
  },
  {
    name: "UX Design",
    path: "/ux",
  },
  {
    name: "Daily Thoughts",
    path: "/daily-thoughts",
  },
  // {
  //   name: "Get in touch",
  //   path: "/contact",
  // },
];

const Menu = () => {
  
  const renderMenuItems = () => {
    return MENU_ITEMS.map((item, index) => {
      return <div className={styles.item} key={index}>{item.name}</div>
  });
  };

  return (
      <div className={styles.menuContainer}>
        {renderMenuItems()}
        <div className={styles.getIntouch}><div>{'Get in touch'}</div></div>
      </div>
  );
};

export default Menu;
