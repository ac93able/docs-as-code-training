import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>VERVE DOCUMENTATION HUB</p>
          <Heading as="h1">
            Bring your work
            <span> into focus.</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            The practical guide to installing Verve, setting up your workspace,
            and helping teams move projects forward together.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/verve-documentation">
              Verve Documentation Home
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel} aria-label="Verve documentation at a glance">
          <div className={styles.panelTopline}>
            <span className={styles.statusDot} />
            <span>YOUR VERvE WORKSPACE</span>
            <span className={styles.panelMenu}>•••</span>
          </div>
          <div className={styles.panelHeading}>
            <span>Today’s focus</span>
            <strong>Get your team moving</strong>
          </div>
          <div className={styles.progressTrack}><span /></div>
          <div className={styles.panelMeta}><span>3 guides to go</span><span>Ready when you are</span></div>
          <div className={styles.panelRows}>
            <div><span className={styles.rowNumber}>01</span><span>Install and verify Verve</span><b>›</b></div>
            <div><span className={styles.rowNumber}>02</span><span>Open your first project</span><b>›</b></div>
            <div><span className={styles.rowNumber}>03</span><span>Invite your teammates</span><b>›</b></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation hub"
      description="Find the right Verve guide for setup, daily work, administration, and troubleshooting.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
