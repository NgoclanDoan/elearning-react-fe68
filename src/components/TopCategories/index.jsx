import React, { Component } from "react";
import ItemCategory from "./ItemCategory";
import {
  DatabaseOutlined,
  DesktopOutlined,
  AndroidOutlined,
  FundOutlined,
  RocketOutlined,
  PartitionOutlined,
} from "@ant-design/icons";

export default class TopCategories extends Component {
  render() {
    return (
      <div className="container w-full mx-auto mb-9">
        <h1 className="text-2xl font-bold">Top categories</h1>
        <div className="grid grid-cols-4 gap-7  mt-4">
          <ItemCategory
            tenDanhMuc="Lập trình Backend"
            svg={<DatabaseOutlined />}
          />
          <ItemCategory tenDanhMuc="Thiết kế Web" svg={<DesktopOutlined />} />
          <ItemCategory
            tenDanhMuc="Lập trình di động"
            svg={<AndroidOutlined />}
          />
          <ItemCategory
            tenDanhMuc="Lập trình Front end"
            svg={<FundOutlined />}
          />
          <ItemCategory
            tenDanhMuc="Lập trình Full Stack"
            svg={<RocketOutlined />}
          />
          <ItemCategory
            tenDanhMuc="Tư duy lập trình"
            svg={<PartitionOutlined />}
          />
        </div>
      </div>
    );
  }
}
