import * as React from 'react';
import {Cell, Panel, CellGroup} from "src/components";
import {RouteComponentProps} from 'react-router-dom'

class ListContainer extends React.Component<RouteComponentProps, any> {
    render() {
        return (
            <div>
                <Panel title='单行列表'>
                    <Cell title='单行列表'  isLink/>
                </Panel>
                <Panel title='单行列表'>
                    <Cell title='单行列表' value='详细信息'  />
                </Panel>
                <Panel title='单行列表'>
                    <CellGroup>
                        <Cell title='单行列表' label='附加信息' value='详细信息' />
                    </CellGroup>
                </Panel>
                <Panel title='带icon列表'>
                    <CellGroup>
                        <Cell title='单行列表' value='详细信息' icon={<i className='air-icon air-icon-like_fill' />}>
                        </Cell>
                    </CellGroup>
                </Panel>
                <Panel title='跳转到首页列表'>
                    <CellGroup>
                       <Cell title='首页' isLink url='/home' onClick={this.props.history.push} />
                    </CellGroup>
                </Panel>
                <Panel title='Cell 组'>
                    <CellGroup>
                        <Cell title='只显示箭头' isLink />
                        <Cell title="单行列表" label="附加描述" value="详细信息" />
                        <Cell title='首页' isLink url='/home' onClick={this.props.history.push} />
                        <Cell title="表单"  >
                            <input  type="digit" placeholder="带小数点的数字键盘"/>
                        </Cell>
                    </CellGroup>
                </Panel>
            </div>
        )
    }
}

export default ListContainer;

