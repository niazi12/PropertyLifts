import Image from "next/image";
import { Linkedin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const teamMembers = [
  {
    name: "Shuruzzaman Siddique",
    role: "Technical Engineer",
    imageSrc: "/images/shuruzzaman.jpeg",
    linkedIn: "",
    bio: "18+ years of experience in lift system design, installation and maintenance, ensuring safety and efficiency.",
  },
  {
    name: "Niazi Mahrab",
    role: "Software Programmer",
    imageSrc: "/images/niazi.jpg",
    linkedIn: "https://www.linkedin.com/in/niazi-mahrab-b16a96203/",
    bio: "IT specialist focused on ERP development and customer-focused systems.",
  },
];

const TeamMember = ({ name, role, imageSrc, linkedIn, bio }) => {
  return (
    <div className="flex flex-col items-center rounded-xl border bg-white p-8 text-center shadow-sm">
      <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-amber-100">
        <Image src={imageSrc} alt={name} fill className="object-cover" sizes="144px" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-amber-600">{role}</p>
      <p className="mt-4 leading-relaxed text-slate-600">{bio}</p>
      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-amber-600"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          Connect on LinkedIn
        </a>
      )}
    </div>
  );
};

const TeamMembers = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our people"
          title="Meet the team"
          description="The people behind PROPERTY LIFTS LIMITED."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
