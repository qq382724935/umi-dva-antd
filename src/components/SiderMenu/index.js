/*
 * @Date: 2019-09-30 09:42:23
 * @LastEditors: 刘利军
 * @LastEditTime: 2019-09-30 13:47:38
 */
import 'rc-drawer/assets/index.css';
import React from 'react';
import Drawer from 'rc-drawer';
import SiderMenu from './SiderMenu';

const SiderMenuWrapper = props =>
  props.isMobile ? (
    <Drawer
      parent={null}
      level={null}
      // open={!props.collapsed}
      width="256px"
    >
      <SiderMenu {...props} collapsed={props.isMobile ? false : props.collapsed} />
    </Drawer>
  ) : (
      <SiderMenu {...props} />
    );

export default SiderMenuWrapper;
