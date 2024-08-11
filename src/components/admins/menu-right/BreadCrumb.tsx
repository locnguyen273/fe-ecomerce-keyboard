import { useLocation, Link  } from "react-router-dom";
import { convertSlugToTitle } from "../../../services/dictionary/breadcrumbDictionary";

const BreadCrumb = () => {
  const location = useLocation ();
  const pathnames = location?.pathname.split("/").filter(item => item !== "");
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        {pathnames?.map((value, index) => {
          const last = index === pathnames.length -1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const title = convertSlugToTitle(value);
          return (<li key={to}>
            {last ? <p>{title}</p> : <Link to={to}>{title}</Link>}
            {!last && <span>/</span>}
          </li>)
        })}
      </ul>
    </div>
  )
}

export default BreadCrumb;