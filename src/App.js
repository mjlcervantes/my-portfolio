import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Download, Calendar, Award, BookOpen, Code, Wrench, User, Briefcase, GraduationCap, Send, Menu, X } from 'lucide-react';
import './App.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const skills = {
    technical: [
      { name: 'C++', level: 85, icon: '💻' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'HTML/CSS', level: 90, icon: '🌐' },
      { name: 'React.js', level: 75, icon: '⚛️' },
      { name: 'VS Code', level: 95, icon: '🔧' }
    ],
    nonTechnical: [
      { name: 'Motorcycle Mechanics', level: 90, icon: '🏍️' },
      { name: 'Microsoft Office', level: 85, icon: '📊' },
      { name: 'Research Skills', level: 80, icon: '🔍' },
      { name: 'Video Editing (CapCut)', level: 75, icon: '🎬' },
      { name: 'IP & Patent Search', level: 70, icon: '📋' }
    ]
  };

  const experiences = [
    {
      title: 'Boy Scouts of the Philippines (Senior Scout)',
      period: 'August 01, 2014 - March 31, 2015',
      type: 'Volunteer',
      description: 'Developed leadership skills and community service experience through scouting activities.'
    },
    {
      title: 'Computer Engineering Student Society (TIP Manila)',
      period: 'January 22, 2024 - May 17, 2024',
      type: 'Student Organization',
      description: 'Active member contributing to engineering community and professional development.'
    },
    {
      title: 'Brigada Eskuwela (Ramon Avancena Highschool)',
      period: 'June 09, 2025 - June 10, 2025',
      type: 'Community Service',
      description: 'Participated in school maintenance and preparation activities for the academic year.'
    }
  ];

  const seminars = [
    { title: 'Sexuality and Handling Human Relationships', date: 'August 06, 2019', venue: 'TIP Manila' },
    { title: 'Goodbye Feelings', date: 'August 07, 2019', venue: 'TIP Manila' },
    { title: 'Personal Branding', date: 'August 08, 2019', venue: 'TIP Manila' },
    { title: 'Transforming Future: Computer Vision and Generative AI Day 1', date: 'June 19, 2025', venue: 'TIP Manila' },
    { title: 'Transforming Future: Computer Vision and Generative AI Day 2', date: 'June 25, 2025', venue: 'TIP Manila' }
  ];

  const certificates = [
    { name: 'CCNAv7: Introduction to Networks', date: 'Jan 31, 2024', issuer: 'Cisco Networking Academy' },
    { name: 'CCNAv7: Switching, Routing, and Wireless Essentials', date: 'Jan 16, 2024', issuer: 'Cisco Networking Academy' },
    { name: 'Cybersecurity Essentials', date: 'May 08, 2024', issuer: 'Cisco Networking Academy' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{ backgroundColor: "#0f172a" }}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-slate-900/80'}`} style={{ backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              JLC
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-slate-800 text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left hover:bg-slate-700 transition-colors"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#0f172a" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" style={{ background: "linear-gradient(to bottom right, rgba(30, 64, 175, 0.2), rgba(126, 34, 206, 0.2))" }}></div>
        <div className="absolute inset-0" style={{ 
          background: "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1), transparent), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1), transparent)" 
        }}></div>
        
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl font-bold shadow-2xl">
              JC
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Jasper Lemuel Cervantes
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Engineering Student | Network Specialist | Problem Solver
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50" style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          
          <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              "Born. Breathed. Blinked. Next thing I know, I'm in school writing a bio for my portfolio I didn't ask for. 
              Life's basically a countdown timer, so here I am, trying to make my portfolio matter before the clock hits zero."
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student</h3>
                <p className="text-gray-400">Computer Engineering at TIP</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Developer</h3>
                <p className="text-gray-400">C++, Python, Web Technologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Wrench size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-gray-400">Hardware & Software Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">College (Institute)</h3>
                  <p className="text-blue-400 font-medium mb-1">Technological Institute of the Philippines</p>
                  <p className="text-gray-400">Computer Engineering</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">High School (Private)</h3>
                  <p className="text-green-400 font-medium mb-1">St. John the Baptist Academy</p>
                  <p className="text-gray-400">Secondary Education</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">High School (Public)</h3>
                  <p className="text-yellow-400 font-medium mb-1">Lakan Dula High School</p>
                  <p className="text-gray-400">Secondary Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50" style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Technical Skills</h3>
              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Non-Technical Skills */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Other Skills</h3>
              <div className="space-y-6">
                {skills.nonTechnical.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Activities
            </h2>
          </div>
          
          <div className="space-y-8">
            {/* Experiences */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Extra Co-curricular Works</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <div className="flex items-center space-x-2 text-blue-400">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Seminars */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Seminars & Trainings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {seminars.map((seminar, index) => (
                  <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                    <h4 className="text-lg font-semibold text-white mb-3">{seminar.title}</h4>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{seminar.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{seminar.venue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-slate-800/50" style={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certificates & Achievements
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                    <p className="text-yellow-400 font-medium mb-1">{cert.issuer}</p>
                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Additional certificates available upon request</p>
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300">
              <Download size={20} />
              <span>View All Certificates</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate or discuss opportunities? I'd love to hear from you!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-gray-400">Feel free to reach out for any inquiries or opportunities</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 p-4 bg-slate-700 rounded-lg">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:mjlcervantes@tip.edu.ph" className="text-white font-semibold hover:text-blue-400 transition-colors">
                      mjlcervantes@tip.edu.ph
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href="mailto:mjlcervantes@tip.edu.ph"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800" style={{ backgroundColor: "#0f172a", borderTopColor: "#1e293b" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Jasper Lemuel Cervantes
            </div>
            <p className="text-gray-400 mb-6">
              Computer Engineering Student | Clock Enthusiast | Problem Solver
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:mjlcervantes@tip.edu.ph" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-gray-500 text-sm">
              <p>&copy; 2025 Jasper Lemuel Cervantes. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;