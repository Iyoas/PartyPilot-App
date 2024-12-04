"use client";

import Layout from '../layout';
import styles from './components//styles/Page.module.css';
import Rules from './components/Rules';
import EventQuestion from './components/EventQuestion';

export default function CreateEvent() {
  return (
    <Layout>
      <div className={styles.Container}>
        <Rules />
        <EventQuestion />
        
      </div>
    </Layout>
  );
}
