const Section = (props) => {
    const isParallaxBg = props.isParallaxBg
    let parallaxClass = ""
    let url = ""
    let gradientColor = ""
    let style = {}

    if(isParallaxBg){
        parallaxClass = "bg-fixed w-full bg-bottom bg-cover bg-blend-overlay"
        url = props.urlImage
        gradientColor = props.gradientColor
        style = {
            backgroundImage: `${gradientColor}, url('${url}')`
        }
    }

    return (
        <section className={props.classesName + " " + parallaxClass} style={style} id={props.id}>
            {props.children}
        </section>
    )
}

export default Section