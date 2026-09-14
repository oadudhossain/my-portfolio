import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';
import ScrollReveals from '../components/ui/ScrollReveals';
import Study from '../components/sections/Study';

export default function Home() {
  return <><Navbar /><main id="main-content"><Hero /><Projects /><About /><Study /><Contact /></main><Footer /><ScrollReveals /></>;
}
