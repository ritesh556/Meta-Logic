import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Careers: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-50 min-h-screen text-gray-900 dark:text-white py-16 px-8">
      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
          Navigate Your Next <br /> Career Move
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We're continuously searching for the right talent. Check if you're a
          good match!
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-700 transition">
          Explore Opportunities
        </button>
      </motion.section>

      {/* Values Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10 drop-shadow-md">
          MetaLogic Values
        </h2>
        <p className="text-center text-lg text-gray-700 mb-10">
          We believe in creating an environment where individuals can thrive and
          make a meaningful impact.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Continuous Learning",
              description:
                "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set.",
            },
            {
              title: "Team Work",
              description:
                "We believe that the best solutions come from diverse perspectives and collaborative efforts.",
            },
            {
              title: "Innovation",
              description:
                "Whether it's the quality of our work or the impact we make, we consistently strive for excellence.",
            },
            {
              title: "Mentorship",
              description:
                "We embrace change, learn from challenges, and seek opportunities for improvement.",
            },
            {
              title: "Tangible Impact",
              description:
                "We're committed to delivering solutions that exceed expectations.",
            },
            {
              title: "Adaptability",
              description:
                "Thrive in a fast-paced world with resilience and flexibility.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Life At MetaLogic Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10 drop-shadow-md">
          Life At MetaLogic
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Flexibility at Work",
            "Take Ownership",
            "Unlimited Growth",
            "Make Yourself Heard",
            "Team Spirit",
            "Inclusivity at Work",
            "Transparent Environment",
            "Fuel Your Passion",
          ].map((title, index) => {
            const description = {
              "Flexibility at Work":
                "Do your best work at a time and place that fits your balance.",
              "Take Ownership":
                "Solve challenges by acting as your own boss.",
              "Unlimited Growth":
                "Everyone has equal opportunity to grow and thrive.",
              "Make Yourself Heard":
                "We encourage diverse perspectives to meet shared goals.",
              "Team Spirit":
                "Work as one to achieve results and collaborate deeply.",
              "Inclusivity at Work":
                "Equal opportunity for everyone to learn and lead.",
              "Transparent Environment":
                "Open communication builds confidence and trust.",
              "Fuel Your Passion":
                "Push limits and achieve your dreams with us.",
            }[title];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-700">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10 drop-shadow-md">
          MetaLogic Cares For You
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Our employee benefits are built around enhancing your well-being —
          at work and at home.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Performance Bonus",
            "Health Benefits",
            "Paid Leave Policy",
            "Learning And Development",
            "Food Credit",
            "Team Activities",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-blue-900">{benefit}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Careers;
