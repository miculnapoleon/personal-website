import Link from "next/link";
import styles from './footer.module.scss'
import Image from 'next/image'

const FOOTER_ITEMS = [
  {
    alt: "Instagram",
    icon:<a href="https://www.instagram.com/" rel="noopener noreferrer" target="__blank" className={styles.link}> <Image key={1}  width={20} height={20} src="/images/insta.svg" /> </a>
  },
  {
    alt: "Behance",
    icon: <a href="https://www.behance.net/" rel="noopener noreferrer" target="__blank" className={styles.linkB}> <Image key={2}  width={20} height={20} src="/images/behance.svg" /></a>,
  }
];

const Footer = () => {
  
  const renderFooterItems = () => {
    return FOOTER_ITEMS.map((item, index) => {
      return <div className={styles.icon} key={index}>
        {item.icon} 
      </div>
  });
  };
  return (
    <div className={styles.iconContainer}>
        {renderFooterItems()}
    </div>
  );
};

export default Footer;
