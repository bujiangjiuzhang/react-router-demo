import { Link, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  // const navigate = useNavigate();

  // const goTo = () => {
  //   // navigate("/about?id=123", { replace: true });
  //   navigate('/about/111')
  // };

  return (
    <div>
      <div>
        Layout =================
        <h2>进行二级路由切换</h2>
        <div>
          <Link to="/">article</Link>
          ++++++++++++
          <Link to="/content">content</Link>
        </div>
      </div>
      <div>
        这里是二级路由出口
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Layout;
