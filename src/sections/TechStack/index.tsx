import { useTranslation } from "react-i18next";
import { Chip } from "@/components/Chip";
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
      className="pb-28"
    >
      <div className="grid grid-cols-4 gap-5 max-nav:grid-cols-2 max-[520px]:grid-cols-1">
        {groups.map((group) => (
          <div
            key={group.id}
            className="card reveal flex flex-col gap-4 rounded-[18px] border border-line bg-surface p-6"
          >
            <h3 className="m-0 text-xs font-medium tracking-[0.06em] text-muted uppercase">
              {t(`stack.groups.${group.id}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.techs.map((tech) => (
                <Chip key={tech} size="md">
                  {tech}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
