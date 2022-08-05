/**
 * Заголовки списков новостей
 */

function NewsFilter(props) {

    const { name } = props;

    return (
        <div className="block2-style">
            <a href="">{name}</a>
        </div>
    )
}

export default NewsFilter;