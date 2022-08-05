import Search from "./Search";
import MainMenu from "./MainMenu";
import AdvBanner from "./AdvBanner";

/**
 * Контейнер меню, строки поиска и рекламного баннера
 * 
 */

 function SearchContainer(props) {

    return (
        <div  className="main-container">
            <MainMenu/>
            <Search/>
            <p> Найдется все. Например, <a href="">фаза луны сегодня</a></p>
            <AdvBanner imgSrc="https://sun9-9.userapi.com/c638716/v638716773/2bc56/OLezra3fzm0.jpg" imgStyle={{maxWidth: "100%", maxHeight: "150px"}}/>
        </div>
    )
}

export default SearchContainer;