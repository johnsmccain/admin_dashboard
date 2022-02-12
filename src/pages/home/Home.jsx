import React from "react";
import "./home.scss";
import Cards from "../../components/cards/Cards";
import Chart from "../../components/chart/Chart";
import { chart_data } from "../../dummyData";
import WIdgets from "../../components/widgets/WIdgets";
const Home = () => {
  return (
    <div className="home">
      <Cards />
      <Chart
        data={chart_data}
        dataKey="Active Users"
        grid
        title="sales analytics"
      />
      <WIdgets />
    </div>
  );
};

export default Home;
