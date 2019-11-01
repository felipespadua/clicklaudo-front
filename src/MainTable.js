import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import MaterialTable, { MTableToolbar } from 'material-table';
import ApiService from './Services/ApiService';
import SimpleExpansionPanel from './Expansion';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
export default function MainTable(props) {
	const [state,setState] = React.useState({
		bg: {
			// backgroundColor: "#f0f0f0",
			// color: 'red  '
		},
		columns: [
			{
				title: 'Ações',
				field: 'acoes',
				render: (rowData) =>
					rowData.status === 'Aberto' ? (
						<Link href="/newlaudoview">
							<EditIcon />
						</Link>
					) : (
						<Link href="/newlaudoview">
							<AssignmentIcon />
						</Link>
					)
			},
			{ title: 'Exame', field: 'exam' },
			{ title: 'Paciente', field: 'pacient' },
			{
				title: 'Status',
				field: 'status',
				render: (rowData) =>
					rowData.status === 'Aberto' ? (
						<p style={{ color: 'green' }}>{rowData.status}</p>
					) : (
						<p style={{ color: 'red' }}>{rowData.status}</p>
					)
			},
			{
				title: 'Delete',
				field: 'delete',
				render: (rowData) => (
					<Button onClick={() => deleteExam(rowData.id)}>
						<DeleteIcon/>
					</Button>
				)
			}
		],
		
  });
  const [data, setData] = React.useState([]);

	const apiHandler = new ApiService();

	React.useEffect(
		() => {
			apiHandler.getAllExams().then(
				function(itemResponse) {
					console.log(itemResponse);
					setData({
						data: itemResponse.map((item) => ({
							exam: item.examId,
							pacient: item.pacient.nome,
							status: item.state === 'done' ? 'Fechado' : 'Aberto',
							id: item._id
						}))
					});
				},
				function(error) {
					console.log(error);
				}
			);
		}
  );

	const deleteExam = (id) => {
		// await apiHandler.deleteExam(id);
		// const itemResponse = await apiHandler.getAllExams()
		// console.log('djalksjlkasjdlaksjdlasjdsa')
		// setData({
		// 		data: itemResponse.map((item) => ({
		// 			exam: item.examId,
		// 			pacient: item.pacient.nome,
		// 			status: item.state === 'done' ? 'Fechado' : 'Aberto',
		// 			id: item._id
		// 		}))
		// 	});

		apiHandler.deleteExam(id).then((response) => {
			apiHandler.getAllExams()
			.then((itemResponse) => {
				setData({
					data: itemResponse.map((item) => ({
						exam: item.examId,
						pacient: item.pacient.nome,
						status: item.state === 'done' ? 'Fechado' : 'Aberto',
						id: item._id
					}))
				});
			}).catch((err) => console.log(err))
		})
		.catch((err) => console.log(err));
	};

	return (
		<Fragment>
			<Grid className="">
				<MaterialTable
					style={state.bg}
					column={{
						cellStyle: (cell) => ({
							backgroundColor: 'red'
						})
					}}
					title="Procurar laudos"
					columns={state.columns}
					data={data.data}
					onRowClick={(evt, selectedRow) => {
						return setState({ ...state, selectedRow });
					}}
					options={{
						rowStyle: (rowData) => ({
							backgroundColor:
								state.selectedRow && state.selectedRow.tableData.id === rowData.tableData.id
									? '#f0f5f5'
									: '#FFF'
							// color: (rowData.status === "Aberto" ? '#00b300' : '#ff3300')
						})
					}}

				/>
			</Grid>
		</Fragment>
	);
}
