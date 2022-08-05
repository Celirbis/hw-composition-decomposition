import News from "./News";
import AdvBanner from "./AdvBanner";
import CurrencyList from "./CurrencyList";

/**
 * Контейнер новостей
 */

function NewsContainer(props) {

    return (
        <div className="NewsContainer main-container">
            <div>
                <News />
                <CurrencyList />
            </div>
            <AdvBanner imgSrc="https://avatars.mds.yandex.net/get-direct-picture/3928535/jGOSZdXvN_pRTiMkTo-y0g/orig" style={{ maxWidth: "300px" }}>
                <a href="">Работа над ошибками</a>
                <p>Смотрите и запоминайте</p>
            </AdvBanner>
        </div>
    )
}

export default NewsContainer;