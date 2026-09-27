// Project case studies shown on /projects.
// To add a project: put photos in public/images/projects/ and add an entry at the top of this list.

export const projects = [
  {
    slug: "passenger-lift-refurbishment",
    title: "Passenger Lift Refurbishment",
    date: "2026-08",
    location: "London",
    service: "lift-modernisation",
    summary:
      "A full refurbishment of an ageing passenger lift, including a new control panel, updated door equipment and new shaft lighting.",
    cover: "/images/projects/refurb-controller.webp",
    body: [
      "The lift in this building was showing its age, with worn equipment and outdated controls causing unreliable service. Rather than replace the whole lift, we refurbished the key components to bring it up to modern standards.",
      "We installed a new lift control panel, complete with integrated safety circuits, brake test controls and protective devices, then commissioned and tested it on site using specialist diagnostic equipment.",
      "In the shaft, we fitted new door operating equipment and installed new LED shaft lighting to make future maintenance and inspections safer and easier.",
    ],
    worksCompleted: [
      "New lift controller and control panel",
      "Door operator and door equipment upgrade",
      "New LED shaft lighting",
      "Shaft wiring and electrical works",
      "Full testing and commissioning",
    ],
    images: [
      {
        src: "/images/projects/refurb-controller.webp",
        alt: "New lift control panel being commissioned with diagnostic equipment",
        caption: "Commissioning the new control panel",
      },
      {
        src: "/images/projects/refurb-shaft.webp",
        alt: "View up the lift shaft showing new door equipment and LED shaft lighting",
        caption: "New door equipment and LED shaft lighting",
      },
    ],
  },
];

export function formatProjectDate(date) {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}
