import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Let's Start a Conversation
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Your name"
            className="h-12"
          />
          <Input
            type="email"
            placeholder="Your email"
            className="h-12"
          />
          <Textarea
            placeholder="Your message"
            className="min-h-[120px] resize-none"
          />
        </div>

        <Button className="w-full h-12">
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default Contact;