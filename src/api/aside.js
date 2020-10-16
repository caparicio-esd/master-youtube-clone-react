import React from 'react';

/**
 * Aquí importo todos los iconos, porque los voy a usar...
 * Aunque podríamos hacer un componente, pero eso lo veremos más adelante...
 */
import { ReactComponent as HomeLogo } from './../assets/icons/home.svg';
import { ReactComponent as SuscriptionsLogo } from './../assets/icons/suscriptions.svg';
import { ReactComponent as FlameLogo } from './../assets/icons/flame.svg';
import { ReactComponent as LibraryLogo } from './../assets/icons/library.svg';
import { ReactComponent as HistorialLogo } from './../assets/icons/historial.svg';
import { ReactComponent as MyVideosLogo } from './../assets/icons/my_videos.svg';
import { ReactComponent as SeeLaterLogo } from './../assets/icons/see_later.svg';
import { ReactComponent as ChevDownLogo } from './../assets/icons/chevron_down.svg';
import { ReactComponent as PlusLogo } from './../assets/icons/plus.svg';
import { ReactComponent as YouTubeLogo } from './../assets/icons/youtube.svg';
import { ReactComponent as FilmLogo } from './../assets/icons/films.svg';
import { ReactComponent as VideoGamesLogo } from './../assets/icons/videogames.svg';
import { ReactComponent as EmissionLogo } from './../assets/icons/emission.svg';
import { ReactComponent as BulbLogo } from './../assets/icons/bulb.svg';
import { ReactComponent as SettingLogo } from './../assets/icons/setting.svg';
import { ReactComponent as FlagLogo } from './../assets/icons/flag.svg';
import { ReactComponent as AskLogo } from './../assets/icons/ask.svg';
import { ReactComponent as SuggestionsLogo } from './../assets/icons/suggestions.svg';

export default [
    {
        title: '', 
        className: 'aside_inicio', 
        children: [
            {
                label: 'inicio', 
                icon: <HomeLogo></HomeLogo>, 
                active: true, 
                showing: true
            },
            {
                label: 'tendencias', 
                icon: <FlameLogo></FlameLogo>, 
                active: false, 
                showing: true
            },
            {
                label: 'suscripciones', 
                icon: <SuscriptionsLogo></SuscriptionsLogo>, 
                active: false, 
                showing: true
            }
        ]
    },
    {
        title: '', 
        className: 'aside_biblioteca', 
        children: [
            {
                label: 'inicio', 
                icon: <HomeLogo></HomeLogo>, 
                active: true, 
                showing: true
            },
            {
                label: 'tendencias', 
                icon: <FlameLogo></FlameLogo>, 
                active: false, 
                showing: false
            },
            {
                label: 'suscripciones', 
                icon: <SuscriptionsLogo></SuscriptionsLogo>, 
                active: false, 
                showing: false
            }
        ]
    }
];
