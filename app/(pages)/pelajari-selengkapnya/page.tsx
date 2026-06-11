import HomeLayouts from "./layouts/layout"
import ProfilePerusahaan from "./components/ProfilePerusahaan"
import LayananKami from "./components/LayananKami"
import CtaSection from "./components/CtaSection"
import Reveal from "../components/Reveal"

export default function Page() {
    return (
        <>
            <HomeLayouts>
                <Reveal direction="down" delay={0.6}>
                    <ProfilePerusahaan />
                </Reveal>
                <Reveal direction="left" delay={0.6}>
                    <LayananKami />
                </Reveal>
                <Reveal direction="right" delay={0.6}>
                    <CtaSection />
                </Reveal>
            </HomeLayouts>
            
        </>
    )
}