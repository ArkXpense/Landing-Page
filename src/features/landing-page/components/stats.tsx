import React from "react";
import NumberTicker from "@/components/ui/number-ticker";

type StatsItem = {
  value: number;
  label: string;
  duration?: number; // Optional: Customize the duration for the ticker
};

const stats: StatsItem[] = [
  { value: 12345678, label: "Total Assets", duration: 3000 },
  { value: 98765, label: "NFTs Minted", duration: 2500 },
  { value: 54321, label: "Active Players", duration: 2000 },
];

const Stats = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 text-white py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Real-Time Web3 Stats
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map(({ value, label, duration }, index) => (
          <div key={index} className="flex flex-col items-center">
            <NumberTicker
              value={value}
            //   duration={duration} // Pass optional duration if provided
              className="text-4xl font-bold text-gradient bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent"
            />
            <p className="mt-2 text-lg font-medium text-neutral-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stats;