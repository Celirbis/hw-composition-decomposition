import MenuItem from "./MenuItem";
/**
 * Меню над поисковой строкой
 */

 function MainMenu(props) {

    const menuList = [{name: "Видео"}, {name: "Картинки"}, {name: "Новости"}, {name: "Карты"}, {name: "Маркет"}, {name: "Переводчик"}];

    return (
            <ul className="block1-style" style = {{display: "flex"}}>
                {menuList.map(o => <MenuItem item={o}/>)}
            </ul>
    )
}

export default MainMenu;