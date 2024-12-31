import Image from "next/image";

const teamMembers = [
  {
    name: "Niazi Mahrab",
    role: "CEO",
    company: "Property Lifts Ltd",
    imageSrc: "/images/niazi.jpg",
  },
  // Add more team members here
];

const TeamMember = ({ name, role, company, imageSrc }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center group transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Image Container */}
      <div className="w-60 h-80 bg-gray-200 flex items-center justify-center mx-auto rounded-lg overflow-hidden relative group-hover:shadow-lg">
        <Image
          src={imageSrc}
          alt={name}
          width={240}
          height={320}
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Member Details */}
      <h3 className="text-2xl font-semibold mt-4">{name}</h3>
      <h1 className="text-lg font-bold text-gray-700">{role}</h1>
      <h2 className="text-lg font-bold text-gray-800">{company}</h2>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-800">Meet Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              company={member.company}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
