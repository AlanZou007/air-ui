import * as React from 'react';
import classnames from 'classnames';

import './index.less'

export interface IPanel {
    title?: string,
    hideTop?: boolean,
    hideBorder?: boolean,
    style?: React.CSSProperties,
    className?: string
}

class Panel extends React.Component<IPanel, any> {
    static defaultProps = {
        hideTop: false,
        hideBorder: false
    };

    render() {
        const {title, hideBorder, hideTop,  children, className, style} = this.props;
        const classString = classnames('air-panel', className);

        return (
            <div className={classString} style={style}>
                {
                    title &&
                        <div className={classnames('air-panel-title', {'air-panel-title-hide-top': hideTop})}>
                            {title}
                        </div>
                }
                <div className={classnames('air-panel-content', {'air-panel-without-border': hideBorder})}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Panel;

