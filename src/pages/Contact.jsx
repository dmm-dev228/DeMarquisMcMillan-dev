import ContactCards from "../components/contact/ContactCards";
import ContactHero from "../components/contact/ContactHero";

function Contact() {
    return (
        <main className="relative min-h-screen">
            <ContactHero />
            <ContactCards />
        </main>
    );
}

export default Contact;