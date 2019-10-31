import React from 'react';
import { Link } from 'react-router-dom'
import MaterialTable from 'material-table';
import ApiService from './Services/ApiService'
import SimpleExpansionPanel from "./Expansion";

  export default function MainTable(props) {
   
    const [state, setState] = React.useState({
      bg: {
        // backgroundColor: "#f0f0f0",
        // color: 'red  '
      },  
      columns: [
        { title: 'Exame', field: 'exam' },
        { title: 'Paciente', field: 'pacient' },
        { title: 'Status', field: 'status',
          render: rowData => (
              rowData.status === "Aberto" ? <p style={{color: 'green'}}>{rowData.status}</p> : <p style={{color: 'red'}}>{rowData.status}</p>
  
            )
        }
      ],
      data: [
        
      ],

      
    });
    React.useEffect(() =>{
     
      const apiHandler = new ApiService()
      apiHandler.getAllExams()
      .then(
        function(itemResponse) {
        
          
           setState({
            ...state,
            data: itemResponse.map(item => ({ exam: item.examId,pacient: item.pacient, status: item.state}))
            })
        }, 
        function(error) {
            console.log(error)
        }
    );
    },[]);
    
     
  
  
    
  
    
    
    
  
    return (
      
      <MaterialTable 
        style={state.bg}
        column= {{
          cellStyle: cell => ({
            backgroundColor: 'red'
          })
        }}
        title="Procurar laudos"
        columns={state.columns}
        data={state.data}
        onRowClick={((evt, selectedRow,) =>{
         console.log(props)
          return setState( {...state, selectedRow })
           
            
          
          }) }
          
        options={{
            rowStyle: rowData => ({
            backgroundColor: (state.selectedRow && state.selectedRow.tableData.id === rowData.tableData.id) ? '#f0f5f5' : '#FFF',
            // color: (rowData.status === "Aberto" ? '#00b300' : '#ff3300')
            
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



  