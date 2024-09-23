// Contact Page
import React from 'react';
import Navbar from '../../component/Bars/Navbar';
import { Footer } from '../../component/Bars/Footer';
import ContactForm from '../../component/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar title="hotels" />
      <ContactForm />
      <Footer />
    </>
  );
}
