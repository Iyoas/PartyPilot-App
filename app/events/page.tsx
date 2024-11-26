import Layout from '../layout'; 
import HeroSection from './components/HeroSection'; 
import Events from './components/Events'; 
import TopEventSection from '../index/components/TopEventSection';
import styles from '../index/components/styles/Page.module.css'; 
import BlogSection from '../index/components/BlogSection';
import SocialCard from '../index/components/SocialCard';

export default function EventsPage() { 
  return (
    <Layout>
      <div className={styles.Container}>
        <HeroSection />
        <TopEventSection />
        <Events />  
        <BlogSection />
        <SocialCard />
      </div>
    </Layout>
  );
}
