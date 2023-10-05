import '../styles/main.css'
import image from './collaborators.jpeg';
const Main = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">HeavenStylez</a>
            </div>
            <div className="aboutUs">
                <div className="border">
                    <img src={image} />
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec ultrices ornare fermentum. Nam aliquet turpis a viverra venenatis. Vestibulum varius lacus sit amet ligula venenatis pellentesque. Quisque nibh turpis, tincidunt eget risus sit amet, rutrum egestas libero. Nunc accumsan dignissim diam et dictum. Vivamus sed sodales orci.</h1>
                </div>
            </div>
            <div className="horizontal-scrolling-items">
                <div className="horizontal-scrolling-items__item item1"></div>
                <div className="horizontal-scrolling-items__item item2"></div>
            </div>
        </div>
    )
}

export default Main;