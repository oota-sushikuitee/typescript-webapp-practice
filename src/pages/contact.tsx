import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm"

export default function Contact() {
    return (
    <Layout>
        <section className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
                <p>Get in touch with us.</p>
            <ContactForm />
        </section>
    </Layout>
    );
}
