import { useEffect, useState } from "react";
import axios from "axios";
import { Visibility } from "@material-ui/icons";

import "./widgetSm.css";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDBhZDI1Njc5OGExMDExMDZhMzFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjc0ODAwMSwiZXhwIjoxNjMyODM0NDAxfQ.XGAvUBySWgevVrkO6KzEcwgp2oMoTa5fAllLvGHveOE",
          },
        });
        setNewUsers(res.data);
      } catch (error) {}
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
