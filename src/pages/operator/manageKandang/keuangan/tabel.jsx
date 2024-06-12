import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Icon } from '@iconify/react/dist/iconify.js'

const initialConfig = {
    title: "",
    pagination: false,
    paginationRowsPerPageOptions: [10, 50, 100],
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
    const [config, setConfig] = useState(initialConfig);
    const [render, setRender] = useState('');

    const element = (columns, data) => {
        return <DataTable
            columns={columns}
            data={data}
            title={config.title}
            pagination={config.pagination}
            paginationRowsPerPageOptions={config.paginationRowsPerPageOptions}
            striped={config.striped}
            noHeader={config.noHeader}
            fixedHeader={config.fixedHeader}
            fixedHeaderScrollHeight={config.fixedHeaderScrollHeight}
            highlightOnHover={config.highlightOnHover}
            selectableRows={config.selectableRows}
            selectableRowsNoSelectAll={config.selectableRowsNoSelectAll}
            responsive={true}
        />
    }

    const handlerEdit = (id) => {
        config.edit.callback(id)
    }
    
    const handlerDelete = (id) => {
        config.delete.callback(id)
    }

    useEffect(() => {
        setConfig((prevConfig) => ({ ...prevConfig, ...options }));
    }, [options]);

    useEffect(() => {
        const updatedColumns = [...columns];
        
        if (config.edit.status || config.delete.status) {
            const actionsColumn = {
                name: "Aksi",
                selector: "actions",
                cell: (row) => (
                    <div className="d-flex justify-content-center align-items-center">
                        {config.edit.status && <button className="btn p-0 me-3 btn-action" onClick={() => handlerEdit(row.id)}><Icon icon="lucide:edit" className="fs-4" /></button>}
                        {config.delete.status && <button className="btn p-0 btn-action" onClick={() => handlerDelete(row.id)}><Icon icon="hugeicons:delete-02" className="fs-3" /></button>}
                    </div>
                ),
            };
    
            updatedColumns.push(actionsColumn);
        }
    
        const updatedDatas = datas.map((item) => ({
            ...item,
            actions: (
                <div className="d-flex justify-content-center align-items-center">
                    {config.edit.status && <button className="btn p-0 me-3 btn-action" onClick={() => handlerEdit(item.id)}><Icon icon="lucide:edit" className="fs-4" /></button>}
                    {config.delete.status && <button className="btn p-0 btn-action" onClick={() => handlerDelete(item.id)}><Icon icon="hugeicons:delete-02" className="fs-3" /></button>}
                </div>
            ),
        }));
    
        columns = updatedColumns;
        datas = updatedDatas;
    }, [config, columns, datas]);
    

    useEffect(() => {
        setRender(element(columns, datas))
    }, [columns, datas])
    

    return (
        render
    );
};

export default DataTables;
