import React from "react";

import { Card } from "./Dashboard.page.styles";

const Dashboard = () => {
  return (
    <>
      <div className="grd grd-cl-4">
        <Card>
          <h3 className="f-size-xxlrg center-align primary-color light-txt">
            0
          </h3>
          <p className="f-size-med center-align">Messages Sent</p>
        </Card>
        <Card>
          <h3 className="f-size-xxlrg center-align primary-color light-txt">
            0
          </h3>
          <p className="f-size-med center-align">Chats</p>
        </Card>
        <Card>
          <h3 className="f-size-xxlrg center-align primary-color light-txt">
            0
          </h3>
          <p className="f-size-med center-align">Clients</p>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
