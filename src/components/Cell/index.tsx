import * as React from 'react';
import classnames from 'classnames';

import './index.less';

export interface ICell {
    title?: string | React.ReactElement<any>,
    label?: string,
    value?: string,
    className?: string,
    style?: React.CSSProperties,
    icon?: string | React.ReactElement<any>,
    key?: string,
    footer?: string | React.ReactElement<any>,
    space?: boolean,
    onClick?: (str: string) => void,
    isLink?: boolean,
    url?: string
}

class Cell extends React.Component<ICell, any> {
    static defaultProps = {
        space: false,
        isLink: false
    };

    onClick = () => {
        const {isLink, url, onClick} = this.props;
        if(isLink&&url&&onClick) {
            onClick(url)
        }
    };

    render() {
        const {isLink, key, title, label, value, className, icon, footer, space, children} = this.props;
        const classString = classnames('air-cell', className,
            {
                'air-cell-space': space,
                'air-cell-access': isLink
            });

        return (
            <div key={key} className={classString} onClick={this.onClick}>
                <div className='air-cell-icon'>
                    {icon}
                </div>
                <div className="air-cell-bd">
                    {
                        title && <div className={'air-cell-text'}>{title}</div>
                    }
                    {
                        label && <div className={'air-cell-desc'}>{label}</div>
                    }
                    {children}
                </div>
                <div className="air-cell-ft">
                    {
                        value && <div className="air-cell-ft-value">{value}</div>
                    }
                    {footer}
                </div>
            </div>
        )
    }
}

export default Cell;

