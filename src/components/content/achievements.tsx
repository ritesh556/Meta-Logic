import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
  duration: number; // duration in seconds
  trigger: boolean; // trigger the animation
}

const Counter: React.FC<CounterProps> = ({ from, to, duration, trigger }) => {
  const [value, setValue] = useState<number>(from);

  useEffect(() => {
    if (!trigger) return;

    const interval = 10; // Update every 10ms
    const totalSteps = (duration * 1000) / interval; // Total steps based on duration
    const increment = (to - from) / totalSteps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setValue((prev) => Math.min(to, prev + increment));
      if (currentStep >= totalSteps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [from, to, duration, trigger]);

  return <span>{Math.floor(value)}</span>;
};

const AchievementsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("stats");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="py-24 px-8 bg-white/30 backdrop-blur-lg text-gray-800 text-center relative overflow-hidden"
      id="stats"
    >
      <motion.h2
        className="text-4xl font-semibold mb-12"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        Our Achievements
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
      >
        {[
          { value: 2000, label: "Kilometers of Code Written" },
          { value: 5000, label: "Liters of Coffee Drank" },
          { value: 100, label: "Projects Completed" },
        ].map((achievement, index) => (
          <motion.div
            key={index}
            className="stat-item"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-5xl font-extrabold">
              <Counter
                from={0}
                to={achievement.value}
                duration={3}
                trigger={isVisible}
              />
            </p>
            <p className="text-lg mt-4">{achievement.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AchievementsSection;