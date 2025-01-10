import React from "react";
import { Users, Trophy, Clock, Gamepad2 } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Users,
    name: "Active Players",
    description: "Engage with 1.2M+ active players worldwide.",
    href: "/players",
    cta: "View stats",
    background: <div className="absolute inset-0 bg-orange-400/10 blur-lg" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Gamepad2,
    name: "Available Games",
    description: "Explore a library of 500+ Web3 games.",
    href: "/games",
    cta: "Browse games",
    background: <div className="absolute inset-0 bg-blue-400/10 blur-lg" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Trophy,
    name: "Weekly Tournaments",
    description: "Join 50+ tournaments held weekly.",
    href: "/tournaments",
    cta: "Join now",
    background: <div className="absolute inset-0 bg-yellow-400/10 blur-lg" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Clock,
    name: "Playtime",
    description: "Enjoy over 10M+ hours of collective playtime.",
    href: "/playtime",
    cta: "Discover more",
    background: <div className="absolute inset-0 bg-purple-400/10 blur-lg" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
];

export default function GamingFeatsGrid() {
  return (
    <section className="mt-16 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Gaming Achievements at StarkGens
      </h2>

      {/* Bento Grid */}
      <BentoGrid className="lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
