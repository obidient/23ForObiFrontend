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
    renderCell: (params) => {
      return (
        <div className={styles.avatar_img}>
          <Image width={30} height={30} src={params.row.avatar} />
          {params.row.Name}
        </div>
      );
    },
  },
  { field: 'Username', headerName: 'Username', width: 130 },
  {
    field: 'date',
    headerName: 'Date',
    // type: 'number',
    width: 90,
  },
  {
    field: 'email',
    headerName: 'email',
    width: 130,
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
    Name: 'Snow',
    Username: 'Jon',
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
  {
    id: 2,
    Name: 'Lannister',
    Username: 'Cersei',
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
  {
    id: 3,
    Name: 'Lannister',
    Username: 'Jaime',
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
  {
    id: 4,
    Name: 'Stark',
    Username: 'Arya',
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
  {
    id: 5,
    Name: 'Targaryen',
    Username: 'Daenerys',
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
  {
    id: 6,
    Name: 'Melisandre',
    Username: null,
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
  {
    id: 7,
    Name: 'Clifford',
    Username: 'Ferrara',
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
  {
    id: 8,
    Name: 'Frances',
    Username: 'Rossini',
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
  {
    id: 9,
    Name: 'Roxie',
    Username: 'Harvey',
    email: 'Jon@gmail.com',
    avatar: village_img_2,
    date: '15 July',
  },
];

export default function UserList() {
  return (
    <div className={styles.user_list} style={{ height: 400, width: '100%' }}>
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
