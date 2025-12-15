export const companyInfo = {
  name: "Dharma Web Solutions",
  tagline: "Building Digital Excellence",
  description: "Full-service web development consultancy specializing in custom web applications, WordPress solutions, and API integrations.",
  email: "erikaburdet@gmail.com",
  phone: "806-677-4249",
  location: "Amarillo, Texas",
  github: "https://github.com/ErikBurdett",
  linkedin: "https://www.linkedin.com/in/eaburdett/",
};

export const services = [
  {
    id: 1,
    title: "Custom Web Applications",
    description: "Full stack React and Node.js applications tailored to your business needs. From concept to deployment, we build scalable solutions.",
    icon: "Code2",
    features: [
      "React / Next.js frontends",
      "Node.js / Python backends",
      "Database design & optimization",
      "Cloud deployment (AWS, Azure)"
    ]
  },
  {
    id: 2,
    title: "WordPress Development",
    description: "Custom themes, plugin development, and WordPress optimization. We transform WordPress into a powerful business tool.",
    icon: "Layers",
    features: [
      "Custom theme development",
      "Plugin development",
      "WooCommerce solutions",
      "Performance optimization"
    ]
  },
  {
    id: 3,
    title: "API Integrations",
    description: "Connect your systems with third-party services. Payment processing, e-commerce, CRM, and custom API development.",
    icon: "Plug",
    features: [
      "Payment gateway integration",
      "Third-party API connections",
      "Webhook development",
      "Custom REST & GraphQL APIs"
    ]
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    description: "Complete online store solutions with inventory management, payment processing, and order fulfillment automation.",
    icon: "ShoppingCart",
    features: [
      "Custom e-commerce platforms",
      "POS integrations",
      "Inventory management",
      "Payment processing"
    ]
  },
  {
    id: 5,
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, cloud infrastructure, and deployment automation. Keep your applications running smoothly.",
    icon: "Cloud",
    features: [
      "AWS & Azure deployments",
      "CI/CD pipeline setup",
      "Docker containerization",
      "Infrastructure optimization"
    ]
  },
  {
    id: 6,
    title: "Legacy Modernization",
    description: "Migrate outdated systems to modern tech stacks while maintaining business continuity and data integrity.",
    icon: "RefreshCw",
    features: [
      "Platform migrations",
      "Code refactoring",
      "Database migrations",
      "Performance upgrades"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "EightyTwenty Platform",
    client: "EightyTwenty",
    description: "Migrated business from Squarespace → WordPress → fully custom React/Node platform with online ordering and POS integration. Unified payment processing with Toast POS, Square, Stripe, PayPal, Venmo, and Cash App. Built data analytics dashboards for business intelligence.",
    technologies: ["React", "Node.js", "Toast POS API", "Stripe API", "Square API", "PayPal API", "Google Sheets API", "Data Analysis"],
    category: "E-Commerce",
    featured: true
  },
  {
    id: 2,
    title: "Grande Vista Ranch",
    client: "Grande Vista Ranch",
    description: "Built a custom React/Node e-commerce platform with Printful API integration for print-on-demand merchandise. Real-time inventory sync via webhooks and automated order fulfillment.",
    technologies: ["React", "Node.js", "Printful API", "E-commerce", "Webhooks", "Payment Processing"],
    category: "E-Commerce",
    featured: true
  },
  {
    id: 3,
    title: "Saint Francis Ministries",
    client: "Saint Francis Ministries",
    description: "Volunteer and donation portal for a non-profit organization. The platform significantly increased donations and streamlined volunteer coordination.",
    technologies: ["WordPress", "JavaScript", "PHP", "Custom Themes", "Donation Integration"],
    category: "Non-Profit",
    featured: true
  },
  {
    id: 4,
    title: "Randall County Rentals",
    client: "Randall County Rentals",
    description: "Property management website with real estate plugin integration, mailing service, and appointment reminders. Created photography and videography content for listings.",
    technologies: ["WordPress", "PHP", "JavaScript", "Real Estate Plugins"],
    category: "Real Estate",
    featured: false
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Dharma Web Solutions transformed our online presence. The custom platform they built has streamlined our operations significantly.",
    author: "Local Business Owner",
    company: "EightyTwenty"
  },
  {
    id: 2,
    quote: "The donation portal they created significantly increased our fundraising. Incredible work with a mission-driven approach.",
    author: "Rannah Evetts",
    company: "Saint Francis Ministries"
  }
];

export const technologies = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "MUI"],
  backend: ["Node.js", "Express", "Python", "Flask", "PHP", "GraphQL", "REST APIs"],
  cms: ["WordPress", "Custom Themes", "Plugin Development", "WooCommerce"],
  cloud: ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD", "Terraform"],
  database: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
  apis: ["Stripe", "PayPal", "Square", "Toast POS", "Printful", "Google APIs"]
};


