/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-44 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-105"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group flex flex-col h-full border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-[0_0_20px_0px] hover:shadow-primary/10 cursor-pointer transition-all duration-300 bg-card/50 backdrop-blur-sm",
        className
      )}
    >
      {/* Image / Video area */}
      <div className="relative shrink-0 overflow-hidden">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-44 object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-44 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">{title}</span>
            </div>
          )}
          {/* dark gradient so badges on top are readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </Link>

        {/* Website + GitHub badges */}
        {links && links.length > 0 && (
          <div className="absolute bottom-2 right-2 flex flex-wrap gap-1.5">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black/70 backdrop-blur-sm text-white border-white/20 hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-semibold text-xs tracking-tight">{title}</h3>
          <time className="text-[10px] text-muted-foreground">{dates}</time>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[10px] font-medium border border-border h-5 w-fit px-1.5"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
