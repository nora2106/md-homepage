import NotFound from "@/app/(layout)/not-found";

export const metadata = {
    title: "404 - Nicht gefunden",
    robots: {
        index: false,
        follow: false,
    },
}

export default function Custom404() {
    return <NotFound/>
}
