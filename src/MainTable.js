import React from 'react';
import MaterialTable from 'material-table';


  export default function MainTable() {
    const [state, setState] = React.useState({
      columns: [
        { title: 'Exame', field: 'name' },
        { title: 'Paciente', field: 'surname' },

      ],
      data: [
        { name: '2374849', surname: 'Rafael Sousa Dias' },
        {
          name: '2384832',
          surname: 'João da Silva',
        },
      ],
    });
  
    return (
      <MaterialTable
        title="Procurar laudos"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            }),
        }}
      />
    );
  }