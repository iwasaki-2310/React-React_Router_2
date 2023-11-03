import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターの値は{id}です</p>
      <p>クエリパラメーターの値は{query.get("name")}です</p>
    </div>
  );
};
