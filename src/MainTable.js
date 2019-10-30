import React from 'react';
import MaterialTable from 'material-table';
import ApiService from './Services/ApiService'

import AssignmentIcon from '@material-ui/icons/Assignment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";


  export default function MainTable() {
    const apiHandler = new ApiService()
    
    React.useEffect(() => fetchData() )

    const fetchData = async () => {
      try {
        const response = await apiHandler.getAllExams()
        console.log(response)
        
      }catch(err){

      }
    }

    const [state, setState] = React.useState({
      bg: {
        // backgroundColor: "#f0f0f0",
        // color: 'red  '
      },  
      columns: [
        { title: 'Ações',
          field: 'acoes',
        render: rowData => (
          rowData.status === "Aberto" ? <Link href="/newlaudoview"><EditIcon/></Link>  : <Link href="/newlaudoview"><AssignmentIcon/></Link>
        ),
      },
        { title: 'Exame', field: 'exam' },
        { title: 'Paciente', field: 'pacient' },
        { title: 'Status', 
          field: 'status',
          render: rowData => (
              rowData.status === "Aberto" ? <p style={{color: 'green'}}>{rowData.status}</p> : <p style={{color: 'red'}}>{rowData.status}</p>
  
            )
        },
        { title: 'Delete',
        field: 'delete',
      render: () => (
        <Link href="/"><DeleteIcon/></Link>
      ),
    },
      ],
      data: [
        { exam: '2374849', pacient: 'Rafael Sousa Dias', 'status': 'Fechado' },
        {
          exam: '2384832',pacient: 'João da Silva', 'status': 'Aberto'
        },
        {
          exam: '3423442',pacient: 'Marcos Lacerda', 'status': 'Aberto'
        },
        {
          exam: '1231231',pacient: 'Pedro Antonio', 'status': 'Fechado'
        },
        {
          exam: '2342343',pacient: 'Felipe Sekkar', 'status': 'Aberto'
        },
        {
          exam: '2893489',pacient: 'Millene Pilhada', 'status': 'Aberto'
        },
      ],
      

      
    });

    
    return (
      <Grid className="">

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
        // onRowClick={((evt, selectedRow) =>{
          
        //   return setState( {...state, selectedRow })
        //   }) }
        options={{
          rowStyle: rowData => ({
            backgroundColor: (state.selectedRow && state.selectedRow.tableData.id === rowData.tableData.id) ? '#f0f5f5' : '#FFF',
            // color: (rowData.status === "Aberto" ? '#00b300' : '#ff3300')
            
          })
        }}
        // editable={{
        //   onRowAdd: newData =>
        //     new Promise(resolve => {
        //       setTimeout(() => {
        //         resolve();
        //         const data = [...state.data];
        //         data.push(newData);
        //         setState({ ...state, data });
        //       }, 600);
        //     }),
        //   onRowUpdate: (newData, oldData) =>
        //     new Promise(resolve => {
        //       setTimeout(() => {
        //         resolve();
        //         const data = [...state.data];
        //         data[data.indexOf(oldData)] = newData;
        //         setState({ ...state, data });
        //       }, 600);
        //     }),
        //   onRowDelete: oldData =>
        //     new Promise(resolve => {
        //       setTimeout(() => {
        //         resolve();
        //         const data = [...state.data];
        //         data.splice(data.indexOf(oldData), 1);
        //         setState({ ...state, data });
        //       }, 600);
        //     }),
        // }}
      />
      </Grid>
    );
  }



  