import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  BsCurrencyExchange,
  BsFillFilePostFill,
  BsFillDatabaseFill,
  BsBarChartFill,
  BsArrowUpShort,
  BsArrowDownShort,
  BsFillCaretDownFill,
} from "react-icons/bs";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  ////////////////////////////////////////////
  const chartdata = {
    datasets: [
      {
        data: [2, 6, 4],
        backgroundColor: ["#662d91", "#D8BFD8", "#FF69B4"],
        borderColor: ["#662d91", "#D8BFD8", "#FF69B4"],
      },
    ],
  };

  /////////////////////////////////////////////
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false, // Hide the toolbar with the Y-axis and background lines
      },
    },
    plotOptions: {
      bar: {
        horizontal: false, // Change to vertical bars
        dataLabels: {
          position: "top", // Display data labels above the bars
        },
        borderRadius: 10, // Add a border radius of 10px to the bars
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr", // April bar in blue
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false, // Hide X-axis border line
      },
    },
    grid: {
      show: false, // Hide the background grid lines
    },
    tooltip: {
      enabled: false, // Enable tooltips
    },
  };

  const series = [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 35, 70, 72, 88, 75], // Data values for each month
      color: "#0074d9", // Blue color for all bars
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-icon-div">
            <BsCurrencyExchange className="card-icon" />
          </div>
          <div className="card-right">
            <span
              className="headone
            "
            >
              Earning
            </span>
            <span className="centertext">$198k</span>
            <div>
              <span className="green">
                <BsArrowUpShort />
                37.8%
              </span>{" "}
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-icon-div">
            <BsFillFilePostFill className="card-icon" />
          </div>
          <div className="card-right">
            <span
              className="headone
            "
            >
              Earning
            </span>
            <span className="centertext">$2.4k</span>
            <div>
              <span className="red">
                <BsArrowDownShort />
                17.2%
              </span>{" "}
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-icon-div">
            <BsFillDatabaseFill className="card-icon" />
          </div>
          <div className="card-right">
            <span
              className="headone
            "
            >
              Earning
            </span>
            <span className="centertext">$3.2k</span>
            <div>
              <span className="red">
                <BsArrowDownShort />
                2.8%
              </span>{" "}
              this month
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-icon-div">
            <BsBarChartFill className="card-icon" />
          </div>
          <div className="card-right">
            <span
              className="headone
            "
            >
              Earning
            </span>
            <span className="centertext">$98k</span>
            <div>
              <span className="green">
                <BsArrowUpShort />
                11%
              </span>{" "}
              this week
            </div>
          </div>
        </div>
      </div>
      <section className="section2">
        <div className="bars">
          <div className="commonflex barhead">
            {" "}
            <div>
              {" "}
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Overview
                <br />
                <span style={{ fontSize: "10px", opacity: "0.6" }}>
                  Montly Earnings
                </span>
              </span>
            </div>
            <div
              className="commonflex"
              style={{ fontSize: "13px", cursor: "pointer" }}
            >
              Quaterly&nbsp; <BsFillCaretDownFill />
            </div>
          </div>

          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
        <div className="progressbar">
          <div>Customers</div>
          <div>Customers that buy products</div>
          <div className="textcenter">
            <div className="circle" style={{ width: "70%", height: "70%" }}>
              <Doughnut data={chartdata}></Doughnut>
            </div>
            <span> 65% Total New Customers</span>
          </div>
        </div>
      </section>

      <section className="section3">
        <table>
          <thead>
            <tr className="headtr">
              <th class="product-name">Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="product-name">
                Abstract 3D
                <span className="namespan">
                  Shop for the best abstract from our collection of exclusive
                </span>
              </td>
              <td className="instock">10 in stock</td>
              <td className="price">$10.00</td>
              <td className="instock">50</td>
            </tr>
            <tr>
              <td class="product-name">
                Sarphens illustrations
                <span className="namespan">
                  Shop for the best abstract from our collection of exclusive
                </span>
              </td>
              <td className="instock">32 in stock</td>
              <td className="price">$15.00</td>
              <td className="instock">30</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Home;
