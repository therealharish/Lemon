import React, {useCallback, useLayoutEffect, useState} from 'react'
import '../pages/home.scss'

const getDimensions = node => {
    const rect = node.getBoundingClientRect()
    return {
        width: rect.width,
        height: rect.height
    }
}

const useSize = () => {
    const [dimensions, setDimensions] = useState({width: 0, height: 0})
    const [node, setNode] = useState(null)

    const ref = useCallback(node => {
        setNode(node)
    }, [])

    useLayoutEffect(() => {
        if (node) {
            const measure = () => setDimensions(getDimensions(node))
            measure()
        }
    }, [node])

    return [ref, dimensions]
}

const Media = ({url, active, x, y}) => {
    const [ref, {width, height}] = useSize()
    return ( 
        <div>
            <img 
                className = {active ? "is-active" : undefined}
                ref = {ref}
                src = {url} 
                alt = "sample"
                style = {{
                    transform: `translate(${x-width/2}px, ${y-height/2}px)`
                }}
            />

        </div>
     );
}
 
export default Media;