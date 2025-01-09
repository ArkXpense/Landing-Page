import React from "react";
import { Users, Trophy, Clock, Gamepad2 } from "lucide-react";
import { MetricCard } from "@/components/cards/";

export default function GamingFeats() {
  return (
    <section className="mt-16 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Gaming Achievements at a StarkGens
      </h2>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          icon={<Users className="h-8 w-8 text-green-400" />}
          title="Active Players"
          value="1.2M+"
        />
        <MetricCard
          icon={<Gamepad2 className="h-8 w-8 text-green-400" />}
          title="Available Games"
          value="500+"
        />
        <MetricCard
          icon={<Trophy className="h-8 w-8 text-green-400" />}
          title="Weekly Tournaments"
          value="50+"
        />
        <MetricCard
          icon={<Clock className="h-8 w-8 text-green-400" />}
          title="Playtime"
          value="10M+ hours"
        />
      </div>
    </section>
  );
}
