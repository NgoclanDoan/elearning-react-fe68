import { Tabs } from "antd";
import SlickSlider from "../SlickSlider/SlickSlider";
import "./TabPane.css";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const TabPaneCourses = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Bussiness" key="1">
      <SlickSlider />
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      <SlickSlider />
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      <SlickSlider />
    </TabPane>
  </Tabs>
);

export default TabPaneCourses;
