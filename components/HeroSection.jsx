"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { company, yearsExperience } from "@/lib/site";

const highlights = [
  `${yearsExperience}+ years of lift experience`,
  "24/7 breakdown call-outs",
  "All major lift makes serviced",
];

const HeroSection = () => {
  // Only load the (large) background video on bigger screens.
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );
    setShowVideo(query.matches);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-6.5rem)] items-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {showVideo && (
          <video
            src="/videos/background.mp4"
            poster="/images/hero_background.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-slate-950/75 md:bg-transparent md:bg-gradient-to-r md:from-slate-950/90 md:via-slate-950/70 md:to-slate-950/30" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 py-20">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-amber-400">Lift specialists in London since {company.founded}</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Safe, reliable lifts for every property
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Installation, maintenance, repairs and modernisation for homes, residential blocks and
            commercial buildings, backed by experienced engineers and 24/7 breakdown cover.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className="btn-accent">
              Request a Free Quote
            </Link>
            <a href={company.phoneHref} className="btn-outline-light">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
