import { Link } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function Hero() {
  return (
    <section className="flex min-h-3/4 flex-col items-center md:items-stretch md:flex-row w-full justify-evenly">
      <div className="flex w-full md:w-[40%] flex-col gap-7 md:mt-32 mt-32 md:h-auto h-[300px]">
        <h1 className="text-center leading-tight font-bold bg-gradient-to-b from-white via-gray-300 to-[#23b61e] text-transparent bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <span className="block text-5xl md:text-5xl">With StarkGens Discover </span>
          <span className="block text-2xl md:text-4xl">The Best Starknet Web3 Games</span>
          <span className="block text-xl md:text-4xl font-bold">In The Market.</span>
        </h1>
        <p className="mt-2 text-lg md:text-lg text-center font-medium text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Built by players, for players. Explore exclusive collections, trade NFTs, and discover your next adventure!
        </p>

        <div className="flex items-center justify-center">
          <Link to="/register">
            <RainbowButton className="px-6 py-3 shadow-2xl">
              <span className="text-center text-base md:text-lg font-semibold text-white">
                Look For Games Now
              </span>
            </RainbowButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
