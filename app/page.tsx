import Layout from './layout';
import HeroSection from '../components/HeroSection';
import Events from '../components/Events';
import TopEventSection from '../components/TopEventSection';
import styles from '../components/styles/Page.module.css'; // Voeg een CSS-module toe

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.Container}>
        <HeroSection />
        <TopEventSection />
        <Events />
      </div>
    </Layout>
  );
}
