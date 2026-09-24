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
    imageSrc: "/images/niazi-headshot.jpg",
    linkedIn: "https://www.linkedin.com/in/niazi-mahrab-b16a96203/",
    bio: "Maintains our Odoo ERP system and looks after digital marketing and customer relationships.",
  },
  {
    name: "Abu Adil",
    role: "Lift Engineer",
    imageSrc: "",
    linkedIn: "",
    bio: "Carries out lift servicing, repairs and breakdown call-outs, keeping our customers' lifts safe and running smoothly.",
  },
  {
    name: "Maria",
    role: "Accounts & Admin",
    imageSrc: "",
    linkedIn: "",
    bio: "Looks after invoicing, accounts and office administration, and is often the first point of contact for our customers.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TeamMember = ({ name, role, imageSrc, linkedIn, bio }) => {
  return (
    <div className="flex flex-col items-center rounded-xl border bg-white p-8 text-center shadow-sm">
      <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-primary ring-4 ring-amber-100">
        {imageSrc ? (
          <Image src={imageSrc} alt={name} fill className="object-cover" sizes="144px" />
        ) : (
          <span className="text-4xl font-bold text-amber-400" aria-hidden="true">
            {initials(name)}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm font-medium text-amber-600">{role}</p>
      {bio && <p className="mt-4 leading-relaxed text-slate-600">{bio}</p>}
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
