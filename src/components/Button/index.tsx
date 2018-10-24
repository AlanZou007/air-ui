import * as React from 'react';
import classnames from 'classnames';

import './index.less'
import {MouseEventHandler} from "react";

export interface IButton {
    type?: string
    btnType?: string, // primary, ghost, success, warning, error
    long?: boolean,
    shape?: string  // circle, square
    size?: string,
    loading?: boolean,
    disabled?: boolean,
    className?: string,
    style?: React.CSSProperties,
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

class Button extends React.Component<IButton, any> {
    static defaultProps = {
        btnType: 'primary',
        long: false,
        loading: false,
        shape: 'square',
        size: 'small',
        disabled: false
    };

    render() {
        const {onClick, style ,className, type, children, long, loading, btnType, size, shape, disabled, ...restProps} = this.props;
        const classString =  classnames('air-btn', className,
            {
                'air-btn-long': long,
                'air-btn-loading': loading,
                'air-btn-primary': btnType === 'primary',
                'air-btn-ghost': btnType === 'ghost',
                'air-btn-success': btnType === 'success',
                'air-btn-warning': btnType === 'warning',
                'air-btn-error': btnType === 'error',
                'air-btn-circle': shape === 'circle',
                'air-btn-large': size === 'large',
                'air-btn-small': size === 'small',
                'air-btn-disabled': disabled,
            });

        return (
            <a
                role='button'
                style={style}
                className={classString}
                type={type}
                onClick={disabled ? undefined : onClick}
                {...restProps}>
                {
                    loading &&
                        <span className='air-btn-loading'>
                            <span className='air-btn-loading-inner' />
                        </span>
                }
                {children}
            </a>
        )
    }
}

export default Button;

