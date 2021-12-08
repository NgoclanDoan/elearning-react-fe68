import { Tabs } from "antd";
import SlickSlider from "../SlickSlider/SlickSlider";
import SliderItem from "../SlickSlider/SliderItem";
import khoaHocApi from "apis/khoaHocApi";
import { useEffect, useState } from "react";
import "./TabPane.css";
const { TabPane } = Tabs;

const TabPaneCourses = () => {
  const [keyChange, setKeyChange] = useState("BackEnd");
  const [listCourses, setListCourses] = useState([]);

  useEffect(() => {
    khoaHocApi
      .layKhoaHocTheoDanhMuc(keyChange)
      .then((res) => setListCourses(res.data));
  }, [keyChange]);

  return (
    <Tabs defaultActiveKey="BackEnd" onChange={(key) => setKeyChange(key)}>
      <TabPane tab="Lập trình Backend" key="BackEnd">
        <SlickSlider listCourses={listCourses} />
      </TabPane>
      <TabPane tab="Thiết kế Web" key="Design">
        <SlickSlider listCourses={listCourses} />
      </TabPane>
      <TabPane tab="Lập trình di động" key="DiDong">
        <SlickSlider listCourses={listCourses} />
      </TabPane>
      <TabPane tab="Lập trình Front end" key="FrontEnd">
        <SlickSlider listCourses={listCourses} />
      </TabPane>
      <TabPane tab="Lập trình Full Stack" key="FullStack">
        <SlickSlider listCourses={listCourses} />
      </TabPane>
      <TabPane tab="Tư duy lập trình" key="TuDuy">
        <SlickSlider listCourses={listCourses} />
      </TabPane>
    </Tabs>
  );
};

export default TabPaneCourses;
