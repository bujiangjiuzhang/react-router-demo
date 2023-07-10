**前言：前端路由是路径和组件一一对应关系。**
## 1）react-router-dom的使用
1、导入react-router-dom中的createBrowserRouter和RouterProvider
2、使用创建路由对应关系router，并将其渲染到页面
```vue
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>111</div>
    )
  },
  {
    path: '/login',
    element: (
      <div>222111</div>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

```
## 2）路由的两种模式
##### 1、createBrowserRouter是history模式的路由
##### 2、createHashRouter是hash模式的路由
底层原理：
（1）history模式的路由底层是history+pushState
（2）hash模式路由的底层是监听hashcchange事件
## 3）编程式导航
##### 1、使用useNavigate钩子函数实现跳转
```vue
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()
    
    const goTo = () => {
        navigate('/about')
    }

    return (
        <div>
            Home
            <button onClick={goTo}>跳转到about</button>
        </div>
    )
}

export default Home
```
直接替换路径：
`navigate("/about", { replace: true });`
## 4）路由传参
##### （1）路由传参方式一：searchParams
跳转：直接路由后添加参数
`navigate("/about?id=123", { replace: true });`
获取参数：通过useSearchParams钩子函数
```vue
import { useSearchParams } from "react-router-dom";

function About() {
  const [params] = useSearchParams();
  console.log('params', params.get('id'))
  return <div>About</div>;
}

export default About;

```
##### （2）路由传参方式二：params传参
跳转：
1、路由配置时添加动态参数
```vue
{
    path: '/about/:id',
    element: <About />
}
```
2、路径中直接添加参数
`navigate('/about/111')`
获取参数：通过useParams钩子函数
```vue
import { useParams } from "react-router-dom";

function About() {
const params = useParams()
console.log('params', params)
  return <div>About</div>;
}

export default About;

```
## 5）二级路由
##### 1、router中使用children来配置二级路由对应关系
```vue
{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: 'article',
            element: <Article />
        },
        {
            path: 'content',
            element: <Content />
        }
    ]
  }
```
##### 2、页面上使用<Link />内置组件实现跳转，使用<Outlet />内置组件作为占位符来展示二级路由对应组件
```vue
import { Link, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>
        Layout =================
        <h2>进行二级路由切换</h2>
        <div>
          <Link to="/article">article</Link>
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

```
##### 	3、二级路由希望设置某个组件默认展示，设置index:true
```vue
children: [
        {
            index: true,
            // path: 'article',
            element: <Article />
        },
        {
            path: 'content',
            element: <Content />
        }
    ]
```
##### 	4、设置404页面
在路由配置的最后加上404页面的配置
```vue
{
    path: '*',
    element: <NotFind />
}
```
