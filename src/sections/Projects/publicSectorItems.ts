// Public-sector work: public portals (optionally linked) and internal, restricted systems.
// The "Setor público" block stays hidden while this list is empty.
// Texts are kept per language here (not in the locale files) so an empty list stays well typed.
type LocalizedText = {
  name: string;
  institution: string;
  role: string;
  description: string;
  result: string;
};

export type PublicSectorItem = {
  id: string;
  year: string;
  access: "public" | "restricted";
  url?: string;
  techs: string[];
  pt: LocalizedText;
  en: LocalizedText;
};

export const publicSectorItems: PublicSectorItem[] = [
  {
    id: "public-sector-1",
    year: "2025-2026",
    access: "public",
    url: "https://transparencia.gov.pt",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "GraphQL",
      "Django",
      "Squidex",
      "Docker",
      "Kubernetes",
      "GitOps",
      "Elastic Enterprise Search",
    ],
    pt: {
      name: "Portal Mais Transparência (+T)",
      institution: "Administração Pública Portuguesa",
      role: "Full Stack Developer",
      description:
        "Desenvolvimento e evolução de uma plataforma digital de transparência pública. Participação na definição da arquitetura aplicacional, desenvolvimento frontend e backend, migração de funcionalidades para Next.js, integração com APIs REST e GraphQL, integração com o CMS Squidex e implementação de processos de CI/CD e deployment em Kubernetes.",
      result:
        "Contribuição para a modernização da plataforma, a integração entre serviços e a melhoria dos processos de desenvolvimento, manutenção e deployment.",
    },
    en: {
      name: "Mais Transparência (+T) Portal",
      institution: "Portuguese Public Administration",
      role: "Full Stack Developer",
      description:
        "Development and enhancement of a digital public transparency platform. Contributed to application architecture, frontend and backend development, migration of features to Next.js, REST and GraphQL API integration, Squidex CMS integration, and CI/CD and Kubernetes deployment processes.",
      result:
        "Contributed to platform modernization, service integration, and improvements to development, maintenance, and deployment processes.",
    },
  },
  {
    id: "public-sector-2",
    year: "2025",
    access: "public",
    url: "https://dados.gov.pt",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo Client",
      "Squidex",
      "PostgreSQL",
      "PostgREST",

      "iAP",
      "Docker",
      "Kubernetes",
      "GitOps",
    ],
    pt: {
      name: "Portal de Dados Abertos — dados.gov",
      institution: "Administração Pública Portuguesa",
      role: "Full Stack Developer",
      description:
        "Desenvolvimento e manutenção da plataforma dados.gov, incluindo frontend com Next.js, integração de APIs, serviços de pesquisa, CMS Squidex e interoperabilidade com o iAP, bem como processos de CI/CD e deployment.",
      result:
        "Contribuição para a evolução da plataforma dados.gov, promovendo a integração com serviços da Administração Pública e facilitando a disponibilização, pesquisa e consulta de conjuntos de dados públicos.",
    },
    en: {
      name: "Open Data Portal — dados.gov",
      institution: "Portuguese Public Administration",
      role: "Full Stack Developer",
      description:
        "Development and maintenance of the dados.gov platform, including Next.js frontend, API integration, search services, Squidex CMS, and interoperability with iAP, as well as CI/CD and deployment processes.",
      result:
        "Contributed to the evolution of the dados.gov platform by supporting integration with public administration services and facilitating the publication, discovery, and access of public datasets.",
    },
  },
  {
    id: "public-sector-3",
    year: "2022-2025",
    access: "restricted",
    techs: ["C#", ".NET Framework", "Razor Pages", "PL/SQL", "Oracle Database"],
    pt: {
      name: "3S — Sistema de Segurança Social",
      institution: "INSS — Instituto Nacional de Segurança Social",
      role: "Software Developer",
      description:
        "Desenvolvimento e manutenção de funcionalidades do sistema 3S, destinado ao suporte dos processos da Segurança Social. Trabalho com C# e .NET Framework, utilização de Razor Pages no desenvolvimento da interface web e implementação e manutenção de operações sobre bases de dados Oracle através de PL/SQL.",
      result:
        "Contribuição para a manutenção e evolução do sistema de informação da Segurança Social, apoiando a implementação de funcionalidades aplicacionais e a interação com a base de dados.",
    },
    en: {
      name: "3S — Social Security System",
      institution: "INSS — National Institute of Social Security",
      role: "Software Developer",
      description:
        "Development and maintenance of features for the 3S system, supporting Social Security processes. Worked with C# and .NET Framework, used Razor Pages for web interface development, and implemented and maintained Oracle database operations using PL/SQL.",
      result:
        "Contributed to the maintenance and evolution of the Social Security information system by supporting application feature development and database interactions.",
    },
  },
  {
    id: "public-sector-4",
    year: "2022-2025",
    // TODO: add the portal URL
    access: "public",
    techs: ["C#", ".NET Framework", "Razor Pages", "PL/SQL", "Oracle Database"],
    pt: {
      name: "Portal da Segurança Social Direta",
      institution: "INSS — Instituto Nacional de Segurança Social",
      role: "Software Developer",
      description:
        "Desenvolvimento e manutenção de funcionalidades do Portal da Segurança Social Direta, uma plataforma digital de acesso a serviços da Segurança Social. Utilização de C# e .NET Framework no desenvolvimento aplicacional, Razor Pages na construção das interfaces web e PL/SQL para operações e integração com a base de dados Oracle.",
      result:
        "Contribuição para a evolução do portal e para a disponibilização e manutenção de funcionalidades digitais de acesso aos serviços da Segurança Social.",
    },
    en: {
      name: "Social Security Direct Portal",
      institution: "INSS — National Institute of Social Security",
      role: "Software Developer",
      description:
        "Development and maintenance of features for the Social Security Direct Portal, a digital platform providing access to Social Security services. Used C# and .NET Framework for application development, Razor Pages to build web interfaces, and PL/SQL for Oracle database operations and integration.",
      result:
        "Contributed to portal development and the maintenance of digital features providing access to Social Security services.",
    },
  },
];
