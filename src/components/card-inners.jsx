/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const initialConfig = {
    moveIt: false,
    href: ''
}

const cardInners = (props) => {
    const [config, setConfig] = useState(initialConfig)
    const [render, setRender] = useState('');

    const { image, name, volume, area, options } = props

    const element = (move) => {
        const content = (
            <div className="card-body p-0">
                <img src={image} alt="Card Title" className="img-card w-100" />
                <div className="content">
                    <h5 className="fw-semibold mb-3">{name}</h5>
                    <span className="mx-1">{volume}</span>
                    <span className="mx-1">|</span>
                    <span className="mx-1">{area} M <sup>2</sup></span>
                </div>
            </div>
        )

        return move ? (
            <Link to={config.href} className="card rounded-4 overflow-hidden card-inners">
                {content}
            </Link>
        ) : (
            <div className="card rounded-4 overflow-hidden card-inners">
                {content}
            </div>
        )
    }

    useEffect(() => {
        setConfig((prevConfig) => ({ ...prevConfig, ...options }));
    }, [options]);
    
    useEffect(() => {
        console.log(config);
        setRender(element(config.moveIt))
    }, [config])

    return (
        render
    )
}

export default cardInners