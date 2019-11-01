import React from 'react';
import MaterialTable from 'material-table';
import Grid from "@material-ui/core/Grid";



  export default function MainTable() {
    const [state, setState] = React.useState({
      // bg: {
      //   backgroundColor: "#f0f0f0",
      //   color: 'red'
      // },  
      columns: [
        { title: 'Convênio', field: 'convenio' },
      ],
      data: [
        { convenio: 'Unimed' },
        { convenio: 'Cassi'},
        { convenio: 'Bradesco'},
        { convenio: 'Hapvida'}
      ],
    });

    
    return (
      <Grid className="mt-5 pt-4">
      <MaterialTable 
        style={state.bg}
        title="Cadastro Convênios"
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
      </Grid>
      
      
    );
  }



  