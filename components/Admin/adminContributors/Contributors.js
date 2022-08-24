import React, { useState, useEffect} from 'react'
import AdminPage from '../AdminPage'
import styles from './contributors.module.scss'
import filterIcon from '../../../assets/filter.svg';
import download from '../../../assets/download.svg';
import Image from "next/image"
import Modal from '../../Modal/Index';
import { BsPlus } from "react-icons/bs";
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { 
  Table, 
  TableBody,  
  TableContainer, 
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';


const rows = [
    {
      sn: 1,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      stateName: "Akwa Ibom",
      village: "ukpor",
      contributorNo: 100,
      phoneNo: "070349233459",
      progress: "100%",
      action: ['Edit', 'Delete']
    },
    {
      sn: 2,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      phoneNo: "070349233459",
      stateName: "FCT",
      village: "lugbe",
      contributorNo: 100,
      progress: "100%",
      action: ['Edit', 'Delete']
    },
     {
      sn: 3,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      phoneNo: "070349233459",
      stateName: "Osun",
      village: "Achara",
      contributorNo: 100,
      progress: "100%",
      action: ['Edit', 'Delete']
    },
     {
      sn: 4,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      phoneNo: "070349233459",
      stateName: "Abia",
      village: "lugbe",
      contributorNo: 100,
      progress: "100%",
      action: ['Edit', 'Delete']
    },
     {
      sn: 5,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      phoneNo: "070349233459",
      stateName: "Jos",
      village: "lugbe",
      contributorNo: 100,
      progress: "100%",
      action: ['Edit', 'Delete']
    },
    {
      sn: 6,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      phoneNo: "070349233459",
      stateName: "oyo",
      village: "lugbe",
      contributorNo: 100,
      progress: "100%",
      action: ['Edit', 'Delete']
    },
    {
      sn: 7,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      phoneNo: "070349233459",
      stateName: "Ibadan",
      village: "lugbe",
      contributorNo: 100,
      progress: "100%",
      action: ['Edit', 'Delete']
    },
     {
      sn: 8,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      phoneNo: "070349233459",
      stateName: "Rivers",
      village: "lugbe",
      contributorNo: 100,
      progress: "100%",
      action: ['Edit', 'Delete']
    }, {
      sn: 9,
      contributorsId: 1234590,
      customerName: "Samuel Joe",
      emailAdress: "sam@gmail.com",
      phoneNo: "070349233459",
      stateName: "Sokoto",
      village: "lugbe",
      contributorNo: 100,
      progress: "100%",
      action: ['Edit', 'Delete']
    }
  
  
  ];

export const Contributors = () => {
    const [ rowList, setRowList ] = useState(rows)
    const [ showModal, setShowModal ] = useState(false)
  return (
    <AdminPage>
        <div className={styles.main}>
            <div className={styles.main__filterContainer}>
                <div className={styles.main__filterContent}>
                    <Image src={filterIcon} alt="filter" />
                    <span>Filter</span>
                </div>
                <div className={styles.main__btn}>
                    <button onClick={() => setShowModal(true)}>
                    <span className='mr-4'>Download</span>
                    <Image src={download} alt="download" />
                    </button>
                </div>
            </div>

            <div>
                <TableContainer >
                    <Table  aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        <TableCell sx={{fontSize: "14px"}}>SN</TableCell>
                        <TableCell sx={{fontSize: "14px"}}>CONTRIBUTORS ID</TableCell>
                        <TableCell sx={{fontSize: "14px"}}>CUSTOMER NAME</TableCell>
                        <TableCell sx={{fontSize: "14px"}}>EMAIL ADDRESS</TableCell>
                        <TableCell sx={{fontSize: "14px"}}>STATE</TableCell>
                        <TableCell sx={{fontSize: "14px"}}>VILLAGE</TableCell>
                        <TableCell sx={{fontSize: "14px"}}>PHONE NUMBER</TableCell>
                        <TableCell sx={{fontSize: "14px"}}>PROGRESS</TableCell>
                        <TableCell sx={{fontSize: "14px"}}>ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowList.map((row, index) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" sx={{fontSize: "14px"}}>
                            {row.sn}
                            </TableCell>
                            <TableCell sx={{fontSize: "12px"}}>{row.contributorsId}</TableCell>
                            <TableCell sx={{fontSize: "12px"}}>{row.customerName}</TableCell>
                            <TableCell sx={{fontSize: "12px"}}>{row.customerName}</TableCell>
                            <TableCell sx={{fontSize: "12px"}}>{row.stateName}</TableCell>
                            <TableCell sx={{fontSize: "12px"}}>{row.village}</TableCell>
                            <TableCell sx={{fontSize: "12px"}}>{row.phoneNo}</TableCell>
                            <TableCell sx={{fontSize: "12px"}}>{row.progress}</TableCell>
                            <TableCell sx={{fontSize: "12px"}}>
                            <span 
                                style={{marginRight: "10px", color: "#5678CE", textDecoration: "underline", cursor: "pointer"}}
                                onClick={() =>{
                                setEditModal(true)
                                setEditItem(row)
                                }}
                                >{row.action[0]}</span>
                            <span 
                                style={{color: "#D60602", textDecoration: "underline", cursor: "pointer"}} 
                                onClick={() => {
                                setDeleteModal(true)
                                setDeleteItem(row)
                                setInDex(row.sn)
                                }}>{row.action[1]}
                            </span>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className="my-6  bg-white border border-[#FFFFFF] rounded-xl h-[61px] flex items-center justify-between">
                <div className="m-5 text-[#2F3733] text-2xl">
                <h3>Showing 1-10 of 20</h3>
                </div>
                <div className="flex items-center justify-around m-5 text-[#979797]">
                <button className="w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
                    Last
                </button>
                <button className="w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
                    Prev
                </button>
                <button className="w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white bg-[#018226] text-white">
                    1
                </button>
                <button className="w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
                    2
                </button>
                <button className="w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
                    3
                </button>
                <button className="w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
                    Next
                </button>
                <button className="w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
                    Last
                </button>
                </div>
            </div>
        </div>
    </AdminPage>
  )
}
