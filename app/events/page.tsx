import Layout from '../layout'; 
import FilterSection from './components/FilterSection';
import Events from './components/Events'; 
import TopEventSection from '../index/components/TopEventSection';
import styles from '../index/components/styles/Page.module.css'; 
import BlogSection from '../index/components/BlogSection';
import SocialCard from '../index/components/SocialCard';

export default function EventsPage() { 
  return (
    <Layout>
      <div className={styles.Container}>
        <FilterSection />
        <TopEventSection />
        <Events />  
        <BlogSection />
        <SocialCard />
      </div>
    </Layout>
  );
}
