import { Navbar, DarkThemeToggle } from 'flowbite-react';
import { useI18n } from '$/locales';

const NavigationBar = () => {
    const t = useI18n();

    return ( 
        <Navbar className="max-w-6xl mx-auto">
            <Navbar.Brand className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                {t('metadata.title')}
            </Navbar.Brand>
            <DarkThemeToggle />
        </Navbar>
     );
}
 
export default NavigationBar;