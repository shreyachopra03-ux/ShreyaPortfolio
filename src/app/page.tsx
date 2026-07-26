/* eslint-disable @next/next/no-img-element */
import type { ComponentType, SVGProps } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-10 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-3 flex flex-col order-2 md:order-1">
              <BlurFadeText delay={BLUR_FADE_DELAY} className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-br from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent" yOffset={8} text={`Hi, I'm ${DATA.name.split(" ")[0]}`} />
              <BlurFadeText className="text-muted-foreground max-w-[520px] text-sm leading-relaxed" delay={BLUR_FADE_DELAY * 2} text={DATA.description} />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex items-center gap-2 mt-1">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground font-mono">Based in Delhi, India</span>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-md" />
                <Avatar className="relative size-24 md:size-28 border-2 border-primary/20 rounded-full shadow-xl">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover object-center" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Work section hidden until experience is added */}

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex items-center gap-3">
              <h2 className="text-base font-semibold tracking-tight whitespace-nowrap">Skills</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => {
              const Icon = (skill as { icon?: ComponentType<SVGProps<SVGSVGElement>> }).icon;

              return (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <div className="border border-border/60 bg-muted/40 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 rounded-lg h-7 w-fit px-3 flex items-center gap-1.5 cursor-default">
                    {Icon && <Icon className="size-3.5 rounded overflow-hidden object-contain" />}
                    <span className="text-foreground/80 text-xs font-medium">{skill.name}</span>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex items-center gap-3">
              <h2 className="text-base font-semibold tracking-tight whitespace-nowrap">Education</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <Link href={education.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 justify-between group">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img src={education.logoUrl} alt={education.school} className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none" />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        {/* <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden /> */}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex items-center gap-3">
              <h2 className="text-base font-semibold tracking-tight whitespace-nowrap">About</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
