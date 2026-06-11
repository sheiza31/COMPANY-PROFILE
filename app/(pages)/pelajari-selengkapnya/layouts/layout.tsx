import Header from "@/app/(pages)/components/Header"
import Footer from "@/app/(pages)/components/Footer"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ProService",
    description: "Pelajari Selengkapnya tentang ProService",
    icons : {
        icon : '/favicon.png',
    }
}
export default async function HomeLayouts({ children }: {
    children: React.ReactNode
}) {

    return (
        <>
        <html lang = "en" suppressHydrationWarning = {true}>
            <body className="" suppressHydrationWarning = {true}>         
            <Header />
            {children}
            <Footer />
            </body>
        </html>
        </>
    )
}
