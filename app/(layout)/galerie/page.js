import Heading from "@/app/components/01_atoms/Heading/Heading";
import {getGalleryImages} from "@/sanity/sanity-query";
import GalleryGrid from "@/app/components/03_organisms/GalleryGrid/GalleryGrid";

export async function generateMetadata() {
    const pageContent = await getGalleryImages();
    const data = pageContent[0];

    if(!data.meta_description) {
        return {
            title: data.title,
        }
    }

    if(!data.title) {
        return {
            description: data.meta_description,
            openGraph: {
                description: data.meta_description,
            },
        }
    }

    return {
        description: data.meta_description,
        title: data.title,
        openGraph: {
            description: data.meta_description,
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
