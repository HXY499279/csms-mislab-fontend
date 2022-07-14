import React from 'react';
import { Home, Login } from "./page"
import { DescriptionWrapper } from './common'

const App = (props) => {
  let [id, pageSize] = [props.id, props.pageSize].map(String)

  return (
    <>
      <DescriptionWrapper title="用户列表" details="用户信息展示，可进行用户密码修改和删除用户操作">
        <div>
          home content
        </div>
      </DescriptionWrapper>
    </>
  );
};

export default App;