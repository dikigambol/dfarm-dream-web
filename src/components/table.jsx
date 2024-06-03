import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Icon } from '@iconify/react/dist/iconify.js'

const initialOptions = {
    title: "",
    pagination: false,
    paginationRowsPerPageOptions: [5, 10, 15],
    striped: false,
    noHeader: false,
    fixedHeader: false,
    fixedHeaderScrollHeight: "500px",
    highlightOnHover: false,
    selectableRows: false,
    selectableRowsNoSelectAll: false,
    edit: false,
    delete: false,
};

const DataTables = ({ columns, datas, options }) => {
    const [opt, setOpt] = useState(initialOptions);
    const [render, setRender] = useState('');

    const table = (columns, data) => {
        return <DataTable
            columns={columns}
            data={data}
            title={opt.title}
            pagination={opt.pagination}
            paginationRowsPerPageOptions={opt.paginationRowsPerPageOptions}
            striped={opt.striped}
            noHeader={opt.noHeader}
            fixedHeader={opt.fixedHeader}
            fixedHeaderScrollHeight={opt.fixedHeaderScrollHeight}
            highlightOnHover={opt.highlightOnHover}
            selectableRows={opt.selectableRows}
            selectableRowsNoSelectAll={opt.selectableRowsNoSelectAll}
        />
    }

    const handlerEdit = (id) => {
        opt.edit.callback(id)
    }
    
    const handlerDelete = (id) => {
        opt.delete.callback(id)
    }

    useEffect(() => {
        setOpt((prevOpt) => ({ ...prevOpt, ...options }));
    }, [options]);

    useEffect(() => {
        const updatedColumns = [...columns];
        
        if (opt.edit.status || opt.delete.status) {
            const actionsColumn = {
                name: "Actions",
                selector: "actions",
                cell: (row) => (
                    <div className="d-flex justify-content-center align-items-center">
                        {opt.edit.status && <button className="btn p-0 me-3 btn-action" onClick={() => handlerEdit(row.id)}><Icon icon="lucide:edit" className="fs-4" /></button>}
                        {opt.delete.status && <button className="btn p-0 btn-action" onClick={() => handlerDelete(row.id)}><Icon icon="hugeicons:delete-02" className="fs-3" /></button>}
                    </div>
                ),
            };
    
            updatedColumns.push(actionsColumn);
        }
    
        const updatedDatas = datas.map((item) => ({
            ...item,
            actions: (
                <div className="d-flex justify-content-center align-items-center">
                    {opt.edit.status && <button className="btn p-0 me-3 btn-action" onClick={() => handlerEdit(item.id)}><Icon icon="lucide:edit" className="fs-4" /></button>}
                    {opt.delete.status && <button className="btn p-0 btn-action" onClick={() => handlerDelete(item.id)}><Icon icon="hugeicons:delete-02" className="fs-3" /></button>}
                </div>
            ),
        }));
    
        columns = updatedColumns;
        datas = updatedDatas;
    }, [opt, columns, datas]);
    

    useEffect(() => {
        setRender(table(columns, datas))
    }, [columns, datas])
    

    return (
        render
    );
};

export default DataTables;
