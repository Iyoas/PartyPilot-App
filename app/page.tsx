import Layout from './layout';
import HeroSection from './index/components/HeroSection';
import Events from './index/components/Events';
import TopEventSection from './index/components/TopEventSection';
import styles from './index/components/styles/Page.module.css'; 
import BlogSection from './index/components/BlogSection';

export default function HomePage() {
  return (
    <Layout>
      <div className={styles.Container}>
        <HeroSection />
        <TopEventSection />
        <Events />
        <BlogSection />
      </div>
    </Layout>
  );
}
