import { ReactComponent as HomeLogo } from './../assets/icons/home.svg';
import { ReactComponent as SuscriptionsLogo } from './../assets/icons/suscriptions.svg';
import { ReactComponent as FlameLogo } from './../assets/icons/flame.svg';

export default [
    {
        label: 'inicio',
        icon: HomeLogo,
        active: true,
    },
    {
        label: 'tendencias',
        icon: FlameLogo,
        active: false,
    },
    {
        label: 'suscripciones',
        icon: SuscriptionsLogo,
        active: false,
    },
];
