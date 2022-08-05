import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import AdminPage from '../AdminPage'
import filterIcon from '../../../assets/filter.svg';
import circleIcon from '../../../assets/circle_add.svg';
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

// Formik
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../Forms/FormikControl';
import stateDetails from '../../../data/stateDetails';
import success from '../../../assets/success.png';
import warning from '../../../assets/more-warning.png'


const rows = [
  {
    sn: 1,
    stateName: "Akwa Ibom",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  },
  {
    sn: 2,
    stateName: "FCT",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  },
   {
    sn: 3,
    stateName: "Osun",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  },
   {
    sn: 4,
    stateName: "Abia",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  },
   {
    sn: 5,
    stateName: "Jos",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  },
  {
    sn: 6,
    stateName: "oyo",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  },
  {
    sn: 7,
    stateName: "Ibadan",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  },
   {
    sn: 8,
    stateName: "Rivers",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  }, {
    sn: 9,
    stateName: "Sokoto",
    villageNo: 200,
    contributorNo: 100,
    progress: "100%",
    action: ['Edit', 'Delete']
  }


];
//style
import styles from './state.module.scss'

const states = () => {
  const [ rowList, setRowList ] = useState(rows)
  const [ showModal, setShowModal ] = useState(false)
  const [ deleteModal, setDeleteModal ] = useState(false)
  const [ deleteItem, setDeleteItem ] = useState('')
  const [ editModal, setEditModal ] = useState(false)
  const [ editItem, setEditItem ] = useState('')
  console.log(editItem)
  const [count, setCount ] = useState(0)
  const [ arrCount, setArrCount ] = useState([])
console.log(arrCount)
   // Form validation schema using Yup
   const villageValidationSchema = Yup.object({
    state: Yup.string().required('Required'),
    village: Yup.string().required('Required'),
  });

    //Initialize select options
    const stateOptions = stateDetails.map((item) => ({
      value: item.slug,
      label: item.name,
    }));

    const increment = () => {
      setCount(count + 1)
      setArrCount([...arrCount, count])
    }

    //Delete item
    const [ inDex, setInDex ] = useState('')
    const handleDel = () => {
      setDeleteModal(false)
      setRowList((prev) => prev.filter((item) => item.sn !== inDex))
    }


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
              <Image src={circleIcon} alt="filter" />
              <span className='ml-4'>Add a new State</span>
            </button>
          </div>
        </div>
       

        <div>
          <TableContainer >
            <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontSize: "14px"}}>SN</TableCell>
                  <TableCell sx={{fontSize: "14px"}}>STATE NAME</TableCell>
                  <TableCell sx={{fontSize: "14px"}}>NO OF VILLAGES</TableCell>
                  <TableCell sx={{fontSize: "14px"}}>NO OF CONTRIBUTOR</TableCell>
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
                    <TableCell sx={{fontSize: "12px"}}>{row.stateName}</TableCell>
                    <TableCell sx={{fontSize: "12px"}}>{row.villageNo}</TableCell>
                    <TableCell sx={{fontSize: "12px"}}>{row.contributorNo}</TableCell>
                    <TableCell sx={{fontSize: "12px"}}>{row.progress}</TableCell>
                    <TableCell sx={{fontSize: "12px"}}>
                      <span 
                        style={{marginRight: "10px", color: "#5678CE", textDecoration: "underline", cursor: "pointer"}}
                        onClick={() =>{
                          setEditModal(true)
                          setEditItem(row)
                        }}
                        >Edit</span>
                      <span 
                        style={{color: "#D60602", textDecoration: "underline", cursor: "pointer"}} 
                        onClick={() => {
                          setDeleteModal(true)
                          setDeleteItem(row)
                          setInDex(row.sn)
                        }}>Delete
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

      {showModal && (
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            width="54.4rem"
          >
            <div>
              <div>
                <div className={styles.main__formikMain}>
                  <h2>Add a new <br /><span style={{fontWeight: "900"}}>State</span></h2>
                  <button onClick={() => setShowModal(false)}> &times; </button>
                </div>
                <div className={styles.main__formikContent}>
                  <p>Kindly enter details of a state</p>
                  <Formik
                  initialValues={{
                    state: '',
                    village: '',
                    village1: '',
                    village2: '',
                    village3: '',
                  }}
                  validationSchema={villageValidationSchema}
                  onSubmit={(values) => console.log('Form data', values)}
                >
                  {({ values }) => (
                    <Form autoComplete="off">
                      <FormikControl
                        values={values}
                        control="select"
                        placeholder="Select your state"
                        name="state"
                        options={stateOptions}
                      />
                      <FormikControl
                        values={values}
                        control="input"
                        placeholder="Enter the name of a new village"
                        name="village"
                        type="text"
                      />
                      {Array.from(Array(Number(count)).keys()).map((child, index) => (
                        <FormikControl
                        key={index}
                        values={values}
                        control="input"
                        placeholder="Enter the name of a new village"
                        name={`village${index}`}
                        type="text"
                      />
                      ))}
                      <div className={styles.main__warning}>
                        <div><Image src={warning} /></div>
                        <p>Kindly note that adding multiple villages is optional and you can only add five at once.</p>
                      </div>
                      {arrCount.length < 4  && (

                      <div className={styles.main__another} onClick={increment}>
                        <BsPlus style={{fontSize: "20px"}} />
                        <p>Add another village</p>
                      </div>
                      )}
                      <button
                        type="submit"
                        className="btn_dark w-full rounded-full h-20 mt-9"
                      >
                        Save village
                      </button>
                    </Form>
                  )}
                </Formik>
                </div>
              </div>
            </div>
          </Modal>
        )}

        {deleteModal && (
          <Modal
            show={deleteModal}
            onClose={() => setDeleteModal(false)}
            width="54.4rem"
          >
            <div>
              <div className={styles.main__DeleteMain}>
                <h2>Delete <br /><span style={{fontWeight: "900"}}>State</span></h2>
                <button onClick={() => setDeleteModal(false)}> &times; </button>
              </div>
              <div className={styles.main__DeleteContent}>
                <p>Kindly note that you are about to delete the {deleteItem.stateName} state from the list. Are you sure?</p>
              </div>
              <div className={styles.main__action}>
                <button 
                  style={{border: "1px solid #018226", color: "#018226"}} 
                  onClick={() => setDeleteModal(false)}>Cancel</button>
                <button 
                onClick={handleDel}
                  style={{background: "#D60602", color: "#fff"}}>Delete</button>
              </div>
            </div>
          </Modal>
        )}

        {editModal && (
          <Modal
          show={editModal}
          onClose={() => setEditModal(false)}
          width="74.4rem"
          >
          <div className={styles.main__EditMain}>
              <h2>Edit state <br /><span style={{fontWeight: "900"}}>Information</span></h2>
              <button onClick={() => setEditModal(false)}> &times; </button>
            </div>
            <div>
              <div className={styles.main__content}>
                <div className={styles.main__contentChild}>
                  <h3>No of contributors</h3>
                  <p>{editItem.contributorNo}</p>
                </div>
                <div className={styles.main__contentChild}>
                  <h3>Progress</h3>
                  <p>{editItem.progress}</p>
                </div>
                <div className={styles.main__contentChild}>
                   <h3>Date Added</h3>
                  <p>7, July, 2022</p>
                </div>
                <div className={styles.main__contentChild}>
                  <h3>No of villages</h3>
                  <p>{editItem.villageNo}</p>
                </div>
                <div className={styles.main__contentChild}>
                  <button>Delete village</button>
                </div>
              </div>

              <div className={styles.main__inputCon}>
                <input
                value={editItem.stateName}
                disabled
                />
              </div>

              <div className={styles.main__villageCon}>
                <p>List Of villages</p>
                <div className={styles.main__villageList}>
                  <span>Achina X</span>
                  <span>Achina X</span>
                  <span>Achina X</span>
                  <span>Achina X</span>
                </div>
              </div>

              <div className={styles.main__Delaction}>
                <button 
                  style={{border: "1px solid #018226", color: "#018226"}} 
                  onClick={() => setEditModal(false)}>Cancel</button>
                <button 
                onClick={handleDel}
                  style={{background: "#018226", opacity: "0.5", color: "#fff"}}>Save</button>
              </div>
            </div>
          </Modal>
        )}
      </div>

    </AdminPage>
  )
}

export default states