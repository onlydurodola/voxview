import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Bot, 
  ArrowRight, 
  ChevronDown,
  Users,
  MessageSquare,
  TrendingUp,
  Target,
  Clock,
  Zap,
  Sun,
  Moon
} from 'lucide-react';

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

type FAQCategory = {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, handleSubmit] = useForm("xgegklep");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const companies = [
    "Delve", "TechiesMatch", "BackendIm", "ReconXI", "Telex", "Telin", "GenZ ad"
  ];

  const benefits = [
    {
      title: "Personalized Learning Experience",
      description: "Our AI adapts to your skill level and industry, providing tailored interview scenarios and feedback.",
      icon: Target
    },
    {
      title: "24/7 Availability",
      description: "Practice whenever suits you best, with unlimited access to interview simulations and feedback.",
      icon: Clock
    },
    {
      title: "Instant, Actionable Feedback",
      description: "Get detailed insights on your performance immediately after each practice session.",
      icon: Zap
    }
  ];

  const howItWorks = [
    {
      title: "Create Your Profile",
      description: "Set up your profile with your industry, experience level, and target roles.",
      icon: Users
    },
    {
      title: "Practice with AI",
      description: "Engage in realistic interview simulations with our advanced AI avatar.",
      icon: MessageSquare
    },
    {
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics and performance metrics.",
      icon: TrendingUp
    }
  ];

  const faqs: FAQCategory[] = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is Voxview?",
          answer: "Voxview is an AI-driven interview preparation platform that simulates realistic human interviews using advanced avatars. It provides real-time feedback on your responses, helping you improve your interview skills and boost your confidence."
        },
        {
          question: "How does Voxview work?",
          answer: "Voxview uses artificial intelligence to create lifelike interview scenarios. Users engage with a realistic avatar that asks industry-specific questions. The platform analyzes your verbal and non-verbal responses, offering instant feedback to enhance your performance."
        },
        {
          question: "Who can benefit from using Voxview?",
          answer: "Job seekers at all levels, from recent graduates to seasoned professionals, can benefit from Voxview. It's also useful for individuals preparing for public speaking engagements or anyone looking to improve their communication skills."
        }
      ]
    },
    {
      title: "Features and Functionality",
      questions: [
        {
          question: "What types of interviews can I practice with Voxview?",
          answer: "Voxview offers practice sessions for various interview types, including behavioral, technical, and case interviews. You can select the interview style that aligns with your preparation needs."
        },
        {
          question: "Does Voxview provide feedback on my performance?",
          answer: "Yes, after each session, Voxview provides detailed feedback on aspects such as speech clarity, content relevance, body language, and eye contact. This helps you identify strengths and areas for improvement."
        },
        {
          question: "Can I customize the interview questions?",
          answer: "Absolutely. Voxview allows you to input specific job descriptions or select particular competencies you wish to focus on, tailoring the interview questions to your requirements."
        }
      ]
    },
    {
      title: "Technical Requirements",
      questions: [
        {
          question: "Do I need any special equipment to use Voxview?",
          answer: "You'll need a device with a camera and microphone, such as a laptop, tablet, or smartphone, to fully engage with the platform and receive comprehensive feedback."
        },
        {
          question: "Is an internet connection required?",
          answer: "Yes, a stable internet connection is necessary to interact with the AI avatar and access real-time feedback features."
        },
        {
          question: "Is Voxview compatible with all operating systems?",
          answer: "Voxview is a web-based platform accessible through most modern web browsers, making it compatible with various operating systems, including Windows, macOS, iOS, and Android."
        }
      ]
    }
  ];

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'} backdrop-blur-sm z-50 border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className={`ml-2 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Voxview</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Features</a>
              <a href="#how-it-works" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>How It Works</a>
              <a href="#early-access" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Early Access</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="h-5 w-5 text-gray-300" /> : <Moon className="h-5 w-5 text-gray-600" />}
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-lg"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`pt-32 pb-20 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900' : 'bg-gradient-to-b from-blue-50 via-white to-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Master Your Interview with AI Precision
            </h1>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Experience next-level interview preparation with our hyper-realistic AI avatar coach. 
              Get real-time feedback and analytics to ensure you're ready for your next big opportunity.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg flex items-center mx-auto group"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className={`mt-12 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <p className="mb-4">Trusted by professionals from leading companies</p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                {companies.map((company) => (
                  <span key={company} className="font-semibold">{company}</span>
                ))}
              </div>
            </div>
          </motion.div>
          <FadeInWhenVisible>
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl" />
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"
                alt="AI Interview Simulation"
                className="rounded-xl shadow-2xl mx-auto relative z-10"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Voxview?
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className={`p-8 rounded-xl transition ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl shadow-lg'}`}>
                  <benefit.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              How Voxview Works
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {howItWorks.map((step, index) => (
                <div key={index} className={`p-8 rounded-xl transition ${isDarkMode ? 'bg-gray-700' : 'bg-white shadow-lg hover:shadow-xl'}`}>
                  <step.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  {category.questions.map((faq, faqIndex) => {
                    const questionId = `${categoryIndex}-${faqIndex}`;
                    return (
                      <div 
                        key={faqIndex} 
                        className={`rounded-lg transition-all ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center"
                          onClick={() => toggleQuestion(questionId)}
                        >
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {faq.question}
                          </span>
                          <ChevronDown 
                            className={`h-5 w-5 transform transition-transform ${
                              expandedQuestions[questionId] ? 'rotate-180' : ''
                            } ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                          />
                        </button>
                        {expandedQuestions[questionId] && (
                          <div className={`px-6 pb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Be Among the First to Experience Voxview
              </h2>
              <p className={`mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Join our exclusive waitlist to get early access and special launch pricing. 
                Limited spots available.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg w-full"
                >
                  {state.submitting ? 'Submitting...' : 'Join the Waitlist'}
                </button>
              </form>
              {state.succeeded && (
                <p className="mt-4 text-green-600">Thanks for joining! We'll be in touch soon.</p>
              )}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-900 border-gray-700'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Bot className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">Voxview</span>
              </div>
              <p className="text-gray-400">Empowering job seekers with AI-powered interview preparation.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#early-access" className="text-gray-400 hover:text-white">Early Access</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Voxview. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-xl p-8 max-w-md w-full relative ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className={`absolute top-4 right-4 ${
                isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ✕
            </button>
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Join the Waitlist
            </h3>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Be among the first to experience Voxview and get exclusive early access benefits.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  id="email-modal"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition"
              >
                {state.submitting ? 'Submitting...' : 'Join Now'}
              </button>
            </form>
            {state.succeeded && (
              <p className="mt-4 text-green-600">Thanks for joining! We'll be in touch soon.</p>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;