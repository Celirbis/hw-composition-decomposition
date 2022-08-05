/**
 * Конкретная новость
 */

 function NewsInstance(props) {

    const { event } = props;

    return (
        <div className="block2-style" style={{display: "flex"}}>
            <img src=""/>
            <p>{event.title}</p>
        </div>
    )
}

export default NewsInstance;