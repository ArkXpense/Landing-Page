import { Hero, BentoGrid, Marquee } from "@/features/landing-page/"
import ShimmerButton from "../../../components/ui/shimmer-button"
import { AnimatedNavBarList } from "../components/animated-list"

export default function Page() {
    return (
        <>
            <main className="flex flex-col items-center justify-center gap-4 mt-[5rem]">
                <Hero />
                <section className="p-24 w-[90%]">
                    <ShimmerButton className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl">
                        <AnimatedNavBarList />
                    </ShimmerButton>
                </section>
                <BentoGrid/> 
                <Marquee/>
            </main>
        </>
    )
}