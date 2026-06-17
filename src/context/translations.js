export const translations = {

  // Spanish -------

  es: {
    navbar: {
      items: [
        { name: "Inicio", href: "#inicio" },
        { name: "Sobre Mí", href: "#about" },
        { name: "Experiencia", href: "#experience" },
        { name: "Proyectos", href: "#projects" },
        { name: "Certificados", href: "#certificates" },
        { name: "Contacto", href: "#contacto" },
      ],
      aria: {
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
    },
    logo: {
      part1: "Software",
      part2: "Analista y Desarrollador"
    },
    hero: {
      hi: "Hola,",
      iam: "soy",
      name1: "Juan Manuel",
      name2: "Valencia",
      description: "Software Analyst & Developer especializado en soluciones integrales con arquitecturas escalables. Apasionado por la optimización de procesos, el análisis de software y la infraestructura moderna.",
      button: "Mira mi trabajo",
      scroll: "Baja"
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Aquí algunos de mis proyectos. Cada uno cuidadosamente creado prestando atención en cada detalle y con las mejores prácticas.",
      button: "Mira mi Github",
      codeLink: "Code",
      demoLink: "Demo",
      items: [
        {
            title: "Sheets Menu SPA - Template",
            description: "Plantilla de menú digital con conexión directa a WhatsApp, para restaurantes y tiendas. Permite mostrar el menú de manera atractiva y sencilla, facilitando la toma de pedidos",
            tags: ["React", "TypeScript", "Tailwind", "Google Sheets"],
            demo: "https://sheets-menu-spa.vercel.app/"
        },
        {
            title: "Decora Con Arte",
            description: "Aplicación móvil para la gestión de pedidos optimizada para dispositivos móviles.",
            tags: ["React", "TypeScript", "Tailwind", "Google Sheets"],
            demo: "https://decora-con-arte.vercel.app/"
        },
        {
            title: "SpellChecker Browser Extension",
            description: "Extensión de navegador que detecta y corrige automáticamente errores gramaticales en inglés mientras escribes, ofreciendo sugerencias rápidas directamente en los campos de texto.",
            tags: ["JavaScript", "API"],
            code: "https://github.com/DeusNoctifer/spellchecker-browser-extension"
        }
      ]
    },
    about: {
      title: "Sobre ",
      titleHighlight: "mí",
      subtitle: "Analista Desarrollador de Sistemas",
      description1: "Analista y Desarrollador de Software con una sólida base técnica y más de 3 años de experiencia construyendo soluciones web. Mi enfoque principal es el desarrollo Full-Stack, utilizando Python (Django) para construir soluciones robustas y React para interfaces dinámicas.",
      description2: "Con un perfil orientado a la eficiencia y el código limpio, domino entornos Linux y la contenedorización con Docker. Me especializo en asegurar que el software no solo funcione, sino que sea portable, escalable y siga las mejores prácticas de la industria.",
      contactButton: "Ponte en contacto",
      downloadCv: "Descargar CV",
      cards: {
        frontend: {
          title: "Frontend Development",
          description: "Diseño de interfaces modernas y responsive con frameworks y librerías modernas. Enfoque en rendimiento y usabilidad.",
        },
        backend: {
          title: "Desarrollo Backend",
          description: "Diseño de APIs robustas y microservicios con Django y Node.js. Gestión avanzada de bases de datos y seguridad.",
        },
        devops: {
          title: "Infraestructura & DevOps",
          description: "Automatización de despliegues, gestión de servidores Linux y orquestación de contenedores con Docker.",
        },
      },
    },
    experience: {
      title: "Experiencia ",
      titleHighlight: "Laboral",
      items: [
        {
          role: "Database and Backend Developer",
          period: "2025 - Presente",
          descriptions: [
            "Desarrollo y administración de base de datos con BigQuery.",
            "Desarrollo de scripts personalizados con Apps Script para automatización de tareas.",
            "Optimización de consultas SQL reduciendo tiempos de respuesta en un 60%.",
          ],
        },
        {
          role: "Desarrollador Web Junior",
          period: "2026",
          descriptions: [
            "Desarrollo de landing page orientadas a conversión.",
            "Implementación de diseños responsive con Tailwind CSS.",
            "Integración de toma de pedidos con conexión directa a WhatsApp.",
            "Despliegue de aplicaciones y gestión de entornos con Docker.",
          ],
        },
      ],
    },
    certificates: {
      title: "Certificados",
      subtitle: "Algunas de mis certificaciones que respaldan mi formación y experiencia profesional.",
      viewCert: "Ver certificado",
      viewSkills: "Ver habilidades",
    },
    skills: {
      title: "Mis ",
      titleHighlight: "Habilidades",
      categories: {
        all: "todas",
        frontend: "frontend",
        backend: "backend",
        other: "otras",
      },
      levels: {
        intermediate: "Intermedio",
        solid: "Sólido",
        advanced: "Avanzado",
      },
    },
    contact: {
      title: "Ponte en ",
      titleHighlight: "Contacto",
      subtitle: "¿Te llamaron la atención mis habilidades y proyectos? Siéntete libre de contactarme. Siempre estoy dispuesto a desarrollar e idear nuevos proyectos.",
      infoTitle: "Información de Contacto",
      emailLabel: "Email",
      phoneLabel: "Celular",
      locationLabel: "Localidad",
      locationValue: "Medellín, Colombia",
      socialTitle: "Mis Redes",
      formTitle: "¡Envíame un mensaje!",
      form: {
        nameLabel: "Tu Nombre",
        namePlaceholder: "Ingresa tu nombre",
        emailLabel: "Tu Correo",
        emailPlaceholder: "Ingresa tu correo",
        messageLabel: "Tu Mensaje",
        messagePlaceholder: "Hola, me interesa tu trabajo...",
        submit: "Enviar Mensaje",
        submitting: "Enviando...",
      },
      toast: {
        successTitle: "¡Mensaje enviado!",
        successDescription: "Gracias por tu mensaje, te responderé pronto.",
        errorTitle: "Error",
        errorDescription: "Hubo un problema al enviar tu mensaje. Por favor inténtalo de nuevo.",
      },
    },
    footer: {
      license: "Bajo licencia",
      openSource: "🚀 Proyecto 100% Open Source.",
      contributions: "¡Contribuciones bienvenidas!",
      backToTop: "Volver al inicio",
    },
    notFound: {
      title: "Página no encontrada",
      description: "La ruta a la que intentaste acceder no existe o fue movida.",
      button: "Volver al inicio",
    },
  },

  // English -------

  en: {
    navbar: {
      items: [
        { name: "Home", href: "#inicio" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Certificates", href: "#certificates" },
        { name: "Contact", href: "#contacto" },
      ],
      aria: {
        openMenu: "Open Menu",
        closeMenu: "Close Menu",
      },
    },
    logo: {
      part1: "Software",
      part2: "Analyst & Developer"
    },
    hero: {
      hi: "Hello,",
      iam: "I am",
      name1: "Juan Manuel",
      name2: "Valencia",
      description: "Software Analyst & Developer specialized in integral solutions with scalable architectures. Passionate about process optimization, software analysis, and modern infrastructure.",
      button: "Look at my work",
      scroll: "Down"
    },
    projects: {
      title: "My Projects",
      subtitle: "Here are some of my projects. Each one carefully crafted with attention to detail and best practices.",
      button: "View my Github",
      codeLink: "Code",
      demoLink: "Demo",
      items: [
        {
            title: "Sheets Menu SPA - Template",
            description: "Digital menu template with direct WhatsApp connection, for restaurants and stores. It allows you to display the menu in an attractive and simple way, facilitating order taking",
            tags: ["React", "TypeScript", "Tailwind", "Google Sheets"],
            demo: "https://sheets-menu-spa.vercel.app/"
        },
        {
            title: "Decora Con Arte",
            description: "Mobile application for order management optimized for mobile devices.",
            tags: ["React", "TypeScript", "Tailwind", "Google Sheets"],
            demo: "https://decora-con-arte.vercel.app/"
        },
        {
            title: "SpellChecker Browser Extension",
            description: "Browser extension that automatically detects and corrects English grammar mistakes while typing, providing fast suggestions directly inside text inputs.",
            tags: ["JavaScript", "API"],
            code: "https://github.com/DeusNoctifer/spellchecker-browser-extension"
        }
      ]
    },
    about: {
      title: "About ",
      titleHighlight: "Me",
      subtitle: "Systems Analyst & Developer",
      description1: "Software Analyst and Developer with a solid technical foundation and over 3 years of experience building web solutions. My main focus is Full-Stack development, using Python (Django) to build robust solutions and React for dynamic interfaces.",
      description2: "With a profile oriented towards efficiency and clean code, I master Linux environments and Docker containerization. I specialize in ensuring that software not only works, but is portable, scalable, and follows industry best practices.",
      contactButton: "Get in touch",
      downloadCv: "Download CV",
      cards: {
        frontend: {
          title: "Frontend Development",
          description: "Modern and responsive interface design with modern frameworks and libraries. Focus on performance and usability.",
        },
        backend: {
          title: "Backend Development",
          description: "Design of robust APIs and microservices with Django and Node.js. Advanced database management and security.",
        },
        devops: {
          title: "Infrastructure & DevOps",
          description: "Deployment automation, Linux server management, and Docker container orchestration.",
        },
      },
    },
    experience: {
      title: "Work ",
      titleHighlight: "Experience",
      items: [
        {
          role: "Database and Backend Developer",
          period: "2025 - Present",
          descriptions: [
            "Database development and administration with BigQuery.",
            "Development of custom scripts with Apps Script for task automation.",
            "SQL query optimization reducing response times by 60%.",
          ],
        },
        {
          role: "Junior Web Developer",
          period: "2026",
          descriptions: [
            "Development of conversion-oriented landing pages.",
            "Implementation of responsive designs with Tailwind CSS.",
            "Integration of order taking with direct WhatsApp connection.",
            "Application deployment and environment management with Docker.",
          ],
        },
      ],
    },
    certificates: {
      title: "Certificates",
      subtitle: "Some of my certifications that support my training and professional experience.",
      viewCert: "View certificate",
      viewSkills: "View skills",
    },
    skills: {
      title: "My ",
      titleHighlight: "Skills",
      categories: {
        all: "all",
        frontend: "frontend",
        backend: "backend",
        other: "other",
      },
      levels: {
        intermediate: "Intermediate",
        solid: "Solid",
        advanced: "Advanced",
      },
    },
    contact: {
      title: "Get in ",
      titleHighlight: "Touch",
      subtitle: "Did my skills and projects catch your attention? Feel free to contact me. I am always willing to develop and ideate new projects.",
      infoTitle: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Medellín, Colombia",
      socialTitle: "My Socials",
      formTitle: "Send me a message!",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Your Email",
        emailPlaceholder: "Enter your email",
        messageLabel: "Your Message",
        messagePlaceholder: "Hello, I'm interested in your work...",
        submit: "Send Message",
        submitting: "Sending...",
      },
      toast: {
        successTitle: "Message sent!",
        successDescription: "Thank you for your message, I'll reply soon.",
        errorTitle: "Error",
        errorDescription: "There was a problem sending your message. Please try again.",
      },
    },
    footer: {
      license: "Under license",
      openSource: "🚀 100% Open Source Project.",
      contributions: "Contributions welcome!",
      backToTop: "Back to top",
    },
    notFound: {
      title: "Page not found",
      description: "The page you tried to access does not exist or has been moved.",
      button: "Back to home",
    },
  },

  // Chinese -------

  zh: {
    navbar: {
      items: [
        { name: "首页", href: "#inicio" },
        { name: "关于我", href: "#about" },
        { name: "经验", href: "#experience" },
        { name: "项目", href: "#projects" },
        { name: "毕业证书", href: "#certificates" },
        { name: "联系我", href: "#contacto" },
      ],
      aria: {
        openMenu: "打开菜单",
        closeMenu: "关闭菜单",
      },
    },
    logo: {
      part1: "软件",
      part2: "分析师与开发工程师"
    },
    hero: {
      hi: "你好，",
      iam: "我是",
      name1: "胡安·曼努埃尔",
      name2: "瓦伦西亚",
      description: "软件分析师与开发工程师，专注于具有可扩展架构的综合解决方案。热爱流程优化、软件分析和现代基础设施。",
      button: "看我的工作",
      scroll: "下"
    },
    projects: {
      title: "我的项目",
      subtitle: "这里是我的一些项目。每一个都经过精心制作，注重细节和最佳实践。",
      button: "查看我的 Github",
      codeLink: "代码",
      demoLink: "演示",
      items: [
        {
            title: "Sheets Menu SPA - Template",
            description: "数字菜单模板，直接连接 WhatsApp，适用于餐厅和商店。它允许您以吸引人和简单的方式显示菜单，促进订单的获取",
            tags: ["React", "TypeScript", "Tailwind", "Google Sheets"],
            demo: "https://sheets-menu-spa.vercel.app/"
        },
        {
            title: "Decora Con Arte - Mobile",
            description: "适用于移动设备优化的订单管理移动应用程序。",
            tags: ["React", "TypeScript", "Tailwind", "Google Sheets"],
            demo: "https://decora-con-arte.vercel.app/"
        },
        {
            title: "SpellChecker 浏览器扩展",
            description: "一款浏览器扩展，可在输入时自动检测并纠正英语语法错误，直接在文本输入框中提供快速建议。",
            tags: ["JavaScript", "API"],
            code: "https://github.com/DeusNoctifer/spellchecker-browser-extension"
        }
      ]
    },
    about: {
      title: "关于",
      titleHighlight: "我",
      subtitle: "系统分析师与开发工程师",
      description1: "具有扎实技术基础和3年以上Web解决方案构建经验的软件分析师与开发工程师。我的主要方向是全栈开发，使用Python (Django)构建稳健的解决方案，使用React构建动态界面。",
      description2: "以效率和代码清洁为导向，精通Linux环境和Docker容器化技术。我专注于确保软件不仅能够运行，而且具有可移植性、可扩展性，并遵循行业最佳实践。",
      contactButton: "取得联系",
      downloadCv: "下载简历",
      cards: {
        frontend: {
          title: "前端开发",
          description: "使用现代框架和库设计现代化响应式界面。注重性能和用户体验。",
        },
        backend: {
          title: "后端开发",
          description: "使用Django和Node.js设计稳健的API和微服务。高级数据库管理和安全防护。",
        },
        devops: {
          title: "基础设施与DevOps",
          description: "自动化部署，Linux服务器管理和Docker容器编排。",
        },
      },
    },
    experience: {
      title: "工作",
      titleHighlight: "经验",
      items: [
        {
          role: "数据库与后端开发工程师",
          period: "2025 - 至今",
          descriptions: [
            "使用BigQuery进行数据库开发和维护。",
            "使用Apps Script开发自定义脚本实现任务自动化。",
            "优化SQL查询，将响应时间减少60%。",
          ],
        },
        {
          role: "初级网页开发工程师",
          period: "2026",
          descriptions: [
            "开发面向转化的着陆页。",
            "使用Tailwind CSS实现响应式设计。",
            "集成订单系统，直接连接WhatsApp。",
            "应用程序部署和Docker环境管理。",
          ],
        },
      ],
    },
    certificates: {
      title: "证书",
      subtitle: "我的一些认证，证明我的培训和专业经验。",
      viewCert: "查看证书",
      viewSkills: "查看技能",
    },
    skills: {
      title: "我的",
      titleHighlight: "技能",
      categories: {
        all: "全部",
        frontend: "前端",
        backend: "后端",
        other: "其他",
      },
      levels: {
        intermediate: "中级",
        solid: "扎实",
        advanced: "高级",
      },
    },
    contact: {
      title: "与我",
      titleHighlight: "联系",
      subtitle: "我的技能和项目引起了您的注意吗？请随时与我联系。我总是愿意开发和构思新的项目。",
      infoTitle: "联系信息",
      emailLabel: "邮箱",
      phoneLabel: "电话",
      locationLabel: "所在地",
      locationValue: "麦德林，哥伦比亚",
      socialTitle: "我的社交",
      formTitle: "给我发送消息！",
      form: {
        nameLabel: "你的姓名",
        namePlaceholder: "输入你的姓名",
        emailLabel: "你的邮箱",
        emailPlaceholder: "输入你的邮箱",
        messageLabel: "你的留言",
        messagePlaceholder: "你好，我对你的工作感兴趣...",
        submit: "发送消息",
        submitting: "发送中...",
      },
      toast: {
        successTitle: "消息已发送！",
        successDescription: "感谢你的留言，我会尽快回复。",
        errorTitle: "错误",
        errorDescription: "发送消息时出现问题，请重试。",
      },
    },
    footer: {
      license: "根据许可证",
      openSource: "🚀 100% 开源项目。",
      contributions: "欢迎贡献！",
      backToTop: "回到顶部",
    },
    notFound: {
      title: "页面未找到",
      description: "您尝试访问的页面不存在或已被移动。",
      button: "返回首页",
    },
  }
};
