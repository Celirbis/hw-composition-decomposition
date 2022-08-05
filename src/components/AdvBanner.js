/**
 * Компонент какого-то рекламного баннера
 */

function AdvBanner(props) {

    const { imgSrc } = props;
    const { style } = props;
    const { imgStyle } = props;

    return (
        <div className="block1-style" style={style}>
            <img src={imgSrc} style={imgStyle}/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default AdvBanner;