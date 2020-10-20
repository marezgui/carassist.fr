import React from "react";
import { SvgIcon } from '@material-ui/core';

interface Props {
  fill?: string,
  fontSize?: string
}

function Icon({ fill, fontSize }: Props) {
  return (
    <SvgIcon style={{ fontSize: fontSize }}>
        <title>Dépannage</title>
        <g>
            <path
                fill={fill}
                d='M7.36 10.125h-.985v1.5h2.738zm0 0M3.375 14.25a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0M10.125 14.25a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0'
            />
            <path
                fill={fill}
                d='M1.5 13.875h.445a1.115 1.115 0 012.11 0h4.64a1.115 1.115 0 012.11 0h.445v-.969l-.527-.531H1.5zm0 0M5.625 10.125h-1.41a.368.368 0 00-.336.207l-.649 1.293h2.395zm0 0M21 15h1.5v.75H21zm0 0M16.5 9.375v3.375h5.727l-1.72-3.18a.375.375 0 00-.331-.195zm0 0'
            />
            <path
                fill={fill}
                d='M22.125 18.75a.375.375 0 00.375-.375V18h-1.125v-.75H22.5v-.75H21a.75.75 0 01-.75-.75V15a.75.75 0 01.75-.75h1.5v-.71c0-.013-.004-.028-.004-.04h-6.371a.375.375 0 01-.375-.375v-3.75H15v9.375h1.16a2.244 2.244 0 012.215-1.875c1.098 0 2.035.793 2.215 1.875zM17.25 15h-1.5v-.75h1.5zm0 0'
            />
            <path
                fill={fill}
                d='M18.375 17.625a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm.375 1.875H18v-.75h.75zm0 0M14.25 18.75v-2.625H1.5v2.625h.785A2.244 2.244 0 014.5 16.875c1.098 0 2.035.793 2.215 1.875zm0 0M14.25 9.082L3.203 3.934l-.316.68L14.25 9.91zm0 0M14.25 10.738l-.75-.347v4.984h.75zm0 0'
            />
            <path
                fill={fill}
                d='M4.5 17.625a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm.375 1.875h-.75v-.75h.75zm0 0M2.625 9A1.125 1.125 0 011.5 7.875h.75a.375.375 0 10.375-.375.375.375 0 01-.375-.375V5.281H3v1.532c.516.183.828.71.734 1.253-.093.54-.562.934-1.109.934zm0 0'
            />
        </g>
    </SvgIcon>
  );
}

Icon.defaultProps = {
  fill: '#000',
  fontSize: '48px'
}

export default Icon;
