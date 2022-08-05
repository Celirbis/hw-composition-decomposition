import CurrencyInstance from "./CurrencyInstance";
/**
 * Список котировок
 */

function CurrencyList(props) {

    const currency = [{}, {}, {}];

    return (
        <div className="block1-style" style={{ display: "flex" }}>
            {currency.map(o => <CurrencyInstance currency={o} />)}
        </div>
    )
}

export default CurrencyList;