import { useTranslation } from "react-i18next";
import { Section } from "@/components/Section";

const groups = [
  {
    id: "frontend",
    techs: ["React", "Next.js", "HTML & CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    techs: [
      "Node.js / Express",
      "Django / FastAPI",
      ".NET Core",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    id: "database",
    techs: ["PostgreSQL", "PL/pgSQL", "MongoDB", "Elasticsearch"],
  },
  {
    id: "cms",
  techs: ["Directus", "Squidex", "WordPress", "Sanity.io", "Strapi"],
  },
  {
    id: "devops",
    techs: ["Docker", "Kubernetes", "GitOps", "CI/CD", "NGINX", "AKS", "AWS"],
  },
] as const;

export function TechStack() {
  const { t } = useTranslation();

  return (
    <Section
      id="stack"
      title={t("stack.title")}
      subtitle={t("stack.subtitle")}
      className="pt-28"
    >
      <div className="border-t border-line">
        {groups.map((group) => (
          <div
            key={group.id}
            className="reveal grid grid-cols-[200px_minmax(0,1fr)] items-center gap-6 border-b border-line py-[22px] max-nav:grid-cols-1 max-nav:gap-3"
          >
            <h3 className="m-0 text-[13px] font-semibold tracking-[0.06em] text-muted uppercase">
              {t(`stack.groups.${group.id}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-3.5 py-[7px] text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
