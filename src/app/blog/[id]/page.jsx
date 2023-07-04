import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Hello Bangladesh</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            quasi illum omnis quia fugit repellat!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Hello World</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit nemo obcaecati rerum sapiente consequatur reiciendis
          corrupti, illo accusantium, tempora alias delectus fugiat quaerat
          deserunt molestiae soluta necessitatibus ipsa vero similique? Repellat
          quod quae commodi tenetur natus sapiente, illum, incidunt assumenda
          ipsam consequatur recusandae ex earum! Dignissimos dolorem harum
          nihil? Consequatur?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
