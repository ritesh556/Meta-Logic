import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AchievementsSection from "../components/content/achievements";
import { FaGlobe } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const [restartSunAnimation, setRestartSunAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setRestartSunAnimation(true);
        setTimeout(() => setRestartSunAnimation(false), 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-sky-400 to-sky-200 min-h-screen text-gray-900 dark:text-white py-16 px-8 overflow-hidden">
      {/* Sun Animation */}
      {restartSunAnimation || (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-yellow-400 rounded-full shadow-2xl animate-sun-move-fade" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold mb-6 text-blue-900 drop-shadow-md">
            Driving Innovations <br /> And Empowering Business
          </h1>
          <p className="text-lg text-gray-800 drop-shadow-md">
            Metalogic envisions a future where technology serves as a catalyst
            for limitless human potential, fostering innovation and empowering
            organizations to thrive in a transformative digital era.
          </p>
        </motion.section>

        {/* Achievements Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AchievementsSection />
        </motion.div>

        {/* Our Approach */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900 drop-shadow-md">
            OUR APPROACH
          </h2>
          <p className="text-lg mb-6 text-gray-800">Where Vision Meets Execution</p>
          <p className="text-gray-700">
            At Metalogic, we navigate the digital landscape with innovation,
            collaboration, and a dedicated focus on client success...
          </p>
        </motion.section>

        {/* Our Foundation */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900 drop-shadow-md">
            Our Foundation
          </h2>
          <p className="text-lg mb-6 text-gray-800">Bridging Futures Since 2023</p>
          <p className="text-gray-700">
            We strive for excellence in every aspect of our work...
          </p>
        </motion.section>

        {/* Our Mission */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900 drop-shadow-md">
            Our Mission
          </h2>
          <p className="text-gray-700">Dedication to innovation</p>
          <p className="mt-4 text-gray-700">
            We believe every project is an opportunity to create something remarkable...
          </p>
        </motion.section>

        {/* Distributed Team */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900 drop-shadow-md">
            A Distributed Team
          </h2>
          <p className="text-gray-700">
            We connect talent from across the globe...
          </p>
          <div className="mt-6 flex justify-center items-center">
            <FaGlobe className="text-6xl text-blue-900 animate-spin-slow" />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
