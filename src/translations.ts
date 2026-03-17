export type Language = 'al' | 'en' | 'de';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    team: string;
    contact: string;
  };

  // Header
  header: {
    bookConsultation: string;
    navigation: string;
    exploreRinex: string;
  };

  // Hero
  hero: {
    title: string;
    description: string;
    bookConsultation: string;
    stats: {
      successRate: string;
      happyClients: string;
      yearsExperience: string;
    };
  };

  // About
  about: {
    subtitle: string;
    title: string;
    gradientTitle: string;
    description: string;
    features: {
      webDev: {
        title: string;
        subtitle: string;
        description: string;
      };
      uiUx: {
        title: string;
        subtitle: string;
        description: string;
      };
      digitalMarketing: {
        title: string;
        subtitle: string;
        description: string;
      };
    };
  };

  // Services
  services: {
    subtitle: string;
    title: string;
    gradientTitle: string;
    description: string;
    items: {
      websiteDev: {
        title: string;
        description: string;
      };
      uiUxDesign: {
        title: string;
        description: string;
      };
      mobileApp: {
        title: string;
        description: string;
      };
      socialMedia: {
        title: string;
        description: string;
      };
      contentCreation: {
        title: string;
        description: string;
      };
      graphicDesign: {
        title: string;
        description: string;
      };
    };
  };

  // Team
  team: {
    subtitle: string;
    title: string;
    gradientTitle: string;
    description: string;
    members: {
      rinesa: {
        name: string;
        role: string;
      };
      rina: {
        name: string;
        role: string;
        description: string;
      };
    };
  };

  // Contact
  contact: {
    subtitle: string;
    title: string;
    gradientTitle: string;
    description: string;
    info: {
      callUs: {
        title: string;
        label: string;
        details: string;
      };
      emailUs: {
        title: string;
        label: string;
        details: string;
      };
    };
  };

  // Footer
  footer: {
    description: string;
    services: string[];
    company: string[];
    stayUpdated: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
    };
    bottom: {
      copyright: string;
      links: string[];
    };
  };

  // Metadata
  metadata: {
    title: string;
    description: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      team: 'Team',
      contact: 'Contact',
    },
    header: {
      bookConsultation: 'Book a Consultation',
      navigation: 'Navigation',
      exploreRinex: 'Explore Rinex Digital',
    },
    hero: {
      title: 'Building Modern Websites & Digital Experiences',
      description:
        'We create modern websites and digital solutions that help your business grow and stand out.',
      bookConsultation: 'Book a Consultation',
      stats: {
        successRate: 'Success Rate',
        happyClients: 'Happy Clients',
        yearsExperience: 'Years of Experience',
      },
    },
    about: {
      subtitle: 'Who We Are',
      title: 'We Turn Ideas Into',
      gradientTitle: 'Digital Reality',
      description:
        'Rinex Digital is a full-service digital agency focused on helping brands grow through design, technology, and strategy. We combine creativity with technical expertise to build impactful digital solutions.',
      features: {
        webDev: {
          title: 'Web Development',
          subtitle: 'Custom Websites Built for Performance',
          description:
            'We build fast, modern, and scalable websites designed to strengthen your brand and support long-term growth.',
        },
        uiUx: {
          title: 'UI / UX Design',
          subtitle: 'Design That Enhances User Experience',
          description:
            'We design intuitive and visually refined interfaces focused on usability, clarity, and strong brand identity.',
        },
        digitalMarketing: {
          title: 'Digital Marketing & Content',
          subtitle: 'Strategies That Grow Your Brand',
          description:
            'We create effective content and smart digital strategies that help your brand reach and engage the right audience.',
        },
      },
    },
    services: {
      subtitle: 'Services',
      title: 'Digital Solutions That',
      gradientTitle: 'Elevate Your Brand',
      description:
        'We offer web development, design, and digital marketing services that help businesses build a strong and successful online presence.',
      items: {
        websiteDev: {
          title: 'Website Development',
          description:
            'We build modern, fast, and responsive websites tailored to your brand and business goals.',
        },
        uiUxDesign: {
          title: 'UI / UX Design',
          description:
            'We design intuitive and engaging interfaces that improve usability and user experience.',
        },
        mobileApp: {
          title: 'Mobile App Development',
          description:
            'We develop modern mobile applications with smooth performance and a seamless user experience across devices.',
        },
        socialMedia: {
          title: 'Social Media Management',
          description:
            'We manage and grow your social media presence with strategic content and consistent branding.',
        },
        contentCreation: {
          title: 'Content Creation',
          description:
            'We create engaging digital content that strengthens your brand and connects with your audience.',
        },
        graphicDesign: {
          title: 'Graphic Design',
          description:
            'We design visually compelling graphics and branding that make your business stand out.',
        },
      },
    },
    team: {
      subtitle: 'Our Team',
      title: 'Meet Our',
      gradientTitle: 'Creative Team',
      description:
        'A team of passionate developers, designers, and digital experts dedicated to building innovative solutions and delivering outstanding digital experiences.',
      members: {
        rinesa: {
          name: 'Rinesa Smajli',
          role: 'Software Engineer',
        },
        rina: {
          name: 'Rina Hoti',
          role: 'Software Engineer',
          description:
            'Specialist in visual communication, branding, and creative design for digital and print media.',
        },
      },
    },
    contact: {
      subtitle: 'Contact Us',
      title: 'Let’s Work',
      gradientTitle: 'Together',
      description:
        'Our team is ready to turn your ideas into powerful digital solutions.',
      info: {
        callUs: {
          title: 'Call Us',
          label: 'Phone',
          details: '+383 49 266 940 | +383 49 650 161',
        },
        emailUs: {
          title: 'Email Us',
          label: 'Email',
          details: 'rinex.digital@gmail.com',
        },
      },
    },
    footer: {
      description:
        'We help businesses grow through innovative digital strategies, modern websites, and high-performing digital products.',
      services: [
        'Website Development',
        'UI / UX Design',
        'Mobile Apps',
        'Social Media',
        'Content Creation',
        'Copywriting',
      ],
      company: ['About Us', 'Careers', 'Case Studies', 'Blog', 'Contact'],
      stayUpdated: {
        title: 'Stay Updated',
        description:
          'Subscribe to our newsletter for the latest insights and updates.',
        placeholder: 'Enter your email',
        subscribe: 'Subscribe',
      },
      bottom: {
        copyright: '© 2025 Rinex Digital. All rights reserved.',
        links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
      },
    },
    metadata: {
      title: 'Rinex Digital | Building Powerful Digital Experiences',
      description:
        'We help businesses grow with modern websites, strong user experiences, and data-driven digital strategies.',
    },
  },

  al: {
    nav: {
      home: 'Ballina',
      about: 'Rreth Nesh',
      services: 'Shërbimet',
      portfolio: 'Portofoli',
      team: 'Ekipi',
      contact: 'Kontakti',
    },
    header: {
      bookConsultation: 'Rezervo Konsultim',
      navigation: 'Navigimi',
      exploreRinex: 'Zbulo Rinex Digital',
    },
    hero: {
      title: 'Ndërtojmë Websajte Moderne & Përvoja Digjitale',
      description:
        'Ne krijojmë websajte moderne dhe zgjidhje digjitale që ndihmojnë biznesin tuaj të rritet dhe të dallohet.',
      bookConsultation: 'Rezervo Konsultim',
      stats: {
        successRate: 'Norma e Suksesit',
        happyClients: 'Klientë të Kënaqur',
        yearsExperience: 'Vite Përvojë',
      },
    },
    about: {
      subtitle: 'Kush Jemi',
      title: 'I Kthejmë Idetë në',
      gradientTitle: 'Realitet Digjital',
      description:
        'Rinex Digital është një agjenci digjitale që ndihmon bizneset të rriten përmes dizajnit, teknologjisë dhe strategjisë. Ne kombinojmë kreativitetin me ekspertizën teknike për të krijuar zgjidhje që bëjnë diferencën.',
      features: {
        webDev: {
          title: 'Zhvillim Web',
          subtitle: 'Websajte të Personalizuara dhe të Shpejta',
          description:
            'Ndërtojmë websajte moderne, të shpejta dhe të shkallëzueshme që forcojnë markën dhe mbështesin rritjen e biznesit tuaj.',
        },
        uiUx: {
          title: 'Dizajn UI / UX',
          subtitle: 'Dizajn që Përmirëson Përvojën e Përdoruesit',
          description:
            'Krijojmë ndërfaqe intuitive dhe vizualisht të pastra, të fokusuara në përdorshmëri dhe identitet të fortë të markës.',
        },
        digitalMarketing: {
          title: 'Marketing Digjital & Përmbajtje',
          subtitle: 'Strategji që Rrisin Markën Tuaj',
          description:
            'Zhvillojmë përmbajtje dhe strategji digjitale që ndihmojnë markën tuaj të arrijë audiencën e duhur.',
        },
      },
    },
    services: {
      subtitle: 'Shërbimet',
      title: 'Zgjidhje Digjitale që',
      gradientTitle: 'E Ngrenë Markën Tuaj',
      description:
        'Ofrojmë zhvillim web, dizajn dhe marketing digjital për të ndërtuar një prani të fortë dhe të suksesshme online.',
      items: {
        websiteDev: {
          title: 'Zhvillim Websajtesh',
          description:
            'Ndërtojmë websajte moderne, të shpejta dhe responsive të përshtatura për biznesin tuaj.',
        },
        uiUxDesign: {
          title: 'Dizajn UI / UX',
          description:
            'Dizajnojmë ndërfaqe intuitive dhe tërheqëse që përmirësojnë përvojën e përdoruesit.',
        },
        mobileApp: {
          title: 'Aplikacione Mobile',
          description:
            'Zhvillojmë aplikacione moderne mobile me performancë të lartë dhe përvojë të shkëlqyer përdoruesi.',
        },
        socialMedia: {
          title: 'Menaxhim i Rrjeteve Sociale',
          description:
            'Menaxhojmë dhe rrisim praninë tuaj në rrjetet sociale me përmbajtje strategjike.',
        },
        contentCreation: {
          title: 'Krijim Përmbajtjeje',
          description:
            'Krijojmë përmbajtje që lidhet me audiencën dhe forcon markën tuaj.',
        },
        graphicDesign: {
          title: 'Dizajn Grafik',
          description:
            'Krijojmë dizajne dhe identitet vizual që e bëjnë biznesin tuaj të dallohet.',
        },
      },
    },
    team: {
      subtitle: 'Ekipi Ynë',
      title: 'Njihuni me',
      gradientTitle: 'Ekipin Tonë',
      description:
        'Një ekip profesionistësh të përkushtuar për të krijuar zgjidhje inovative dhe përvoja digjitale cilësore.',
      members: {
        rinesa: {
          name: 'Rinesa Smajli',
          role: 'Inxhiniere Softuerike',
        },
        rina: {
          name: 'Rina Hoti',
          role: 'Inxhiniere Softuerike',
          description: 'Specialiste në komunikimin vizual, branding dhe dizajnin kreativ për media digjitale dhe print.',
        },
      },
    },
    contact: {
      subtitle: 'Na Kontaktoni',
      title: 'Le të Punojmë',
      gradientTitle: 'Së Bashku',
      description:
        'Ekipi ynë është gati t’i kthejë idetë tuaja në zgjidhje reale digjitale.',
      info: {
        callUs: {
          title: 'Na Telefononi',
          label: 'Telefoni',
          details: '+383 49 266 940 | +383 49 650 161',
        },
        emailUs: {
          title: 'Na Shkruani',
          label: 'Email',
          details: 'rinex.digital@gmail.com',
        },
      },
    },
    footer: {
      description:
        'Ndihmojmë bizneset të rriten përmes strategjive digjitale dhe websajteve moderne.',
      services: [
        'Zhvillim Web',
        'Dizajn UI / UX',
        'Aplikacione Mobile',
        'Rrjete Sociale',
        'Përmbajtje Digjitale',
        'Copywriting',
      ],
      company: ['Rreth Nesh', 'Karriera', 'Projekte', 'Blog', 'Kontakt'],
      stayUpdated: {
        title: 'Qëndroni të Përditësuar',
        description: 'Abonohuni për të marrë lajmet dhe risitë më të fundit.',
        placeholder: 'Shkruani email-in',
        subscribe: 'Abonohu',
      },
      bottom: {
        copyright: '© 2025 Rinex Digital. Të gjitha të drejtat e rezervuara.',
        links: [
          'Privatësia',
          'Kushtet',
          'Cookies',
        ],
      },
    },
    metadata: {
      title: 'Rinex Digital | Zgjidhje Digjitale Moderne',
      description:
        'Ndihmojmë bizneset të rriten përmes websajteve moderne dhe strategjive digjitale.',
    },
  },

  de: {
    nav: {
      home: 'Start',
      about: 'Über uns',
      services: 'Leistungen',
      portfolio: 'Portfolio',
      team: 'Team',
      contact: 'Kontakt',
    },
    header: {
      bookConsultation: 'Beratung vereinbaren',
      navigation: 'Navigation',
      exploreRinex: 'Rinex Digital entdecken',
    },
    hero: {
      title: 'Moderne Websites & Digitale Erlebnisse',
      description:
        'Wir entwickeln moderne Websites und digitale Lösungen, die Ihr Unternehmen wachsen lassen.',
      bookConsultation: 'Beratung vereinbaren',
      stats: {
        successRate: 'Erfolgsquote',
        happyClients: 'Zufriedene Kunden',
        yearsExperience: 'Jahre Erfahrung',
      },
    },
    about: {
      subtitle: 'Wer wir sind',
      title: 'Wir verwandeln Ideen in',
      gradientTitle: 'digitale Realität',
      description:
        'Rinex Digital ist eine Digitalagentur, die Marken durch Design, Technologie und Strategie wachsen lässt.',
      features: {
        webDev: {
          title: 'Webentwicklung',
          subtitle: 'Individuelle Websites mit hoher Performance',
          description:
            'Wir entwickeln schnelle, moderne und skalierbare Websites für nachhaltiges Wachstum.',
        },
        uiUx: {
          title: 'UI / UX Design',
          subtitle: 'Design für bessere Nutzererlebnisse',
          description:
            'Wir gestalten intuitive und visuell klare Interfaces mit Fokus auf Benutzerfreundlichkeit.',
        },
        digitalMarketing: {
          title: 'Digitales Marketing & Content',
          subtitle: 'Strategien, die Ihre Marke stärken',
          description:
            'Wir entwickeln Inhalte und Strategien, die Ihre Zielgruppe erreichen.',
        },
      },
    },
    services: {
      subtitle: 'Leistungen',
      title: 'Digitale Lösungen, die',
      gradientTitle: 'Ihre Marke stärken',
      description:
        'Wir bieten Webentwicklung, Design und digitales Marketing für eine starke Online-Präsenz.',
      items: {
        websiteDev: {
          title: 'Webentwicklung',
          description:
            'Moderne, schnelle und responsive Websites für Ihr Unternehmen.',
        },
        uiUxDesign: {
          title: 'UI / UX Design',
          description:
            'Intuitive und ansprechende Interfaces für bessere Nutzererlebnisse.',
        },
        mobileApp: {
          title: 'Mobile Apps',
          description:
            'Moderne mobile Anwendungen mit optimaler Performance.',
        },
        socialMedia: {
          title: 'Social Media',
          description:
            'Strategisches Management Ihrer Social-Media-Präsenz.',
        },
        contentCreation: {
          title: 'Content Creation',
          description:
            'Inhalte, die Ihre Marke stärken und Ihre Zielgruppe ansprechen.',
        },
        graphicDesign: {
          title: 'Grafikdesign',
          description:
            'Kreative Designs und visuelle Identität für Ihr Unternehmen.',
        },
      },
    },
    team: {
      subtitle: 'Unser Team',
      title: 'Lernen Sie unser',
      gradientTitle: 'Team kennen',
      description:
        'Ein Team aus Experten, das innovative digitale Lösungen entwickelt.',
      members: {
        rinesa: {
          name: 'Rinesa Smajli',
          role: 'Softwareentwicklerin',
        },
        rina: {
          name: 'Rina Hoti',
          role: 'Softwareentwicklerin',
          description: 'Spezialistin für visuelle Kommunikation, Branding und kreatives Design für digitale und Printmedien.',
        },
      },
    },
    contact: {
      subtitle: 'Kontakt',
      title: 'Lassen Sie uns',
      gradientTitle: 'zusammenarbeiten',
      description:
        'Wir setzen Ihre Ideen in digitale Lösungen um.',
      info: {
        callUs: {
          title: 'Anrufen',
          label: 'Telefon',
          details: '+383 49 266 940 | +383 49 650 161',
        },
        emailUs: {
          title: 'E-Mail senden',
          label: 'E-Mail',
          details: 'rinex.digital@gmail.com',
        },
      },
    },
    footer: {
      description:
        'Wir helfen Unternehmen, durch digitale Lösungen zu wachsen.',
      services: [
        'Webentwicklung',
        'UI / UX Design',
        'Mobile Apps',
        'Social Media',
        'Content Creation',
        'Copywriting',
      ],
      company: ['Über uns', 'Karriere', 'Projekte', 'Blog', 'Kontakt'],
      stayUpdated: {
        title: 'Bleiben Sie informiert',
        description: 'Erhalten Sie die neuesten Updates und Insights.',
        placeholder: 'E-Mail eingeben',
        subscribe: 'Abonnieren',
      },
      bottom: {
        copyright: '© 2025 Rinex Digital. Alle Rechte vorbehalten.',
        links: ['Datenschutz', 'Bedingungen', 'Cookies'],
      },
    },
    metadata: {
      title: 'Rinex Digital | Digitale Lösungen für Ihr Wachstum',
      description:
        'Wir helfen Unternehmen mit modernen Websites und digitalen Strategien zu wachsen.',
    },
  },
};