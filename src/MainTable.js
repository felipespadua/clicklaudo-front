import React from 'react';
import MaterialTable from 'material-table';



  export default function MainTable() {
    const [state, setState] = React.useState({
      bg: {
        // backgroundColor: "#f0f0f0",
        // color: 'red  '
      },  
      columns: [
        { title: 'Exame', field: 'exam' },
        { title: 'Paciente', field: 'pacient' },
        { title: 'Status', field: 'status', text: { color: 'red' } },
        { title: 'Data', field: 'time'},
        { title: 'Horario'}
        
      ],
      data: [
        { exam: '2374849', pacient: 'Rafael Sousa Dias', 'status': 'Fechado' },
        {
          exam: '2384832',pacient: 'João da Silva', 'status': 'Aberto', 'time': ''
        },
        
      ],

      
    });

    
    return (
      <MaterialTable 
        style={state.bg}
        title="Procurar laudos"
        columns={state.columns}
        data={state.data}
        onRowClick={((evt, selectedRow) =>{
          
          return setState( {...state }, { selectedRow })
          }) }
        options={{
          rowStyle: rowData => ({
            backgroundColor: (state.selectedRow && state.selectedRow.tableData.id === rowData.tableData.id) ? 'red' : '#FFF'
          })
        }}
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
              // setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              // }, 600);
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



  