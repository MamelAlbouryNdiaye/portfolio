const projects = [
  {
    id: "macky-sall-reference",
    title: "Macky Sall — Référence",
    description:
      "A French-language documentary web application dedicated to Macky Sall's career. It brings together his biography, political timeline, achievements, projects, international action, and verifiable sources. A search feature lets visitors explore the corpus by keyword and category.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Express",
      "Zod",
      "Vercel",
    ],
    image: "/macky-sall-reference.png",
    live: "https://macky-sall-reference.vercel.app/#/",
    github: "https://github.com/MamelAlbouryNdiaye/macky-sall-reference",
  },
  {
    id: "enterprise-network-simulation",
    title: "Enterprise Network Simulation",
    description:
      "A small enterprise network designed and simulated in Cisco Packet Tracer. The topology connects four department-based LANs through three Cisco 2911 routers using static routing, with end-to-end connectivity verified through ICMP ping tests.",
    stack: [
      "Cisco Packet Tracer",
      "Cisco 2911 Routers",
      "IP Addressing",
      "Subnetting",
      "Static Routing",
      "LAN Segmentation",
      "ICMP / Ping",
    ],
    image: "/enterprise-network-topology.png",
  },
  {
    id: "jucicom",
    title: "JUCICOM — Judicial Digital Transformation",
    description:
      "Contributed to the modernization of the Senegalese Judicial Training Center's information systems. The project focused on digitalizing training management, administrative processes, and data workflows through web platforms tailored to public-sector operational needs.",
    stack: [
      "Symfony",
      "PHP",
      "Web Architecture",
      "Requirements Analysis",
      "ArchiMate",
      "Functional Specifications",
      "Agile Methodology",
      "Public-Sector Digitalization",
    ],
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEp3h6c3-9syQ/feedshare-shrink_800/B56Zrfpwi_K4Ag-/0/1764688860393?e=2147483647&t=Gitzlb3WeJ3f2PUAImooHOZ8PdInEdpKxoLRZ5hDFXk&v=beta",
  },
  {
    id: "cloud-deploy",
    title: "Cloud Deploy",
    description: "A deployment-oriented project showcasing cloud hosting and full-stack delivery practices.",
    stack: ["Vercel", "Render", "Node.js"],
    image: "/clouddeploy.png",
  },
];

export default projects;
