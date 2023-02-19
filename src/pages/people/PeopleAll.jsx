import TableHeader from "../../layouts/components/table/TableHeader"


const headerLabels = ["", "ID", "Full Name", "Sector", "Changed At", "Original Revision"];

import { usePeopleData } from "../../hooks/usePeople";
import { randomKey } from "../../utils/utils";


const PeopleAll = () => {
    const onError = () => <div className='display-1'>Error</div>
    const {
        isLoading,
        data: people,
        error,
        isError,
    } = usePeopleData(onError);


    return (
        <div className="table-responsive">
            <table className="table table-hover text-nowrap ">
                <TableHeader headerLabels={headerLabels} />
                <tbody>
                    {people?.map(item => <tr key={randomKey()}>
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




