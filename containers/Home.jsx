/**
 *
 * Dashboard includes  the logo plus top menu: about, photography, ux and daily thoughts plus get in touch btn
 * Plus some text under the opt menu with a line design and a scroll down btn and icon arrow
 * Also footer with instagram and 500px and terms and conditions/cookies/gdpr
 * the menu and footer are persisted on each top menu section
 */
import styles from './home.module.scss';

const Dashboard = () => {
  return <div className={styles.pageContent}>
    <h2 className={styles.title}>
    Digital Photography, UX Design and
    Software Testing define me.
    </h2>
    <p className={styles.description}>
    Hello, I am Andreea Alexandra, a human explorer from Romania.
    </p>
  </div>;
};

export default Dashboard;
