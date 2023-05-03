interface Menu {
  href: string;
  title: string;
  submenu?: Menu[];
}

const menulinks: Menu[] = [
  { href: "/", title: "Home", submenu: [] },
  { href: "/about-us", title: "About Us", submenu: [] },
  {
    href: "/courses",
    title: "Courses",
    submenu: [
      { href: "/courses/web-3-and-metaverse", title: "Web 3 and Metaverse" },
      {
        href: "/courses/cloud-native-computing",
        title: "Cloud-Native Computing",
      },
      {
        href: "/courses/ai-and-deep-learning",
        title: "(AI) and Deep Learning",
      },
      {
        href: "/courses/ambient-computing-and-iot",
        title: "Ambient Computing and IoT",
      },
      {
        href: "/courses/genomics-and-bioinformatics",
        title: "Genomics and Bioinformatics",
      },
      {
        href: "/courses/network-programmability-and-Automation",
        title: "Network Programmability and Automation",
      },
    ],
  },
  { href: "/contact-us", title: "Contact Us", submenu: [] },
];

export default menulinks;
