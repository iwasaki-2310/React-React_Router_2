// react-router-domから「BrowserRouter, Link, Switch, Route」をインポート
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    // ルーティングは<BrowserRouter> で囲む
    <BrowserRouter> 
      <div className="App">
        {/* <Link>はaタグのようなもの。to=にパスを書く */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>

      {/* <Switch>で囲むことで子コンポーネントを親コンポーネントに呼び出すことができる（=ルーティングすることができる） */}
      {/* Home */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        {/* Page1 */}
        <Route
          path="/page1"
          // rederでネストされたページのルーティングも可能。
          //{ match: { url } }は現在のページのobject>url（つまりネストの親を返す）ため、ネストされたページの子ページにも指定することで、手入力で毎回page1/のように書かなくて済む！
          render={({ match: { url } }) => (
            <Switch>
              {console.log(url)}
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />

        {/* Page2 */}
        <Route path="/page2" render={() => <Page2 />}>
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
