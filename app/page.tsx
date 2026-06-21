"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { MdEmail, MdMenu, MdClose } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "90%" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "90%" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "90%" },
    { name: "PHP", icon: <FaPhp className="text-purple-500" />, level: "80%" },
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: "90%" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: "85%" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "80%" },
    { name: "Java", icon: <FaJava className="text-red-500" />, level: "88%" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: "75%" },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: "85%" },
  ];

  const projects = [
{
  title: "Employee Payroll Management System",
  desc: "A full-stack HR Payroll Management System that automates employee salary processing, attendance tracking, and payslip generation. It includes role-based employee management, automated payroll calculation (Net Pay & Gross Pay with EPF/ETF deductions), and a secure REST API built with Node.js and Express. The frontend is developed using React/Next.js with a modern responsive UI.",
  image: "/EMS.png",
 github: "https://github.com/Sha-jpg-star/EMS-FrontEnd"
},
 {
 title: "AI Resume Screening & ATS Scoring System",
desc: "An AI-powered system that analyzes resumes and provides ATS scoring based on job relevance. It extracts key skills and information from resumes to help automate and improve the recruitment process. Built to simulate real-world HR screening workflows and enhance hiring efficiency.",
  image: "/ResumeATSScore.png",
  github: "https://github.com/Sha-jpg-star/AI-resume-screening-ATS-scoring",
},
    {
  title: "Travel & Tour Website",
  desc: "A responsive Travel Booking Website that allows users to explore and book travel services through an interactive web interface. Built using HTML, CSS, JavaScript, PHP, and MySQL with a focus on dynamic functionality and user-friendly design.",
  image: "/Traveler.png",
  github: "https://github.com/Sha-jpg-star/Travel-and-Tour-Web",
},
{
  title: "Hospital Management System",
  desc: "A full-stack Hospital Management System developed as a group project using React, Node.js, Express, and MongoDB. The system manages patient records, appointments, and hospital operations with a clean and responsive UI.",
  image: "/hms.png",
  github: "https://github.com/Sha-jpg-star/MERN-Group-Project",
},
{
  title: "Airline Reservation System",
  desc: "A desktop-based Airline Reservation System built using Java Swing, Java OOP concepts, and MySQL. The system handles flight bookings, passenger management, and reservation data through a structured interface.",
  image: "/Airline.png",
  github: "https://github.com/Sha-jpg-star/Airline-Reservation-System",
},
{
  title: "Library Management System",
  desc: "A Java Swing-based Library Management System designed to manage books, members, and issue/return processes. Integrated with MySQL for efficient data storage and retrieval.",
  image: "/lib.png",
  github: "https://github.com/Sha-jpg-star/Library-Management-System",
}
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Shalini Fernando Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="font-[Poppins] bg-gradient-to-br from-purple-200 via-pink-100 to-purple-300 dark:from-gray-950 dark:via-gray-900 dark:to-black min-h-screen text-gray-900 dark:text-white transition-all duration-500">
        
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-black/20 border-b border-white/20 px-4 sm:px-8 md:px-16 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-extrabold text-purple-700 dark:text-purple-400">
            I.A.S.H.Fernando
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 font-semibold">
            {navLinks.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`hover:text-purple-600 transition capitalize ${
                    activeSection === section ? "text-purple-600" : ""
                  }`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-5">
            <BsFillMoonStarsFill
              className="cursor-pointer text-lg sm:text-xl hover:rotate-180 transition duration-500"
              onClick={() => setDarkMode(!darkMode)}
            />
            <a
              href="/I.A.S.H.Fernando CV.pdf"
              className="hidden sm:inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition text-sm sm:text-base font-semibold"
            >
              Resume
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-2xl focus:outline-none" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-[65px] left-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg z-40 border-b border-white/20 shadow-lg flex flex-col p-6 space-y-4 font-semibold text-center"
            >
              {navLinks.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={`capitalize text-lg ${activeSection === section ? "text-purple-600" : ""}`}
                >
                  {section}
                </a>
              ))}
              <a
                href="/I.A.S.H.Fernando.pdf"
                className="bg-purple-600 text-white px-5 py-2 rounded-full transition text-sm mx-auto w-1/2"
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-10 md:px-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-6xl mx-auto">
            
            {/* Left Content (Text) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left order-2 md:order-1"
            >
              <p className="text-purple-700 dark:text-purple-400 text-base sm:text-lg mb-2 font-medium">
                Hey, I'm Shalini 
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                FullStack <span className="text-purple-600">Developer</span>
              </h1>

              <div className="mt-3 text-xl sm:text-2xl font-semibold text-purple-700 dark:text-purple-400 h-[40px]">
                <TypeAnimation
                  sequence={[
                    "Frontend Developer", 2000,
                    "Backend Developer", 2000,
                    "UI/UX Designer", 2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                I’m a 2nd-year IT undergraduate from Sri Lanka Institute of Advanced Technological Education (SLIATE). Passionate about building modern fullstack applications with beautiful user interfaces.
              </p>

              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition hover:scale-105 text-sm sm:text-base font-medium"
                >
                  View Projects
                </a>
                <a
                  href="/I.A.S.H.Fernando CV.pdf"
                  className="border-2 border-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition text-sm sm:text-base font-medium"
                >
                  Download CV
                </a>
              </div>

              <div className="flex gap-6 mt-8 text-2xl sm:text-3xl justify-center md:justify-start">
                <a href="https://github.com/Sha-jpg-star" target="_blank" rel="noreferrer">
                  <FaGithub className="hover:text-purple-600 hover:scale-110 transition" />
                </a>
                <a href="https://linkedin.com/in/shalini-fernando-8731703a6" target="_blank" rel="noreferrer">
                  <FaLinkedin className="hover:text-purple-600 hover:scale-110 transition" />
                </a>
                <a href="mailto:shalinihimanjana99@gmail.com">
                  <MdEmail className="hover:text-purple-600 hover:scale-110 transition" />
                </a>
              </div>
            </motion.div>

            {/* Right Content (Image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>
                <img
                  src="/profilepic.jpeg"
                  alt="Profile"
                  className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover rounded-full border-[6px] sm:border-[10px] border-white dark:border-gray-800 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 px-4 sm:px-10 md:px-20 min-h-screen flex flex-col justify-center max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-purple-700 dark:text-purple-400">
              About Me
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Education</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Higher National Diploma in IT at ATI Dehiwala. Currently focusing on fullstack development, databases, AI and cloud technologies.
                </p>
              </div>

              <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Career Goal</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Aspiring software engineer passionate about creating scalable applications and modern UI experiences.
                </p>
              </div>

              <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-xl border border-white/10 sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Interests</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Fullstack development, DevOps, UI/UX, AI, databases, API development and cloud systems.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 px-4 sm:px-10 md:px-20 min-h-screen flex flex-col justify-center max-w-6xl mx-auto w-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-purple-700 dark:text-purple-400">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-5 sm:p-6 rounded-2xl shadow-lg border border-white/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3 text-xl">
                    {skill.icon}
                    <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold">{skill.level}</span>
                </div>

                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-purple-600 h-3 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 px-4 sm:px-10 md:px-20 min-h-screen flex flex-col justify-center max-w-6xl mx-auto w-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-purple-700 dark:text-purple-400">
            Projects
          </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative rounded-3xl overflow-hidden border border-white/10 
                 bg-gradient-to-br from-white/40 to-white/10 
                 dark:from-gray-900/60 dark:to-gray-800/40
                 backdrop-blur-xl shadow-2xl flex flex-col"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-52 object-cover 
                     group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow leading-relaxed">
          {project.desc}
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full 
                       px-5 py-2.5 rounded-full text-sm font-medium
                       bg-gradient-to-r from-purple-600 to-blue-600
                       text-white shadow-lg hover:shadow-purple-500/30
                       hover:scale-105 transition"
          >
            View on GitHub →
          </a>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                      bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none"></div>
    </motion.div>
  ))}
</div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 px-4 sm:px-10 md:px-20 min-h-screen flex flex-col justify-center max-w-5xl mx-auto w-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-purple-700 dark:text-purple-400">
            Contact 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-xl space-y-5 border border-white/10">
              <div>
                <h3 className="text-xl font-bold mb-1">Contact Me</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Available for internships or project work.</p>
              </div>

              <div className="space-y-3 text-sm sm:text-base">
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-400">Email</p>
                  <p className="text-gray-600 dark:text-gray-300 break-all">shalinihimanjana99@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-400">GitHub</p>
                  <p className="text-gray-600 dark:text-gray-300">github.com/Sha-jpg-star</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-400">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-300 break-all">linkedin.com/in/shalini-fernando-8731703a6</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-700 dark:text-purple-400">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Ja-ela, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 flex flex-col justify-between">
              <div className="bg-purple-100/70 dark:bg-purple-900/20 p-5 sm:p-6 rounded-2xl shadow border border-purple-500/10">
                <h4 className="font-bold text-lg mb-1">Available For</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Internships, freelance projects, and collaboration opportunities.
                </p>
              </div>

              <div className="bg-purple-100/70 dark:bg-purple-900/20 p-5 sm:p-6 rounded-2xl shadow border border-purple-500/10">
                <h4 className="font-bold text-lg mb-1">Goals</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Becoming a full-stack developer and improving DevOps and AI skills.
                </p>
              </div>

              <div className="bg-purple-600 text-white p-5 sm:p-6 rounded-2xl shadow text-center font-bold text-base sm:text-lg">
                Let's build something amazing!
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/20 py-8 text-center px-4">
          <h3 className="text-xl sm:text-2xl font-bold">I.A.S.H. Fernando</h3>
          <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-400">FullStack Developer | IT Undergraduate</p>
          <div className="flex justify-center gap-6 mt-4 text-2xl sm:text-3xl">
            <a href="https://github.com/Sha-jpg-star"><FaGithub className="hover:text-purple-600 transition" /></a>
            <a href="https://linkedin.com/in/shalini-fernando-8731703a6"><FaLinkedin className="hover:text-purple-600 transition" /></a>
            <a href="mailto:shalinihimanjana99@gmail.com"><MdEmail className="hover:text-purple-600 transition" /></a>
          </div>
          <p className="mt-5 text-xs text-gray-500">© 2026 All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}