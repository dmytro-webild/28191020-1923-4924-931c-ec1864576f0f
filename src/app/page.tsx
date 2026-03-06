"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, CheckCircle, Heart, Shield, Smile, Sparkles, Zap, Users, Calendar, HelpCircle, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLarge"
      background="fluid"
      cardStyle="subtle-shadow"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Appointment", href: "contact" }}
          brandName="SmileCare Dental"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="SmileCare Dental"
          description="Experience premium dental care in a comfortable, modern environment. Expert treatment, pain-free procedures, and your healthiest smile await."
          buttons={[
            { text: "Book Appointment", href: "contact" },
            { text: "Learn More", href: "services" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/full-equiped-medical-cabinet_1303-23912.jpg"
          imageAlt="Modern dental clinic interior with bright, welcoming treatment area"
          frameStyle="card"
          mediaAnimation="opacity"
          className="py-20"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Meet Dr. Sarah Mitchell," },
            { type: "image", src: "http://img.b2bpic.net/free-photo/close-up-portrait-joyful-male-doctor_171337-1489.jpg", alt: "Dr. Sarah Mitchell, DDS" },
            { type: "text", content: "Your Trusted Dental Expert" }
          ]}
          buttons={[
            { text: "Schedule Consultation", href: "contact" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
          className="py-16"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBorderGlow
          title="Our Comprehensive Dental Services"
          description="From routine cleanings to advanced cosmetic procedures, we offer a full range of dental solutions to keep your smile healthy and beautiful."
          tag="Services"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            { icon: Zap, title: "Professional Teeth Cleaning", description: "Deep cleaning and plaque removal for optimal oral health and prevention of dental disease." },
            { icon: Smile, title: "Teeth Whitening", description: "Brighten your smile with our professional whitening treatments for dazzling results." },
            { icon: Shield, title: "Dental Implants", description: "Permanent replacement solutions that look and feel like natural teeth." },
            { icon: Award, title: "Braces & Orthodontics", description: "Achieve the perfect alignment with modern orthodontic treatments and clear aligners." },
            { icon: Heart, title: "Root Canal Treatment", description: "Painless treatment to save infected teeth and relieve discomfort." },
            { icon: Sparkles, title: "Cosmetic Dentistry", description: "Enhance your smile with veneers, bonding, and other aesthetic procedures." }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          className="py-20"
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <MetricCardThree
          title="Why Choose SmileCare Dental?"
          description="We're committed to providing exceptional dental care with a patient-first approach. Here's what sets us apart."
          tag="Benefits"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", icon: Award, title: "Experience", value: "20+ Years" },
            { id: "2", icon: Users, title: "Happy Patients", value: "5,000+" },
            { id: "3", icon: Zap, title: "Pain-Free", value: "100%" },
            { id: "4", icon: Shield, title: "Modern Tech", value: "Advanced" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          className="py-16"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Patient Success Stories"
          description="Hear from our satisfied patients about their transformative dental experiences."
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          testimonials={[
            { id: "1", name: "Jessica Anderson", role: "Business Owner", company: "Anderson & Co.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-therapy_23-2148928886.jpg?_wi=1", imageAlt: "Jessica Anderson smiling" },
            { id: "2", name: "Michael Chen", role: "Software Engineer", company: "Tech Innovations", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-with-bright-smile_23-2148563438.jpg", imageAlt: "Michael Chen confident smile" },
            { id: "3", name: "Emily Rodriguez", role: "Marketing Director", company: "Creative Solutions", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-healthcare-expert-looking-camera_637285-11471.jpg", imageAlt: "Emily Rodriguez professional portrait" },
            { id: "4", name: "David Kim", role: "Financial Advisor", company: "Wealth Management Inc.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-therapy_23-2148928886.jpg?_wi=2", imageAlt: "David Kim smiling portrait" }
          ]}
          kpiItems={[
            { value: "98%", label: "Patient Satisfaction" },
            { value: "500+", label: "Successful Procedures" },
            { value: "20+", label: "Years of Excellence" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          className="py-20"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our dental services, procedures, and appointment process."
          tag="Help"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            { id: "1", title: "How often should I visit the dentist?", content: "We recommend dental checkups every six months for preventive care. However, patients with specific conditions may need more frequent visits. During your first consultation, we'll create a personalized care plan based on your oral health needs." },
            { id: "2", title: "Are your treatments pain-free?", content: "Yes! We use advanced anesthetic techniques and the latest technology to ensure comfortable, pain-free treatments. Our team is trained in gentle dentistry practices, and we take time to address any anxiety you may have about dental procedures." },
            { id: "3", title: "Do you accept dental insurance?", content: "We accept most major dental insurance plans. Our billing team will verify your coverage and help you understand your benefits. We also offer flexible payment plans for uninsured patients to make quality dental care accessible to everyone." },
            { id: "4", title: "How long does a typical teeth whitening procedure take?", content: "Our professional whitening treatment typically takes 60-90 minutes. You'll see dramatic results in a single visit, with teeth becoming noticeably brighter and whiter. Results typically last 6-12 months with proper maintenance." },
            { id: "5", title: "What is the recovery time for dental implants?", content: "Initial healing takes about 2-3 weeks. However, complete osseointegration (bone integration) typically takes 3-6 months. We'll provide detailed aftercare instructions to ensure successful healing and long-term implant success." },
            { id: "6", title: "Can children visit your clinic?", content: "Absolutely! We love working with children and have a dedicated pediatric dentistry section. We create a fun, welcoming environment to help children develop positive attitudes toward dental care from an early age." }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
          showCard={true}
          className="py-16"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready for Your Perfect Smile?"
          ctaDescription="Book an appointment today and let us help you achieve your dental goals. Our friendly team is ready to welcome you."
          ctaButton={{ text: "Schedule Your Visit", href: "#" }}
          ctaIcon={Calendar}
          useInvertedBackground={false}
          animationType="slide-up"
          accordionAnimationType="smooth"
          faqs={[
            { id: "1", title: "What should I expect during my first visit?", content: "Your first visit includes a comprehensive dental examination, digital X-rays, and a consultation with Dr. Mitchell. We'll review your medical history, discuss your dental goals, and create a personalized treatment plan tailored to your needs." },
            { id: "2", title: "What are your office hours?", content: "Monday-Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed\n\nEmergency appointments available. Call us for after-hours emergencies." },
            { id: "3", title: "Do you offer emergency dental services?", content: "Yes, we prioritize emergency cases. Call our office immediately if you experience severe tooth pain, broken teeth, or other dental emergencies. We maintain emergency appointment slots for urgent care." },
            { id: "4", title: "How can I prepare for my appointment?", content: "Please arrive 10-15 minutes early to complete any necessary paperwork. Bring your insurance card and photo ID. Brush and floss before your visit, and avoid eating or drinking colored beverages 1-2 hours prior to appointments." }
          ]}
          showCard={true}
          className="py-16"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#hero" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Contact Info",              items: [
                { label: "📍 123 Smile Street, Dental City, DC 20001", href: "#" },
                { label: "📞 (555) 123-4567", href: "tel:+15551234567" },
                { label: "📧 hello@smiledental.com", href: "mailto:hello@smiledental.com" },
                { label: "Hours: Mon-Fri 8AM-6PM, Sat 9AM-2PM", href: "#" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "LinkedIn", href: "https://linkedin.com" }
              ]
            }
          ]}
          copyrightText="© 2025 SmileCare Dental. All rights reserved. Your smile is our priority."
        />
      </div>
    </ThemeProvider>
  );
}
