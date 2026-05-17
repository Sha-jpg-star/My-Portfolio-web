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
import { MdEmail } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
      title: "Travel & Tour Website",
      desc: "Travel booking platform with responsive UI and Use to develop HTML,CSS,Javascript,PHP and MySQL.",
      image: "/Traveler.png",
      github:"https://github.com/Sha-jpg-star/Travel-and-Tour-Web",
    },
    {
      title: "Hospital Management System",
      desc: "This is our 2nd sem group project. Fullstack hospital management application using React, Node.js express and MongoDB.",
      image: "/hms.png",
      github:"https://github.com/Sha-jpg-star/MERN-Group-Project",
    },
    {
      title: "Airline-Reservation-System",
      desc: "Use to build Java( Java OOP concept ),SQL DB,Java Swing",
      image: "/Airline.png",
      github:"https://github.com/Sha-jpg-star/Airline-Reservation-System",
    },
    {
      title: "Library-Management-System",
      desc: "A desktop application built with Java Swing to manage library books, members, and book issuing/returning. It uses a MySQL database to store records. The system allows adding, updating, deleting, and viewing data through a user-friendly interface ",
      image: "/lib.png",
      github:"https://github.com/Sha-jpg-star/Library-Management-System",
    },
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
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-black/20 border-b border-white/20 px-6 md:px-16 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-purple-700 dark:text-purple-400">
            I.A.S.H.Fernando
          </h1>

          <ul className="hidden md:flex gap-8 font-semibold">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
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

          <div className="flex items-center gap-5">
            <BsFillMoonStarsFill
              className="cursor-pointer text-xl hover:rotate-180 transition duration-500"
              onClick={() => setDarkMode(!darkMode)}
            />
            <a
              href="/resume.pdf"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-purple-700 dark:text-purple-400 text-lg mb-4">
                Hey, I'm Shalini 
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                FullStack <span className="text-purple-600">Developer</span>
              </h1>

              <div className="mt-5 text-2xl font-semibold text-purple-700 dark:text-purple-400">
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    2000,
                    "Backend Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
                I’m a 2nd-year IT undergraduate from Sri Lanka Institute of Advanced Technological Education (SLIATE). Passionate about building modern fullstack applications with beautiful user interfaces.
              </p>

              <div className="flex gap-5 mt-8">
                <a
                  href="#projects"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-full transition hover:scale-105"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  className="border-2 border-purple-600 px-7 py-3 rounded-full hover:bg-purple-600 hover:text-white transition"
                >
                  Download CV
                </a>
              </div>

              <div className="flex gap-6 mt-10 text-3xl">
                <a href="https://github.com/Sha-jpg-star" target="_blank" rel="noreferrer">
                  <FaGithub className="hover:text-purple-600 hover:scale-125 transition" />
                </a>
                <a href="https://linkedin.com/in/shalini-fernando-8731703a6" target="_blank" rel="noreferrer">
                  <FaLinkedin className="hover:text-purple-600 hover:scale-125 transition" />
                </a>
                <a href="mailto:shalinihimanjana99@gmail.com">
                  <MdEmail className="hover:text-purple-600 hover:scale-125 transition" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>
                <img
                  src="/profilepic.jpeg"
                  alt="Profile"
                  className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-[10px] border-white dark:border-gray-800 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 md:px-20 min-h-screen flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-16 text-purple-700 dark:text-purple-400">
              About Me
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <p>
                  Higher National Diploma in IT at ATI Dehiwala. Currently focusing on fullstack development, databases, AI and cloud technologies.
                </p>
              </div>

              <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Career Goal</h3>
                <p>
                  Aspiring software engineer passionate about creating scalable applications and modern UI experiences.
                </p>
              </div>

              <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Interests</h3>
                <p>
                  Fullstack development, DevOps, UI/UX, AI, databases, API development and cloud systems.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 md:px-20 min-h-screen flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-center mb-16 text-purple-700 dark:text-purple-400">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-7 rounded-3xl shadow-xl"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3 text-2xl">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                  <span>{skill.level}</span>
                </div>

                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-purple-600 h-4 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 md:px-20 min-h-screen flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-center mb-16 text-purple-700 dark:text-purple-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{project.desc}</p>
                  <div className="flex gap-4 mt-6">
                    
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="border border-purple-600 px-5 py-2 rounded-full hover:bg-purple-600 hover:text-white transition inline-block text-center"
  >
    GitHub
  </a>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 md:px-20 min-h-screen flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-center mb-16 text-purple-700 dark:text-purple-400">
            Contact 
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 w-full">
            <div className="bg-white/40 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
                <p className="text-gray-600 dark:text-gray-300">Internships or project work.</p>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">shalinihimanjana99@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-gray-600 dark:text-gray-300">github.com/Sha-jpg-star</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/shalini-fernando-8731703a6</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Ja-ela, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-2xl shadow">
                <h4 className="font-bold text-lg mb-2">Available For</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Internships, freelance projects, and collaboration opportunities
                </p>
              </div>

              <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-2xl shadow">
                <h4 className="font-bold text-lg mb-2">Goals</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Becoming a full-stack developer and improving DevOps and AI skills
                </p>
              </div>

              <div className="bg-purple-600 text-white p-6 rounded-2xl shadow text-center">
                <p className="font-semibold">Let's build something amazing </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/20 py-10 text-center">
          <h3 className="text-2xl font-bold">I.A.S.H. Fernando</h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">FullStack Developer | IT Undergraduate</p>
          <div className="flex justify-center gap-6 mt-6 text-3xl">
            <a href="https://github.com/Sha-jpg-star"><FaGithub className="hover:text-purple-600 transition" /></a>
            <a href="https://linkedin.com/in/shalini-fernando-8731703a6"><FaLinkedin className="hover:text-purple-600 transition" /></a>
            <a href="mailto:shalinihimanjana99@gmail.com"><MdEmail className="hover:text-purple-600 transition" /></a>
          </div>
          <p className="mt-6 text-sm">© 2026 All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}