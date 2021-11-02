import * as React from "react"
import {Link, graphql} from "gatsby"
import "/Users/Venus Maletzky/gatsby-blog-starter-main/src/normalize.css"
import "/Users/Venus Maletzky/gatsby-blog-starter-main/src/style.css"

const Layout = ({ location, title, children, data }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <nav className="navigation">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
          <h3 className="navright">
            <Link to="/">Home   </Link>
            <Link to="/">Shop   </Link>
            <Link to="/">Blog</Link>
          </h3>
        </h1>
        <h1 className="main-heading2">
          <Link to="/">Blog</Link>
          <h3 className="navright2">
            <Link to="/">Home/</Link>
            <Link to="/">Blog</Link>
          </h3>
        </h1> 
      </nav>
      
    )
  } else {
    header = (
      <nav>
        <h1>
          <Link className="header-link-home" to="/">
            My Animals™</Link>
          <h3 className="navright">
            <Link to="/">Home   </Link>
            <Link to="/">Shop   </Link>
            <Link to="/">Blog</Link>
          </h3>
        </h1>
        <h2>
        <Link className="header-link-home2" to="/">
          <h1 itemProp="headline">All About</h1>
        </Link>
        </h2>
      </nav>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className ="footer">
        <h1>
        <table className="table-footer">
          <tr className = "footer-rows"> 
            <td><h5 className="main-heading"><Link to="/">{title}</Link></h5></td>
            <td><h4 className="footer-heading">About Us</h4></td>
            <td><h4 className="footer-heading">Products </h4></td>
            <td><h4 className="footer-heading">Contact Us</h4></td>
          </tr>
          <tr>
            <td>  </td>
            <td>  </td>
          </tr>
          <tr className = "footer-rows">
            <td> </td>
            <td>What we do</td>
            <td>Prints</td>
            <td>Work@teamgeek.io</td>
          </tr>
          <tr>
            <td>  </td>
            <td>  </td>
          </tr>
          <tr className = "footer-rows">
            <td> © {new Date().getFullYear()}, Built witht
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a></td>
            <td>Locations</td>
            <td>Cameras</td>
            <td>+27 64 891 2008</td>
          </tr>
          <tr>
            <td>  </td>
            <td>  </td>
          </tr>
          <tr>
            <td> </td>
            <td>Who we are</td>
            <td>Poloroids</td>
            <td></td>
          </tr>
          <tr>
            <td>  </td>
            <td>  </td>
          </tr>
          <tr>
            <td> </td>
            <td>How we do it</td>
            <td>weapons</td>
            <td></td>
          </tr>
        </table>
        </h1>
      </footer>
    </div>
  )
}

export default Layout

      