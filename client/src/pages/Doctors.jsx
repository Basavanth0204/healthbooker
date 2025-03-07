import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const isUserDoc=localStorage.getItem('user')
  console.log(isUserDoc)
  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/doctor/getalldoctors`);
    setDoctors(data);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);
  console.log("DOCS",doctors)

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors" 
        style={{
          backgroundImage: 'url(https://img.freepik.com/premium-photo/directly-shot-keyboard-with-stethoscope-white-background_1048944-1660338.jpg?ga=GA1.1.387232796.1721892962&semt=ais_hybrid.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
          <h2 className="page-heading">Our Doctors</h2>
          {doctors.length > 0 ? (
            <div className="doctors-card-container">
              {doctors.map((ele) => {
               if( ele.userId.email!==isUserDoc){
                return(
                  <DoctorCard
                    ele={ele}
                    key={ele._id}
                  />
                );
               }
               
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Doctors;
