"use client";

// import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import dynamic from "next/dynamic";
const NextStudio = dynamic(() => import("next-sanity/studio").then((mod) => mod.NextStudio), {
    ssr: false,
    loading: () => <p>Loading Sanity Studio...</p>, // Optional loading state
});

export default function Studio() {
    return (
        <body>
            <NextStudio config={config} />
        </body>
    );
}