import React from 'react';
import AsideListComponent from './AsideListComponent';
import AsideTitle from './AsideTitle';
import AsideSuscriptionComponent from './AsideSuscriptionComponent';
import { ReactComponent as HomeLogo } from './../../assets/icons/home.svg';
import { ReactComponent as FlameLogo } from './../../assets/icons/flame.svg';
import { ReactComponent as SuscriptionsLogo } from './../../assets/icons/suscriptions.svg';
import { ReactComponent as LibraryLogo } from './../../assets/icons/library.svg';
import { ReactComponent as HistorialLogo } from './../../assets/icons/historial.svg';
import { ReactComponent as MyVideosLogo } from './../../assets/icons/my_videos.svg';
import { ReactComponent as SeeLaterLogo } from './../../assets/icons/see_later.svg';
import { ReactComponent as ChevDownLogo } from './../../assets/icons/chevron_down.svg';
import { ReactComponent as PlusLogo } from './../../assets/icons/plus.svg';
import { ReactComponent as YouTubeLogo } from './../../assets/icons/youtube.svg';
import { ReactComponent as FilmLogo } from './../../assets/icons/films.svg';
import { ReactComponent as VideoGamesLogo } from './../../assets/icons/videogames.svg';
import { ReactComponent as EmissionLogo } from './../../assets/icons/emission.svg';
import { ReactComponent as BulbLogo } from './../../assets/icons/bulb.svg';
import { ReactComponent as SettingLogo } from './../../assets/icons/setting.svg';
import { ReactComponent as FlagLogo } from './../../assets/icons/flag.svg';
import { ReactComponent as AskLogo } from './../../assets/icons/ask.svg';
import { ReactComponent as SuggestionsLogo } from './../../assets/icons/suggestions.svg';
import Footer from './Footer';
import styled from 'styled-components';

const AsideStyled = styled.aside`
    grid-area: 2 / 1 / span 1 / span 1;
    border-right: 1px solid #ddd;
    max-height: 100%;
    overflow: auto;

    > div {
        border-bottom: 2px solid #ddd;
    }
`;

const Aside = (props) => {
    return (
        <AsideStyled className="aside">
            <div className="aside_inicio">
                <AsideListComponent name="Inicio" icon={<HomeLogo />} active={true} />
                <AsideListComponent name="Tendencias" icon={<FlameLogo />} />
                <AsideListComponent name="Suscripciones" icon={<SuscriptionsLogo />} />
            </div>
            <div className="aside_biblioteca">
                <AsideTitle title="" />
                <AsideListComponent name="Biblioteca" icon={<LibraryLogo />} />
                <AsideListComponent name="Historial" icon={<HistorialLogo />} />
                <AsideListComponent name="Mis Videos" icon={<MyVideosLogo />} />
                <AsideListComponent name="Ver más tarde" icon={<SeeLaterLogo />} />
                <AsideListComponent name="Mostrar más" icon={<ChevDownLogo />} />
            </div>
            <div className="aside_suscripciones">
                <AsideTitle title="Suscripciones" />
                <AsideSuscriptionComponent
                    name="Biblioteca"
                    picture="https://yt3.ggpht.com/a/AATXAJzwH7c2jihugQTb5s_saVuxeA6qiRVzIb5iORqn=s88-c-k-c0xffffffff-no-rj-mo"
                />
                <AsideSuscriptionComponent
                    name="Biblioteca"
                    picture="https://yt3.ggpht.com/a/AATXAJw16CwPy9wYC-KbKg7_d-V5owsvp4zmmcghiVpu=s88-c-k-c0xffffffff-no-rj-mo"
                />
                <AsideSuscriptionComponent
                    name="Biblioteca"
                    picture="https://yt3.ggpht.com/a/AATXAJwnz1ueXlDaLvsd899pl6IbqR_ZRvRCgmzXb36rrg=s88-c-k-c0xffffffff-no-rj-mo"
                />
                <AsideSuscriptionComponent
                    name="Biblioteca"
                    picture="https://yt3.ggpht.com/a/AATXAJwDA9YnpVmMh6YyXFj-qd_EhG3UxnMX9UoV7J-FWg=s88-c-k-c0xffffffff-no-rj-mo"
                />
                <AsideSuscriptionComponent
                    name="Biblioteca"
                    picture="https://yt3.ggpht.com/a/AATXAJwXxITlfxKmPX2h2OkLKwxzR-OoCLCxkKmf1Ugs=s88-c-k-c0xffffffff-no-rj-mo"
                />
                <AsideListComponent name="Explorar canales" icon={<PlusLogo />} />
            </div>
            <div className="aside_suscripciones">
                <AsideTitle title="Más de YouTube" />
                <AsideListComponent name="YouTube Premium" icon={<YouTubeLogo />} />
                <AsideListComponent name="Películas" icon={<FilmLogo />} />
                <AsideListComponent name="Videojuegos" icon={<VideoGamesLogo />} />
                <AsideListComponent name="Directo" icon={<EmissionLogo />} />
                <AsideListComponent name="Aprendizaje" icon={<BulbLogo />} />
            </div>
            <div className="aside_suscripciones">
                <AsideTitle title="" />
                <AsideListComponent name="Configuración" icon={<SettingLogo />} />
                <AsideListComponent name="Historial de denuncias" icon={<FlagLogo />} />
                <AsideListComponent name="Ayuda" icon={<AskLogo />} />
                <AsideListComponent name="Enviar Sugerencias" icon={<SuggestionsLogo />} />
            </div>
            <Footer />
        </AsideStyled>
    );
};

export default Aside;
