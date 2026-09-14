import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const guideList = [
  {
    number: '01',
    label: 'FIRST STEPS',
    title: 'Getting started',
    description: 'Learn the product model, check prerequisites, and complete your first setup.',
    to: '/docs/getting-started-guide/getting-started-overview/',
    tone: 'mint',
  },
  {
    number: '02',
    label: 'SETUP & VERIFY',
    title: 'Installation',
    description: 'Prepare your environment, install Verve, and verify that everything is working.',
    to: '/docs/installation-guide/installation-overview/',
    tone: 'coral',
  },
  {
    number: '03',
    label: 'EVERYDAY WORK',
    title: 'User guide',
    description: 'Sign in, manage projects, and collaborate with the people you work with.',
    to: '/docs/user-guide/user-guide-overview/',
    tone: 'blue',
  },
  {
    number: '04',
    label: 'KEEP THINGS RUNNING',
    title: 'Administration',
    description: 'Manage users, roles, permissions, and system-wide settings with confidence.',
    to: '/docs/administration-guide/administration-guide-overview/',
    tone: 'yellow',
  },
];

function GuideCard({number, label, title, description, to, tone}) {
  return (
    <Link className={`${styles.guideCard} ${styles[tone]}`} to={to}>
      <div className={styles.cardTopline}><span>{label}</span><span>{number}</span></div>
      <div className={styles.cardBody}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <span className={styles.cardArrow} aria-hidden="true">↗</span>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.sectionLabel}>FIND YOUR WAY AROUND</p>
            <h2>Start where you are.</h2>
          </div>
          <p>Choose a guide by what you need to do next. Each path is built around a clear outcome.</p>
        </div>
        <div className={styles.guideGrid}>
          {guideList.map((guide) => <GuideCard key={guide.number} {...guide} />)}
        </div>
        <div className={styles.supportBar}>
          <div><span className={styles.supportIcon}>?</span><span><strong>Something not working?</strong> Find the fastest path to an answer.</span></div>
          <Link to="/docs/troubleshooting-guide/troubleshooting-guide-overview/">Open troubleshooting <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
