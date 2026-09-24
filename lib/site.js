// Company details and content shared across the site.
// Edit here and every page (header, footer, contact, service pages) updates.

export const company = {
  name: "PROPERTY LIFTS LIMITED",
  shortName: "Property Lifts",
  url: "https://propertylifts.co.uk",
  founded: 2011,
  phone: "0203 831 5882",
  phoneHref: "tel:+442038315882",
  email: "info@propertylifts.co.uk",
  address: {
    street: "42 Allandale Road",
    town: "Hornchurch",
    postcode: "RM11 1AP",
    region: "London",
    country: "UK",
  },
  social: {
    facebook: "https://www.facebook.com/Propertyliftsltd",
    linkedin: "https://www.linkedin.com/company/property-lifts-ltd/",
  },
};

export const yearsExperience = new Date().getFullYear() - company.founded;

// Areas covered — check this list matches where the team actually works.
export const areas = [
  {
    region: "East London",
    places: ["Hornchurch", "Romford", "Upminster", "Dagenham", "Barking", "Ilford", "Stratford", "Canary Wharf"],
  },
  {
    region: "Central London",
    places: ["City of London", "Westminster", "Camden", "Islington", "Southwark", "Tower Hamlets"],
  },
  {
    region: "North & South London",
    places: ["Enfield", "Barnet", "Haringey", "Croydon", "Bromley", "Greenwich", "Lewisham"],
  },
  {
    region: "Essex & Kent",
    places: ["Brentwood", "Basildon", "Chelmsford", "Grays", "Thurrock", "Dartford"],
  },
];

export const services = [
  {
    slug: "lift-installation",
    title: "Lift Installation",
    short:
      "New passenger, home and goods lifts designed around your building, from survey and specification through to handover.",
    icon: "Building2",
    intro:
      "Whether you are adding a lift to a home, a block of flats or a commercial building, we manage the whole installation — from the first site survey to testing, certification and handover.",
    includes: [
      "Free site survey and requirements assessment",
      "Lift specification to suit your space, capacity and budget",
      "Coordination with builders, architects and building control",
      "Installation by experienced lift engineers",
      "Full testing and commissioning before handover",
      "Ongoing maintenance options once your lift is running",
    ],
    suitedFor: ["Private homes", "Residential blocks", "Offices", "Retail and hospitality", "Healthcare"],
  },
  {
    slug: "lift-maintenance",
    title: "Lift Maintenance",
    short:
      "Planned servicing contracts that keep your lifts safe, compliant and reliable, with fewer breakdowns and less downtime.",
    icon: "Wrench",
    intro:
      "Regular maintenance is the best way to keep a lift safe and avoid costly breakdowns. Our planned maintenance contracts are tailored to how often your lift is used and the type of building it serves.",
    includes: [
      "Scheduled preventive maintenance visits",
      "Safety checks on doors, brakes, controls and alarms",
      "Lubrication, adjustment and replacement of worn parts",
      "Written service reports after every visit",
      "Priority response for contract customers",
      "Support ahead of LOLER thorough examinations",
    ],
    suitedFor: ["Property managers", "Housing associations", "Commercial landlords", "Homeowners"],
  },
  {
    slug: "lift-repairs",
    title: "Breakdown & Emergency Repairs",
    short:
      "24/7 call-outs for lift breakdowns and entrapments. Our engineers diagnose the fault and get your lift moving again.",
    icon: "Siren",
    intro:
      "A broken-down lift causes real problems for residents, staff and visitors. Call us any time, day or night, and an engineer will be on the way to diagnose the fault and get your lift back in service.",
    includes: [
      "24/7 breakdown and entrapment call-outs",
      "Fault diagnosis on all major lift makes",
      "Repairs carried out on site wherever possible",
      "Clear explanation of the fault and the fix",
      "Quotes for any larger repairs before work starts",
    ],
    suitedFor: ["Any building with a lift", "Out-of-hours emergencies", "Customers without a maintenance contract"],
  },
  {
    slug: "lift-modernisation",
    title: "Refurbishment & Modernisation",
    short:
      "Upgrade ageing lifts with modern controls, drives, doors and interiors to improve safety, reliability and energy use.",
    icon: "RefreshCw",
    intro:
      "An older lift doesn't always need replacing. Modernising key components can bring it up to current standards, improve reliability, reduce energy use and give it a fresh look — often at a fraction of the cost of a new lift.",
    includes: [
      "Condition survey and modernisation report",
      "Controller and drive upgrades",
      "Door operator and safety-edge replacement",
      "Energy-efficient LED lighting",
      "Car interior refurbishment",
      "Phased works to keep disruption to a minimum",
    ],
    suitedFor: ["Lifts over 15 years old", "Frequent breakdowns", "Buildings being refurbished"],
  },
  {
    slug: "lift-inspection",
    title: "Inspection & Testing",
    short:
      "Safety inspections, testing and compliance support so your lifts meet the legal requirements for your building.",
    icon: "ClipboardCheck",
    intro:
      "Building owners and managers have a legal duty to keep lifts safe. We carry out inspections and testing, fix any defects found, and help you stay on top of your compliance obligations.",
    includes: [
      "Safety inspections and performance testing",
      "Remedial work on defects found during inspections",
      "Support before and after LOLER thorough examinations",
      "Clear reports and records for your files",
    ],
    suitedFor: ["Duty holders", "Facilities managers", "Landlords"],
  },
  {
    slug: "platform-and-stair-lifts",
    title: "Platform & Stair Lifts",
    short:
      "Accessibility lifts for wheelchair users and people with limited mobility, in homes and public buildings.",
    icon: "Accessibility",
    intro:
      "Platform and stair lifts make buildings accessible without the cost and space of a full passenger lift. We supply, install and maintain accessibility lifts for homes and public buildings.",
    includes: [
      "Vertical platform lifts",
      "Stair lifts and inclined platform lifts",
      "Advice on accessibility requirements",
      "Installation, servicing and repairs",
    ],
    suitedFor: ["Homes", "Schools", "Shops and offices", "Community buildings"],
  },
  {
    slug: "lift-design-consultation",
    title: "Design & Consultation",
    short:
      "Expert advice on choosing, specifying and planning a lift that fits your building, your users and your budget.",
    icon: "PencilRuler",
    intro:
      "Getting the specification right at the start saves time and money later. We help architects, developers and property owners choose the right lift and plan its installation.",
    includes: [
      "Traffic and capacity assessment",
      "Lift type and specification advice",
      "Space and shaft planning",
      "Budget and programme guidance",
    ],
    suitedFor: ["Architects", "Developers", "Property owners planning works"],
  },
  {
    slug: "lift-removal",
    title: "Dismantling & Removal",
    short:
      "Safe decommissioning and removal of old lifts, with responsible disposal and minimal disruption to your building.",
    icon: "Trash2",
    intro:
      "When a lift reaches the end of its life, we decommission and remove it safely, dispose of materials responsibly and leave the site clean — ready for a replacement or for the space to be reused.",
    includes: [
      "Safe isolation and decommissioning",
      "Dismantling and removal of all equipment",
      "Responsible recycling and disposal",
      "Site clean-up",
    ],
    suitedFor: ["Lift replacements", "Building conversions", "Demolition projects"],
  },
];

export const faqs = [
  {
    q: "How often should a lift be serviced?",
    a: "It depends on how much the lift is used and what type it is. Most passenger lifts in residential and commercial buildings are serviced every one to three months. We'll recommend a schedule after looking at your lift.",
  },
  {
    q: "What is a LOLER thorough examination?",
    a: "Under the Lifting Operations and Lifting Equipment Regulations 1998 (LOLER), lifts used at work must be thoroughly examined by a competent person — usually every six months for passenger lifts. This is normally done by an independent inspector, often arranged through your insurer. We can prepare your lift beforehand and fix any defects the examination finds.",
  },
  {
    q: "Do you offer 24/7 breakdown cover?",
    a: `Yes. Call ${company.phone} at any time for breakdowns and entrapments.`,
  },
  {
    q: "Do you work on lifts installed by other companies?",
    a: "Yes. Our engineers maintain and repair lifts from most major manufacturers, whoever originally installed them.",
  },
  {
    q: "How long does a new lift installation take?",
    a: "A home lift can take as little as a couple of weeks on site, while a passenger lift in a larger building usually takes longer. We'll give you a clear timeline with your quote.",
  },
  {
    q: "Can an old lift be modernised instead of replaced?",
    a: "Often, yes. Upgrading the controller, drive, doors and interior can make an older lift safer, more reliable and more efficient for much less than a full replacement. We'll survey the lift and advise on the best option.",
  },
  {
    q: "Which areas do you cover?",
    a: "We're based in Hornchurch and work across London, Essex and parts of Kent. See our Areas We Cover page for details, or call us to check.",
  },
  {
    q: "How do I get a quote?",
    a: `Fill in our quote request form, call ${company.phone}, or email ${company.email}. For most jobs we'll arrange a free site survey before quoting.`,
  },
];
