/**
 * Элемент виджетов в нижней части
 */

function Widget(props) {

    const { name } = props;

    return (
        <div className="block1-style">
            <p><a href="">{name}</a></p>
            {props.children}
        </div>
    )
}

export default Widget;