import React from "react";
import aboutUsImg from "../assets/images/about.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      className="py-12 sm:py-16 bg-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <div className="flex items-center mb-6 sm:mb-8 w-full">
              {/* Left Arrow */}
              <motion.svg
                width="24"
                height="10"
                viewBox="0 0 32 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 sm:w-8 sm:h-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <path d="M12 6H0" stroke="#CBE9FF" strokeWidth="2" />
                <path d="M6 1L0 6L6 11" stroke="#CBE9FF" strokeWidth="2" />
              </motion.svg>
              {/* Heading */}
              <motion.h2
                className="text-[#192937] font-bold text-xl sm:text-2xl md:text-3xl tracking-wide"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  letterSpacing: "0.05em",
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                ABOUT US
              </motion.h2>
              {/* Right Line */}
              <motion.div
                className="flex-1 ml-2 h-0.5 rounded-full"
                style={{ minWidth: "32px", background: "#CBE9FF" }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              ></motion.div>
            </div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                At Lunaris, we understand that your property is more than just
                an asset — it's an investment that deserves expert care and
                proven results. We transform short-term rental management into a
                seamless, reliable, and scalable system, where owners gain
                confidence, guests enjoy exceptional experiences, and properties
                perform at their highest potential.
              </motion.p>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our commitment is simple: We protect your property, elevate your
                returns, and build partnerships based on trust and transparency.
              </motion.p>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Lunaris provides comprehensive management solutions that take
                the pressure off owners and deliver measurable results. From
                precise pricing strategies and professional upkeep to
                world-class guest communication, our services are designed to be
                effortless for owners, exceptional for guests, and profitable
                for investors.
              </motion.p>
              <motion.div
                className="pt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  to="/about"
                  className="inline-block px-6 py-1.5 rounded-lg border"
                  style={{
                    background: "#CBE9FF",
                    borderColor: "#1A2A49",
                    color: "#1A2A49",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    boxShadow: "0 1px 2px 0 rgba(26,42,73,0.04)",
                    textDecoration: "none",
                  }}
                >
                  Know More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Right Content - Interior Image */}
          <motion.div
            className="flex justify-center items-center mt-8 lg:mt-0"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] w-full max-w-lg bg-white"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(26,42,73,0.12)" }}
            >
              <motion.img
                src={aboutUsImg}
                alt="About Us Interior"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
