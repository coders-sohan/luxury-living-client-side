import React from "react";
import FAQs from "../../components/FAQs/FAQs";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import "./Home.css";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import Testimonial from "./Testimonial";

const Home = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ProjectsSection />
			<ServicesSection />
			<Testimonial />
			<FAQs />
			<ContactSection />
			<Footer />
		</>
	);
};

export default Home;
