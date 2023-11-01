import React, { PureComponent, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { FaUsers } from "react-icons/Fa";
import { BsFillPostcardHeartFill } from "react-icons/Bs";
import { AiFillFolderAdd } from "react-icons/Ai";
import { BiSolidLogOut } from "react-icons/Bi";
import { BiSolidDashboard } from "react-icons/Bi";
import { BiSolidBarChartSquare } from "react-icons/Bi";
import { FaComments } from "react-icons/Fa";
import { Link } from "react-router-dom";

export default function LineCharts() {
  const [postData, setPostData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch total posts
    fetch("https://node-app-plsi.onrender.com/api/klab/blog/read")
      .then((response) => response.json())
      .then((data) => {
        // console.log("post-views", data);
        setPostData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    // Fetch total users

    fetch("https://node-app-plsi.onrender.com/api/klab/user/read")
      .then((response) => response.json())
      .then((data) => {
        console.log("users", data);
        setUserData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    // Fetch total comments
    fetch("https://node-app-plsi.onrender.com/api/klab/comment/read")
      .then((response) => response.json())
      .then((data) => {
        // console.log("comments", data);
        setCommentData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  //   console.log("posts", postData);
  const postNumber = postData.length;
  console.log("posts", postNumber);

  const commentLength = commentData.length;
  console.log("comment", commentLength);

  const userNumber = userData.length;
  console.log("users", userNumber);

  const data = [
    {
      name: "TotalPosts",
      uv: postNumber,
    },
    {
      name: "TotalUsers",
      uv: userNumber,
    },
    {
      name: "TotalComments",
      uv: commentLength,
    },
  ];

  const data01 = [
    { name: "TotalPosts", value: postNumber },
    { name: "TotalUsers", value: userNumber },
    { name: "TotalComments", value: commentLength },
  ];
  const data02 = [
    { name: "TotalPosts", value: postNumber },
    { name: "TotalUsers", value: userNumber },
    { name: "TotalComments", value: commentLength },
  ];

  const data03 = [
    {
      name: "TotalPosts",
      uv: postNumber,
    },
    {
      name: "TotalUsers",
      uv: userNumber,
    },
    {
      name: "TotalComments",
      uv: commentLength,
    },
  ];

  return (
    <div className="dashboard-all-div">
      <div className="numbers">
        <div className="number-dashboard">
          <Link to="/Viewblog">
            <i className="icons-i-dashboard">
              <BiSolidDashboard className="user-icon-dashboard" />
              DashBoard
            </i>
          </Link>
        </div>

        <div className="number-users">
          <Link to="/LineCharts">
            <i className="icons-i">
              <BiSolidBarChartSquare className="user-icon" />
              Analytics
            </i>
          </Link>
        </div>

        <div className="number-users">
          <Link to="/dashboard">
            <i className="icons-i">
              <AiFillFolderAdd className="user-icon" />
              Add Post
            </i>
          </Link>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <FaUsers className="user-icon" />
            Number of Users :
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <FaComments className="user-icon" />
            Number of Comments :
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <BsFillPostcardHeartFill className="user-icon" />
            <span className="icons-i">
              {" "}
              Number of Posts: <span className="post-number">yes</span>
            </span>
          </i>
        </div>

        <div className="number-users">
          <i className="icons-i">
            <BiSolidLogOut
              className="user-icon"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/Signin");
              }}
            />
            LogOut
          </i>
        </div>
      </div>

      <div className="charts">
        <div className="line-chart">
          {/* <h3 className="chart-heading">LineChart</h3> */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#0000FF"
                activeDot={{ r: 8 }}
              />
              {/* <Line type="monotone" dataKey="pv" stroke="#ff0000" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="line-chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="line-chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data03}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}