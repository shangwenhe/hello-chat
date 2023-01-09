
import FixedTopBar from "@/components/FixedTopBar";
import NavBarBack from "@/components/NavBarBack";
import './index.less';
import { useModel } from "@umijs/max";
import { Dialog, Empty, List, NavBar, SearchBar, Space } from "antd-mobile";
import { DeleteOutline } from 'antd-mobile-icons'
import { useEffect } from "react";

const DiscoverSearch = () => {
  const { todoList, setTodoList } = useModel('todo');

  const addTodo = (value: string) => {
    setTodoList([ { name: value, time: (new Date()).valueOf(), description: ""}, ...todoList]);
  }

  useEffect(()=>{
    console.log('=====m,,,,===', todoList)
  }, [todoList])
  const showCaptcha = (index: number) => {
    return Dialog.confirm({
      title: "删除确认框",
      content: (
        <div>

        </div>
      ),
      onConfirm: () => {
        console.log("index", index)
        todoList.splice(index, 1)
        setTodoList([...todoList])
      }
    });
  }
  return <>
    <FixedTopBar>
      <NavBarBack title='计划列表'></NavBarBack>
    </FixedTopBar>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <SearchBar style={{'--background': '#fff', margin: '0 8px'}} placeholder='请添加计划' onSearch={addTodo} />
      { todoList && todoList.length > 0 ?
      <List header='计划列表' className="todo-list">
      { todoList.map((item, index)=> (
        <List.Item key={index}>
        <NavBar
          backArrow={item.name}
          style={{'--height': '21px', 'padding': '0px' }}
          right={<DeleteOutline onClick={()=>showCaptcha(index)} />} >
        </NavBar>
        <Space style={{'fontSize': '12px', color: 'var(--adm-color-weak)'}}>{ `${new Date(item.time).toLocaleDateString()} ${new Date(item.time).toLocaleTimeString()}` }</Space>
        </List.Item>
      ))}
    </List>
    : <Empty description='暂无数据' />
     }

    </Space>
  </>
}

export default DiscoverSearch;
