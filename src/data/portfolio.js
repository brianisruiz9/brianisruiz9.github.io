// Content recovered from the original portfolio; duration supplied by its owner.
export const profile = {
  name: "Brianis Ruiz",
  role: "Software Developer | Web Developer",
  github: "https://github.com/brianisruiz9",
  linkedin: "https://www.linkedin.com/in/bruiz9/",
  email: "brianisp@hotmail.com",
  cvPath: "assets/CV-Brianis-Ruiz.pdf",
};

export const navigation = [
  ["sobre-mi", "Sobre mí"],
  ["proyectos", "Proyectos"],
  ["experiencia", "Experiencia"],
  ["tecnologias", "Tecnologías"],
];

// Digiturno and Certika came from the original portfolio.
// Public URLs and MiNegocio Control were supplied by the owner.
// MiNegocio Control's description comes from its public landing page; stack unconfirmed.
// Real-time order management was confirmed by the owner; a generic title was requested.
// Its deployment URL, screenshot and technology stack are not yet confirmed.
export const projects = [
  {
    name: "Digiturno",
    category: "Gestión de turnos",
    description:
      "Gestión de turnos presenciales y virtuales con paneles de estado e historial.",
    technologies: ["React", "Node.js", "APIs"],
    visual: "queue",
    liveUrl: null,
    previewImage: "projects/digiturno.png",
  },
  {
    name: "Certika",
    category: "Certificación digital",
    description:
      "Certificados digitales verificables usando blockchain y pruebas de integridad.",
    technologies: ["React", "Node.js", "Blockchain"],
    visual: "certificate",
    liveUrl: "https://app.certika.co/sign-in",
    previewImage: "projects/certika.png",
  },
  {
    name: "MiNegocio Control",
    category: "Gestión de negocios",
    description:
      "Plataforma para registrar ventas, controlar inventario, administrar clientes y consultar reportes del negocio.",
    technologies: [],
    liveUrl: "https://p01--mi-negocio-control-front--gtdc728ylzfk.code.run/",
    previewImage: "projects/mi-negocio-control.png",
  },
  {
    name: "Gestión de Pedidos en Tiempo Real",
    category: "Pedidos en tiempo real",
    description:
      "Aplicación para recibir y gestionar pedidos en tiempo real, facilitando el seguimiento de los pedidos del negocio.",
    technologies: [],
    visual: "queue",
    liveUrl: null,
    previewImage: null,
  },
  {
    name: "Atención Virtual Coljuegos",
    category: "Agendamiento de citas",
    description:
      "Plataforma para agendar, consultar, modificar o cancelar citas de atención virtual con la Oficina Jurídica de Coljuegos.",
    technologies: [],
    liveUrl: "https://atencionvirtual.coljuegos.gov.co/",
    previewImage: "projects/atencion-virtual-coljuegos.png",
  },
];

export const experience = [
  {
    title: "Desarrollo web",
    description:
      "Integración de APIs, seguridad, autenticación y roles. Dashboards y reportes para soluciones web.",
  },
  {
    title: "Automatización de procesos",
    description:
      "Certificaciones automatizadas, reportes y procesos. Experiencia en proyectos del sector público.",
  },
  {
    title: "Sistemas de agendamiento",
    description:
      "Gestión de citas, disponibilidad y turnos, con atención a la experiencia de usuario.",
  },
];

// Expanded with the technology list supplied by the owner.
export const technologies = [
  {
    label: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux",
      "Material UI",
      "Axios",
      "Vite",
      "Responsive Design",
      "Socket.IO",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "APIs REST",
      "WebSockets",
      "Sequelize ORM",
      "JWT",
      "Nodemailer",
    ],
  },
  {
    label: "Bases de datos",
    items: ["SQL", "PostgreSQL", "MySQL", "SQL Server", "Oracle"],
  },
  {
    label: "DevOps y herramientas",
    items: ["Docker", "Git", "GitHub", "Postman", "Sentry"],
  },
  {
    label: "Otros",
    items: ["OCR", "PWA", "Blockchain"],
  },
];
