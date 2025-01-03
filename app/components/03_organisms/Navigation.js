import MenuItem from "@/app/components/01_atoms/MenuItem";
import Button from "@/app/components/01_atoms/Button";

export const Navigation = () => {
    return (
        <div className="fixed w-full">
            <nav className="flex flex-row justify-between items-center w-full bg-black ps-6 pe-6 px-4 py-4">
                <ul className="flex flex-row gap-4 h-fit">
                    <MenuItem url='/' text='Homepage'/>
                    <MenuItem url='/projekte' text='Projekte'/>
                </ul>
                <Button text='Kontakt'/>
            </nav>
        </div>
    );
};

export default Navigation;