import { Link } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero() {
  return (
    <section
      id="#"
      className="flex min-h-3/4 flex-col items-center md:items-stretch md:flex-row w-full justify-evenly"
    >
      <div className="flex w-full md:w-[40%] flex-col gap-7 md:mt-32 mt-32 md:h-auto h-[300px]">
        <h1 className="text-center leading-tight font-bold bg-gradient-to-b from-[#F8F9FA] via-[#FDD5B1] to-[#F36A3D] text-transparent bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <span className="block text-5xl md:text-5xl">
            With ArkXpense share{" "}
          </span>
          <span className="block text-2xl md:text-4xl">
            all your expenses with your homies
          </span>
          <span className="block text-xl md:text-4xl font-bold">
            with full transparency
          </span>
        </h1>
        <p className="mt-2 text-lg md:text-lg text-center font-medium text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Built by mates for mates. ArkXpense is a free and open-source expense
          sharing platform.
        </p>

        <div className="flex items-center justify-center">
          <Link to="/register">
            <RainbowButton className="px-6 py-3 shadow-2xl">
              <Link to="app.arkxpense.com">
                <span className="text-center text-base md:text-lg font-semibold ">
                  Start your journey with us.
                </span>
              </Link>
            </RainbowButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
