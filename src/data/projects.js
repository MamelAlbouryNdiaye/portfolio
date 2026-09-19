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
    image: "/profile.jpg",
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
    title: "Jucicom",
    description: "A modern web project designed with a clear interface and an engaging user experience.",
    stack: ["React", "JavaScript", "CSS"],
    image: "/jucicom.png",
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
