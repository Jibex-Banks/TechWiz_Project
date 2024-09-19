import styles from './Home.module.css';
import Pic from './img/Modern-Luxury-Interior-Design-by-Elicyon.jpg';
import topWeek from './img/Luxury bed.jpg';

const Home = () => {
  return (
    <div className={styles.Container}>
      {/* Banner section */}
      <section className={styles.banner}>
        <img src={Pic} alt="Modern Luxury Interior Design" className={styles.bannerImage} />
        <div className={styles.bannerText}>
        <div className={styles.textOverlay}>
      <h1 className={styles.bannerTitle}>Bringing Your Dream Interiors to Life</h1>
      <p className={styles.bannerSubtitle}>Explore luxurious designs, expert advice, and more.</p>
      <button className={styles.Button1}>Explore</button>
         </div>
        </div>
      </section>

      {/* Top of the Week Section */}
      <section className={styles.topOfTheWeek}>
        <h2 className={styles.topWeekTitle}>Top of the Week</h2>
        <div className={styles.topWeekContent}>
          <img src={topWeek} alt="Trending Design" className={styles.topWeekImage} />
          <div className={styles.topWeekText}>
            <h3>Trending Design: Modern Living Room</h3>
            <p>Check out this week's most popular living room design featuring contemporary decor, stunning lighting, and elegant furniture choices.</p>
            <button className={styles.Button}>Explore More</button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
