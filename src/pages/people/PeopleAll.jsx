import TableHeader from "../../layouts/components/table/TableHeader"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const headerLabels = ["", "ID", "Full Name", "Sector", "Changed At", "Original Revision"];

import { usePeopleData } from "../../hooks/usePeople";
import { randomKey } from "../../utils/utils";


const PeopleAll = () => {
    const navigate = useNavigate();
    const onError = () => <div className='display-1'>Error</div>
    const {
        isLoading,
        data: people,
        error,
        isError,
    } = usePeopleData(onError);

    const rowSelectedHandler = useCallback((event) => {
        const selectedUserId = event.target.parentNode.childNodes[1].textContent;
        navigate(`/people/person-details/${selectedUserId}`);
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-hover text-nowrap ">
                <TableHeader headerLabels={headerLabels} />
                <tbody>

                    {people?.map(item => <tr key={randomKey()} onClick={rowSelectedHandler}>
                        <td className="align-middle">{ }</td><td className="align-middle">{item.id}</td><td className="align-middle">{item.name}</td><td className="align-middle">{item.sector}</td>
                        <td className="align-middle">{item.changedAt}</td>
                        <td className="align-middle">{item.originalRevision
                        }</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}


export default PeopleAll




