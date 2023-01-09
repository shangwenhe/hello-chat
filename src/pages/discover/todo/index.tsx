
import FixedTopBar from "@/components/FixedTopBar";
import NavBarBack from "@/components/NavBarBack";
import { useModel } from "@umijs/max";
import { List, SearchBar, Space } from "antd-mobile";

const DiscoverSearch = () => {
  const { todoList, setTodoList } = useModel('todo');

  const addTodo = (value: string) => {
    setTodoList([ { name: value, time: (new Date()).valueOf(), description: ""}, ...todoList]);
  }
  return <>
    <FixedTopBar>
      <NavBarBack title='计划列表'></NavBarBack>
    </FixedTopBar>
    <Space className='layout-scroll-content' direction='vertical' block style={{ '--gap': '1em', backgroundColor: "var(--adm-color-box)" }}>
      <SearchBar placeholder='请输入内容' onSearch={addTodo} />
      <List header='计划列表'>
        { todoList.map((item, index)=> (<List.Item key={index} title={item.name}>{item.description}</List.Item>) )}
      </List>
    </Space>
  </>
}

export default DiscoverSearch;
