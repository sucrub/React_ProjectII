- Sử dụng thư viện react-router-dom@5.3.0 (các phiên bản cao hơn có syntax khác)
link: https://reactrouter.com/en/main

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

    + Bọc các button (nav) bằng link (tương tự thẻ a), thay 'href' trong thẻ a thành 'to'

<Router>
....
    <Switch>

        <Route path = '/' exact={true}>
        <Home>
        </Route>

        <Route path = '/...'>
        <Page1>
        </Route>

        <Route path = '/...'>
        <Page2>
        </Route>

        <Route path = '/...'>
        <Page3>
        </Route>

    </Switch>

</Router>

- Tham số useParams()    -> sử dụng ở trang được hướng tới 
=>  nó nhận key là tham số được truyền trong path ở file App.js, nhận giá trị là tham số trong path ở trang điều hướng
vd :
file App.js

<Route path='/body/:id'>
    <Detail/>
</Route>
==> nhận key là id

file Blog.js (trang có button điều hướng)
<Link to={/body/${item.id}}>...</Link>
==> nhận value là id của item

file Detail.js (file được điều hướng tới)
let {id} = useParams();

- useHistory (trong v5) vs useNavigate (trong v6)

- useHisory (trong react-router v5) sử dụng để chuyển trang 
=> khai báo: let history = useHistory();
C1:
const handleAddNew = () => {
    // history.push(url)
    history.push('/add-new-blog')
}
return (
    <button onClick = {handleAddNew}>Add new</button>
)
C2: 
return (
    <button>
        <Link to={'/add-new-blog'}>
            Add new
        </Link>
    </button>
)








