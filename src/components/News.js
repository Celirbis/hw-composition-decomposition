import DateNow from "./DateNow";
import NewsFilter from "./NewsFilter";
import NewsInstance from "./NewsInstance";

/**
 * Меню и список новостей
 */

function News(props) {

    const NewsList = [{title: "Раз новость"}, {title: "Два новость"}, {title: "Еще какая-то новость"}, {title: "Странная новость"}, {title: "Последняя отображаемая в макете новость"}];
    const filter = "Now";

    return (
        <div className="block1-style">
            <div className="NewsFilter-list"> 
            <NewsFilter name = "Сейчас в СМИ"/>
            <NewsFilter name = "в Германии"/>
            <NewsFilter name = "Рекомендуем"/>
            <DateNow />
            </div>
            {NewsList.map(o => <NewsInstance event={o}/>)}
        </div>
    )
}

export default News;