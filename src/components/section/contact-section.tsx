import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="relative mt-6">
      {/* Badge sits outside the card so it never gets clipped */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 border border-primary/30 bg-primary rounded-full px-4 py-1 shadow-[0_0_15px_0px] shadow-primary/30">
        <span className="text-primary-foreground text-xs font-semibold tracking-widest uppercase">Contact</span>
      </div>

      <div className="border border-border/50 rounded-xl pt-10 pb-10 px-10 relative bg-card/30 backdrop-blur-sm">
        {/* Flickering grid — clipped inside the card only */}
        <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden pointer-events-none">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>

        <div className="relative flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-sm text-balance leading-relaxed">
            Want to chat? Just shoot me a dm{" "}
            <Link
              href={DATA.contact.social.X.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              with a direct question on twitter
            </Link>{" "}
            and I&apos;ll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </div>
    </div>
  );
}
