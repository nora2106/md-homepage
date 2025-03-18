import Heading from "@/app/components/01_atoms/Heading/Heading";
import {getSettings} from "@/sanity/sanity-query";
import TextBlock from "@/app/components/02_molecules/TextBlock/TextBlock";
import styles from "./page.module.scss";

export const Imprint = async () => {
    const pageContent = await getSettings();
    const data = pageContent[0];
    return (
        <main>
            <Heading hasFallback={true} tag="h1" type="headline-2" firstLine="Impressum"/>
            <div className={styles.text}>
                <h2 className='headline-4'>Kontakt: </h2>
                <div><p>{data.email}</p></div>
                <h2 className='headline-4'>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: </h2>
                <TextBlock text={data.name}/>
                <TextBlock text={data.address}/>
                <TextBlock text={data.imprint_text}/>
            </div>
        </main>
    );
};

export default Imprint;
