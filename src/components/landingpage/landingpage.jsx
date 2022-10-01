import React from "react";
import { Button } from "antd";
import BuyPanel from "../buypanel/buypanel";
import AdminLogin from "../admin/adminlogin/adminlogin";
import AddAdmin from "../admin/addadmin/addadmin";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <BuyPanel />
            <AdminLogin />
            ---------------------------------------- Add Admin
            -----------------------------
            <AddAdmin />
          </div>
        </div>
        from the main landing page
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }
}

export default LandingPage;
