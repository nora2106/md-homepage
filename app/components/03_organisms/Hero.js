import Image from 'next/image';
import Heading from "@/app/components/01_atoms/Heading";

export const Hero = () => {
    return (
        <div className='bg-hero bg-cover h-lvh w-lvw overflow-hidden'>
            <Heading tag='h1' firstLine='Marion' secondLine='Dimbath'/>
            <div>
                <Image className='h-5/6 w-auto absolute bottom-0 left-1/3' width='1000' height='2000' src='/img/player1.png' alt=''/>
            </div>
        </div>
    );
};

export default Hero;