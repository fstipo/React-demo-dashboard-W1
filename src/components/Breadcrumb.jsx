import { Link } from "react-router-dom";
import { formatBreadCrumbLink } from "../utils/utils";

const Breadcrumb = ({ labels } = props) => {
    const lastLabel = labels.at(-1);
    let str = "";
    return (
        <div className="d-flex align-items-center">
            <div>
                <ul className="breadcrumb">
                    {labels.slice(0, -1).map(item => <li key={item} className="breadcrumb-item"><Link to={formatBreadCrumbLink(item, str)}>{item}</Link></li>)}
                    <li className="breadcrumb-item text-gray-600">{lastLabel}</li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;