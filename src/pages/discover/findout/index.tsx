
import FixedTopBar from "@/components/FixedTopBar";
import NavBarBack from "@/components/NavBarBack";
import { Card, Empty, List, Popup, SearchBar, Space } from "antd-mobile";
import { useEffect, useRef, useState } from "react";
import { ILocalPoint, IPointInfo, ISearchResult } from "./interface";
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import './index.less'

const ak = 'GGU78ARpu8VGeeGKerdhk5pd';

const loadBMap = (): Promise<string> => {
  const baiduMapId = 'baidu-map'
  return new Promise((resolve)=>{
    // 如果资源已经加载过一次，就不需要再次加载了
    if (document.getElementById(baiduMapId) ) {
      resolve('ok')
      return;
    }
    const script = document.createElement('script');
    script.id = baiduMapId
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', `//api.map.baidu.com/getscript?type=webgl&v=1.0&ak=${ak}&services=&t=${(new Date()).valueOf()}`)
    script.addEventListener('load', ()=>{
      resolve('ok')
    })
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', '//api.map.baidu.com/res/webgl/10/bmap.css');
    document.querySelector('head')?.appendChild(script);
    document.querySelector('head')?.appendChild(link);
  })
}

const DiscoverFindout = () => {
  const mapPoint = useRef(null);
  const mapSearch = useRef(null);
  const [ titleBarClassName, setTitleBarClassName ] = useState<string>('show');
  const [ map, setMap ] = useState<BMapGL.Map>();
  const [ local, setLocal ] = useState<BMapGL.LocalSearch>();
  const [ key, setKey ] = useState<string>();
  const [ searchList, setSearchList ] = useState<IPointInfo[]>();
  const [ showPopup, setShowPopup ] = useState<boolean>(false);
  const [ localPoint, setLocalPoint ] = useState<ILocalPoint>(()=>{
    const lastPoint = window.localStorage.getItem('localPoint');
    if (lastPoint){
      return  JSON.parse(lastPoint);
    }
    return {
      lng: 116.82425,
      lat: 39.95127
    }
  });
  useEffect(()=>{
    if(showPopup){
      setTitleBarClassName('findout-title findout-map-hiddend')
    }else{
      setTitleBarClassName('findout-title findout-map-show')
    }

  }, [showPopup])

  // 初始化 BmapGL
  useEffect(()=>{
    loadBMap().then(()=>{
      const map = new BMapGL.Map(mapPoint.current);
      // 设置Map
      setMap(map);
      // 设置 Local
      setLocal(new BMapGL.LocalSearch(map, {
        onSearchComplete: (result: ISearchResult) => {
          setShowPopup(result?._pois?.length > 0)
          setSearchList(result?._pois);
        },
        pageCapacity: 15
      }));

    })
  }, []);

  useEffect(()=>{
    if (map) {
      map?.centerAndZoom(new BMapGL.Point(localPoint.lng, localPoint.lat), 15);
      map?.enableScrollWheelZoom(true);
      const point = new BMapGL.Point(localPoint.lng, localPoint.lat);
      const marker = new BMapGL.Marker(point);
      marker.addEventListener("click", function(){
        alert("您点击了标注");
      });      // 创建标注
      map?.addOverlay(marker);
    }
  }, [map, localPoint])

  useEffect(()=>{
    if (local && key ){
      local?.search(key)
    }
  }, [local, key])

  useEffect(()=>{
    loadBMap()
  }, [])

  return <>
    <FixedTopBar className={titleBarClassName}>
      <NavBarBack title='看一看'></NavBarBack>
    </FixedTopBar>
    <div className='layout-scroll-content' ref={mapPoint}></div>
    <div ref={mapSearch}></div>
    <Popup
      visible={true}
      position={'bottom'}

      bodyStyle={{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        height: showPopup ? '85vh' : '15vh',
        overflow: 'scroll',
        transition: 'height 500ms ease 0s'
       }}
      mask={false}
      onMaskClick={() => {
      }}
    >
      <Card>
        <Space direction='vertical' style={{ '--gap': '12px' }} block>
          <Space justify='center' block>
            { showPopup ?  <DownOutline onClick={()=>{
              setShowPopup(false)
            }} /> : <UpOutline onClick={()=>{
              setShowPopup(true)
            }} /> }
          </Space>
          <SearchBar placeholder='请填写地址' onSearch={(value: string)=>{
            setKey(value)
          }}
          onClear={()=>{
            setSearchList([])
          }}
          onFocus={()=>{
            setShowPopup(true)
          }}
          onBlur={(value: any)=>{
            console.log(value)
            setShowPopup(true)
          }} />

          { !searchList ||  searchList?.length === 0 ? <Empty description='暂无数据' /> :
            <List>
              { searchList?.map((item: IPointInfo)=>(
                <List.Item key={item.uid} description={item.address} onClick={()=>{
                  setLocalPoint(item.point)
                  window.localStorage.setItem('localPoint', JSON.stringify(item.point))
                  setShowPopup(false)
                }}>
                  {item.title}
                </List.Item>
              ))}

            </List>
          }
        </Space>

      </Card>
    </Popup>
  </>
}

export default DiscoverFindout;
