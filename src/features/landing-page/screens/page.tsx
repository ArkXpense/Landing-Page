import { Hero, BentoGrid, Stats, Marquee, GamingFeats } from "@/features/landing-page/"
import ShineBorder from "../components/shine-border"
import { AnimatedNavBarList } from "../components/animated-list"

export default function Page() {
    return (
        <>
            <main className="flex flex-col items-center justify-center gap-4 mt-[5rem]">
                <Hero />
                <section className="p-24 w-[90%]">
                    <ShineBorder className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                        <AnimatedNavBarList />
                    </ShineBorder>
                </section>
                <BentoGrid/>
                {/* <GamingFeats/> */}
                <Marquee/>
            </main>
        </>
    )
}