import React from 'react'
import { randomKey } from '../../../utils/utils';

const TableHeader = ({ headerLabels }) => {

    return (
        <thead className="mt-5">
            <tr className="mt-5">
                {headerLabels.map(label => <th key={randomKey()} className="pt-0 pb-2">{label}</th>)}
            </tr>
        </thead>
    )
}

export default TableHeader