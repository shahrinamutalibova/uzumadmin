import React, { useState, useEffect } from 'react';
import { Column ,Pie } from '@ant-design/plots';

const DemoColumn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: '城市',
    yField: '销售额',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.2,
    },
  };

  return (
    <div   style={{color: '#fff'}}> <div style={{color: '#fff'}}>

    <h2> Dashboard </h2>
  </div>
  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",color:"#705fff"}}>
    <div style={{width:"24%",height:"80px",background:"white",borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <h3>Products</h3>
    </div>
    <div style={{width:"24%",height:"80px",background:"white",borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <h3>Staffs</h3>
    </div>
    <div style={{width:"24%",height:"80px",background:"white",borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <h3>Users</h3>
    </div>
    <div style={{width:"24%",height:"80px",background:"white",borderRadius:"3px",display:"flex",alignItems:"center",justifyContent:"center",gap:"20px"}}>
        <h3>Products</h3>
    </div>
    </div>
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:"12px"}}>
  <Column {...config} style={{height:"66vh",width:"67%",background:"white",padding:"20px",borderRadius:"5px",marginTop:"10px"}} />  <Column {...config} style={{height:"66vh",width:"32%",background:"white",padding:"20px",borderRadius:"5px",marginTop:"10px"}} />
  </div>
    </div>
  )
};

export default DemoColumn
