import * as svg from './svg'
import React from 'react'

export type IconSvgType = keyof typeof svg
export type IconSvgProps = {
    name: IconSvgType
    className?: string
    style?: React.CSSProperties
}

function IconSvg({ name, className, style}: IconSvgProps) {
    return React.createElement(svg[name], {
        className,
        style,
    })
};

export default IconSvg
