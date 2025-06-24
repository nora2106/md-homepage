import Heading from "@/app/components/01_atoms/Heading/Heading";
import {getGalleryImages} from "@/sanity/sanity-query";
import GalleryGrid from "@/app/components/03_organisms/GalleryGrid/GalleryGrid";

// export const metadata = {
//     title: "Marion Dimbath | Bildergalerie",
//     description: "Marion Dimbath: Aktuelle Pressebilder zum Download.",
// }

export async function generateMetadata() {
    const pageContent = await getGalleryImages();
    const data = pageContent[0];

    if(!data.meta_description) {
        return {
            title: data.gallery_title,
        }
    }

    if(!data.title) {
        return {
            description: data.gallery_meta_description,
            openGraph: {
                description: data.gallery_meta_description,
            },
        }
    }

    return {
        description: data.gallery_meta_description,
        title: data.gallery_title,
        openGraph: {
            description: data.gallery_meta_description,
        },
    }
}

export const Imprint = async () => {
    const imageData = await getGalleryImages();
    const data = imageData[0];
    return (
        <main>
            <Heading hasFallback={true} tag="h1" type="headline-2" reversed={true} secondLine="Presse&shy;fotos"/>
            <GalleryGrid data={data}/>
        </main>
    );
};

export default Imprint;
