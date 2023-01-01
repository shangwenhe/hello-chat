import { history } from "@umijs/max";
import { Avatar, Button, Grid, List, NavBar, SearchBar, Space, Tag, Toast } from "antd-mobile";
import { useState } from "react";
import {
  ClockCircleOutline,
  SearchOutline,
  DeleteOutline
} from 'antd-mobile-icons'

const SearchPage = () => {

  const [ value, onChange] = useState<string>('');
  const onCancel = () => {
    history.back();
  }

  const right = (
    <DeleteOutline onClick={()=>{
      Toast.show('删除最近搜索')
    }} fontSize={16} />
  )

  const defaultInfo = () => {
    return <>
    <List header={
      <NavBar
        back="最近搜索"
        backArrow=''
        style={{'--height': '21px', paddingLeft: 0}}
        onBack={onCancel}
        right={right}
        ></NavBar>
    }>
      <List.Item>
        <Grid columns={2} gap={8}>
        <Grid.Item>
            <Button size='mini' fill='none'>
              <Space>
                <ClockCircleOutline />
                <span>搜索</span>
              </Space>
            </Button>
          </Grid.Item>
          <Grid.Item>
            <Button size='mini' fill='none'>
              <Space>
                <ClockCircleOutline />
                <span>感谢医护人员</span>
              </Space>
            </Button>
          </Grid.Item>
          <Grid.Item>
            <Button size='mini' fill='none'>
              <Space>
                <ClockCircleOutline />
                <span>搜索测试</span>
              </Space>
            </Button>
          </Grid.Item>
          <Grid.Item>
            <Button size='mini' fill='none'>
              <Space>
                <ClockCircleOutline />
                <span>搜索</span>
              </Space>
            </Button>
          </Grid.Item>
          <Grid.Item>
            <Button size='mini' fill='none'>
              <Space>
                <ClockCircleOutline />
                <span>感谢医护人员</span>
              </Space>
            </Button>
          </Grid.Item>
          <Grid.Item>
            <Button size='mini' fill='none'>
              <Space>
                <ClockCircleOutline />
                <span>搜索测试</span>
              </Space>
            </Button>
          </Grid.Item>

        </Grid>
      </List.Item>
    </List>
    <List header='搜索发布'>
      <List.Item onClick={()=>{}}>
        2023新贺词
      </List.Item>
      <List.Item onClick={()=>{}}>
        感谢医护人员
      </List.Item>
    </List>
    </>
  }
  const searchContent = () => {
    return <>
    <List header='联系人'>
    <List.Item
        className='avatar-item'
        prefix={<Avatar src='' style={{ '--size': '48px' }}   />}
        description={
          <>
            昵称: 华北<br/>
            地区: 河北 廊坊
          </>
        }
      >
        Novalee Spicer xsxsxsx
      </List.Item>
      <List.Item
        className='avatar-item'
        prefix={<Avatar src='' style={{ '--size': '48px' }}   />}
        description={
          <>
            昵称: 华北<br/>
            地区: 河北 廊坊
          </>
        }
      >
        Novalee Spicer xsxsxsx
      </List.Item>
    </List>
    <List header='群聊'>
      <List.Item
        className='avatar-item'
        prefix={<Avatar src='' style={{ '--size': '48px' }}   />}
        description={
          <>
            地区: 河北 廊坊
          </>
        }
      >
        华北(10人)
      </List.Item>
    </List>
    <List header='聊天记录'>
      <List.Item
        className='avatar-item'
        prefix={<Avatar src='' style={{ '--size': '48px' }}   />}
        description={
          <>
            地区: 河北 廊坊
          </>
        }
      >
        华北(10人)
      </List.Item>
      <List.Item
        className='avatar-item'
        prefix={<Avatar src='' style={{ '--size': '48px' }}   />}
        description={
          <>
            地区: 河北 廊坊
          </>
        }
      >
        华北(10人)
      </List.Item>
    </List>
    <List header='查找账号'>
      <List.Item
        className='avatar-item'
        prefix={<Avatar src='' style={{ '--size': '48px' }}   />}
        description={
          <>
            地区: 河北 廊坊
          </>
        }
      >
        华北(10人)
      </List.Item>
      <List.Item prefix={<SearchOutline />} onClick={() => {}} arrow={false}>
        搜索顶面账单
      </List.Item>
      <List.Item prefix={<SearchOutline />} onClick={() => {}} arrow={false}>
        搜索顶面账单
      </List.Item>
      <List.Item prefix={<SearchOutline />} onClick={() => {}} arrow={false}>
        搜索顶面账单
      </List.Item>
    </List>
    </>
  }
  return <>
    <List>
      <List.Item>
      <SearchBar
        value={value}
        onChange={onChange}
        placeholder='请输入内容'
        showCancelButton={() => true}
        onCancel={onCancel} />
      </List.Item>
    </List>
    { value.length > 0 ? searchContent() : defaultInfo() }


  </>
}
export default SearchPage
