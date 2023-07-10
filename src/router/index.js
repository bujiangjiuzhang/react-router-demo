import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Article from '../pages/Article'
import Content from '../pages/Content'
import NotFind from '../pages/NotFind'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
  },
  {
    path: '/about/:id',
    element: <About />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '*',
    element: <NotFind />
  }
])

export default router