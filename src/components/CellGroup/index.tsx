import * as React from 'react';

import './index.less'

class CellGroup extends React.Component {
    render() {
        return (
            <div className="air-cell-group">
                {this.props.children}
            </div>
        )
    }
}

export default CellGroup;

