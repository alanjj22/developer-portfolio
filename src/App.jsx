import { motion } from 'framer-motion';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

// UI Components
import SkipLink from './components/ui/SkipLink';
import CustomCursor from './components/ui/CustomCursor';

// Hooks
import { useScrollProgress } from './hooks/useScrollProgress';

function App() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Skip Link for Accessibility */}
        <SkipLink />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main id="main-content" className="relative" tabIndex="-1">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Projects Section */}
          {/* <Projects /> */}

          {/* Services Section */}
          {/* <Services /> */}

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 origin-left"
          style={{ scaleX: scrollProgress }}
        />

        {/* Custom Cursor */}
        <CustomCursor />
      </motion.div>
    </div>
  );
}

export default App;
