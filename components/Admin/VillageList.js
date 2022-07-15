import styles from './Styles.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import village_img_2 from '../../assets/village_img_2.png'
import Image from 'next/image';
import { DeleteOutline } from '@material-ui/icons';
import Link from 'next/link';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 130,
  },
  { field: 'State', headerName: 'State', width: 130 },
  {
    field: 'progress',
    headerName: 'progress',
    // type: 'number',
    width: 90,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 130,
    renderCell: (params) => {
      return (
        <>
        <Link href='/admin/villages/village'>
          <button className={styles.edit_button}>
            Edit
          </button>
        </Link>
        <Link href="#">
          <DeleteOutline className={styles.delete_button}/>
        </Link>
          </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    Name: 'Osusu',
    State: 'Abia',
    progress: '20%',
  },
  {
    id: 2,
    Name: 'Osusu',
    State: 'Abia',
    progress: '20%',
  },
  {
    id: 3,
    Name: 'Osusu',
    State: 'Abia',
    progress: '20%',
  },
  {
    id: 4,
    Name: 'Osusu',
    State: 'Abia',
    progress: '20%',
  },
  {
    id: 5,
    Name: 'Osusu',
    State: 'Abia',
    progress: '20%',
  },
  {
    id: 6,
    Name: 'Osusu',
    State: 'Abia',
    progress: '20%',
  },
];

export default function VillageList() {
  return (
    <div className={styles.village_list} style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
