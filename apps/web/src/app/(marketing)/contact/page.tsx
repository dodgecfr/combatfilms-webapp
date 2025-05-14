import { contactInfo } from "../_data/contact";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      {/* Contact Information */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p className="text-muted-foreground">
            {contactInfo.address.street}<br />
            {contactInfo.address.suite}<br />
            {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
          </p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Phone</h2>
          <p className="text-muted-foreground">
            Office: {contactInfo.phone.office}<br />
            Fax: {contactInfo.phone.fax}
          </p>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="text-muted-foreground">
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
          </p>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="border rounded-lg p-6 bg-card">
        <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
        <ContactForm />
      </div>
    </div>
  );
}