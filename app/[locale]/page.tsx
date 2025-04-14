import { redirect } from 'next/navigation';
import Layout from './layout';
import HeroSection from './index/components/HeroSection';
import Events from './index/components/Events';
import TopEventSection from '@/src/components/TopEventSection';
import styles from './index/components/styles/Page.module.css'; 
import BlogSection from '@/src/components/BlogSection';
import SocialCard from '@/src/components/SocialCard';

type PageProps = {
  params: {
    locale: string;
  };
};

export default function HomePage({ params }: PageProps) {
  const { locale } = params; // Haal de locale uit de URL

  if (locale === 'default') {
    redirect('/nl');
    return null;
  }

  return (
    <Layout>
      <div className={styles.Container}>
        <HeroSection />
        <TopEventSection locale={locale} /> 
        <Events locale={locale} />
        <BlogSection />
        <SocialCard />
      </div>
    </Layout>
  );
}
