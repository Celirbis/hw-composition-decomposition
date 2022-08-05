/**
 * Пункт меню над поисковой строкой
 */

 function MenuItem(props) {

    const {item} = props;

    return (
        <li className="block2-style">
            {item.name}
        </li>
    )
}

export default MenuItem;