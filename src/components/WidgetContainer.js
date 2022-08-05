import Widget from './Widget';
/**
 * Контейнер нижних списков
 * 
 */

function WidgetContainer(props) {

    return (
        <div className="main-container MediaContainer">
            <Widget name="Погода">
                <p>+17, утром +17, днем +20</p>
            </Widget>
            <Widget name="Поcещаемое">
                <ul>
                    <li>Недвижимость - о сталинках</li>
                    <li>Маркет - люстры и светильники</li>
                    <li>Авто.ру - привод 4х4 до 500 000</li>
                </ul>
            </Widget>
            <Widget name="Карта Германии">
                <p>Расписания</p>
            </Widget>
            <Widget name="Телепрограмма">
                <ul>
                    <li>02:00 ТНТ.Best</li>
                    <li>02:15 Джинглики</li>
                    <li>02:25 Наедине со всеми</li>
                </ul>
            </Widget>
            <Widget name="Эфир">
                <ul>
                    <li>Управление как искусство (Успех)</li>
                    <li>Ночь. Мир в это время (earthTV)</li>
                    <li>Андрей Воз.. (Совершенно секретно)</li>
                </ul>
            </Widget>
        </div>
    )
}

export default WidgetContainer;