'use client';

import React from 'react';
import Link from 'next/link'; 
import styles from './styles/BlogSection.module.css';
import mockData from '@/app/blog';  
import { CgEreader } from "react-icons/cg";
import { MdArrowOutward } from "react-icons/md";

const BlogSection: React.FC = () => {
  return (
    <div className={styles.blogSection}>
      <h2>Blog</h2>
      <div className={styles.blogCardsContainer}>
        {mockData.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <img src={blog.foto} alt={blog.titel} className={styles.blogImage} />
            <h3 className={styles.blogTitle}>{blog.titel}</h3>
            <p className={styles.blogIntro}>{blog.intro}</p>
            <div className={styles.readMoreContainer}>
              <button className={styles.readMoreButton}>Lees meer</button>
              <div className={styles.arrowCircle}>
                <MdArrowOutward className={styles.arrowIcon} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Link href="https://www.youtube.com">
      <button className={styles.BlogButton}>Blog overzicht <CgEreader/> </button>
    </Link>
    </div>
  );
};

export default BlogSection;
