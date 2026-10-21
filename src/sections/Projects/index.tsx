import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Chip } from "@/components/Chip";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";
import { PublicSector } from "./PublicSector";
import genesisImg from "@/assets/projects/genesis.webp";
import kitendaImg from "@/assets/projects/kitenda.webp";
import fichaSeguraImg from "@/assets/projects/fichaSegura.webp";
import kaleImg from "@/assets/projects/kale.webp";

type Project = {
  id: "genesis" | "kitenda" | "fichaSegura" | "kale" | "farwell";
  span: 2 | 3;
  // Role names are the same in every language, so they live here and not in i18n
  roles: string[];
  // Built together with Paradis Labs
  paradis?: boolean;
  // Screenshot and public URL are optional until the content exists
  image?: string;
  url?: string;
};

const projects: Project[] = [
  {
    id: "genesis",
    span: 3,
    roles: ["CMS", "DevOps"],
    paradis: true,
    image: genesisImg,
    url: "https://genesissportclub.ao/",
  },
  {
    id: "kitenda",
    span: 3,
    roles: ["DevOps", "QA"],
    paradis: true,
    image: kitendaImg,
    url: "https://kitenda.ao/",
  },
  {
    id: "fichaSegura",
    span: 2,
    roles: ["DevOps", "QA"],
    paradis: true,
    image: fichaSeguraImg,
    url: "https://fichasegura.ao/",
  },
  {
    id: "kale",
    span: 2,
    roles: ["Frontend", "CMS"],
    image: kaleImg,
    url: "https://www.kaleacquisition.com/",
  },
  // Site is down; add image and url (https://farwell.co.ao/) once it is back
  { id: "farwell", span: 2, roles: ["CMS", "DevOps"] },
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <Section id="projects" title={t("projects.title")} subtitle={t("projects.subtitle")} className="pt-18">
      <div className="grid grid-cols-6 gap-5 max-nav:grid-cols-1">
        {projects.map((project) => {
          const wide = project.span === 3;
          const name = t(`projects.items.${project.id}.name`);
          const paradis = project.paradis && (
            <span className="text-[13px] text-muted">{t("projects.paradis")}</span>
          );
          const roles = project.roles.map((role) => <Chip key={role}>{role}</Chip>);
          const viewLink = project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="more inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold"
            >
              {t("projects.view")}
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
            </a>
          );

          return (
            <article
              key={project.id}
              className={cn(
                "card reveal flex flex-col overflow-hidden rounded-[22px] border border-line bg-surface max-nav:col-span-1",
                wide ? "col-span-3" : "col-span-2",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center bg-thumb text-[13px] text-muted",
                  wide ? "aspect-video" : "aspect-[16/10]",
                )}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={name}
                    width={1280}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                ) : (
                  name
                )}
              </div>
              {wide ? (
                <div className="flex grow flex-col gap-3 px-[26px] pt-6 pb-[22px]">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="m-0 text-[21px] font-bold tracking-[-0.02em]">{name}</h3>
                    {paradis}
                  </div>
                  <p className="m-0 text-[15px] leading-[1.6] text-muted">
                    {t(`projects.items.${project.id}.description`)}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-1.5">
                    <div className="flex flex-wrap gap-1.5">{roles}</div>
                    {viewLink}
                  </div>
                </div>
              ) : (
                <div className="flex grow flex-col gap-2.5 px-6 pt-[22px] pb-[18px]">
                  <h3 className="m-0 text-[19px] font-bold tracking-[-0.02em]">{name}</h3>
                  <p className="m-0 text-sm leading-[1.6] text-muted">
                    {t(`projects.items.${project.id}.description`)}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {roles}
                    {paradis}
                  </div>
                  {viewLink && <div className="mt-auto">{viewLink}</div>}
                </div>
              )}
            </article>
          );
        })}
      </div>
      <PublicSector />
    </Section>
  );
}
