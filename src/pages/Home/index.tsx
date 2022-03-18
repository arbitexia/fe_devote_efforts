import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import About from './About';
import Clients from './Clients';
import Hero from './Hero';
import OurClients from './OurClients';
import OurProject from './OurProjects';
import Services from './Services';
import SuccessfulStory from './SuccessfulStory';
import Technologies from './Technologies';

function HomeContainer() {
  gsap.registerPlugin(ScrollTrigger);
  const timeline = gsap.timeline({});

  return (
    <main>
      <Hero timeline={timeline} />
      <Clients />
      <Services />
      <OurProject />
      <Technologies />
      <About />
      <OurClients />
      <SuccessfulStory />
    </main>
  );
}

export default HomeContainer;
