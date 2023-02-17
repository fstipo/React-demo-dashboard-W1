import TableHeader from "../../layouts/components/table/TableHeader"

const headerLabels = ["", "ID", "Name", "Changed At", "Last Sale", "Net Change", "Country", "Ipo Year", "Volume", "Original Revision"];

import { useAssetsData } from "../../hooks/useAssets"
import { randomKey } from "../../utils/utils";

const AssetAll = () => {
    const onError = () => <div className='display-1'>Error</div>
    const {
        isLoading,
        data: assets,
        error,
        isError,
    } = useAssetsData(onError);
    console.log(assets)

    return (
        <div className="table-responsive">
            <table className="table table-hover text-nowrap ">
                <TableHeader headerLabels={headerLabels} />
                <tbody>
                    {assets?.map(item => <tr key={randomKey()}>
                        <td className="align-middle">{ }</td><td className="align-middle">{item.id}</td><td className="align-middle">{item.name}</td><td className="align-middle">{item.changedAt}</td>
                        <td className="align-middle">{item.lastSale}</td>
                        <td className="align-middle">{item.netChange}</td>
                        <td className="align-middle">{item.country}</td>
                        <td className="align-middle">{item.ipoYear}</td>
                        <td className="align-middle">{item.volume}</td>
                        <td className="align-middle">{item.originalRevision}</td>

                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default AssetAll


