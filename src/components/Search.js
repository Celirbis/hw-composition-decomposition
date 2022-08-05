/**
 * Компонент поисковой строки
 */

function Search(props) {

    return (
        <form className="block1-style" style={{ display: "flex" }}>
            <input type="text" name="search" required style={{ width: "100%" }} />
            <input type="submit" value="Найти" />
        </form>
    )
}

export default Search;