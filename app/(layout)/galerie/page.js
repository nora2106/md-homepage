import Heading from "@/app/components/01_atoms/Heading/Heading";
import {getGalleryImages} from "@/sanity/sanity-query";
import GalleryGrid from "@/app/components/03_organisms/GalleryGrid/GalleryGrid";

export const Imprint = async () => {
    const imageData = await getGalleryImages();
    const data = imageData[0];
    return (
        <main>
            <Heading hasFallback={true} tag="h1" type="headline-2" firstLine="Bildergalerie"/>
            <GalleryGrid data={data}/>
        </main>
    );
};

export default Imprint;
