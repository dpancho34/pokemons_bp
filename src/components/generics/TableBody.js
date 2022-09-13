import React from 'react';
import TableRow from './TableRow';

const TableBody = ({heading, body}) => {
    return (
            <table>
                <thead>
                    <tr>
                        {heading.map((head, i) => <th key={i.toString()}>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map((row, i) => {
                        return <TableRow key={i.toString()} row={row} />;
                    })}
                </tbody>
            </table>
    );
};

export default TableBody;