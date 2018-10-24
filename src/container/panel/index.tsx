import * as React from 'react';
import {Panel} from 'src/components';

class PanelContainer extends React.Component {
    render() {
        return (
            <div>
                <Panel title='标题' hideTop>
                    <div style={{
                        padding: 15
                    }}>
                        头部距离为 0 的 Panel
                    </div>
                </Panel>
                <Panel title='标题'>
                    <div style={{
                        padding: 15
                    }}>
                        带有标题的 Panel
                    </div>
                </Panel>
                <Panel title='标题' hideBorder>
                    <div style={{
                        padding: 15
                    }}>
                        无边框的 Panel
                    </div>
                </Panel>
            </div>
        )
    }
}

export default PanelContainer;

