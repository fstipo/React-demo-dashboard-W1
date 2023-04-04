import { Link } from "react-router-dom";
const Breadcrumb = () => {
    const labels = ["Home", "People", "Person Details"]
    const lastItem = labels.at(-1);

    return (
        <div className="d-flex align-items-center">
            <div>
                <ul className="breadcrumb">
                    {labels.slice(0, -1).map(item => <li className="breadcrumb-item"><Link>{item}</Link></li>)}
                    <li className="breadcrumb-item text-gray-600">{lastItem}</li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;