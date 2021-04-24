import { useEffect, useState } from 'react';
import { ModelCard as Card } from '../../molecules';
import { Modal } from "../../atoms";
import { Link } from 'react-router-dom';
import { getProjects, getSearchData, Value } from "./methods";
import BGImage from '../../../assets/background.jpg';
import ClipLoader from 'react-spinners/ClipLoader';
import './Styles.css';

function Dashboard() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#F9C209");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [SearchProjectName, setSearchProjectName] = useState('');
    const [SearchClintName, setSearchClintName] = useState('');
    const [SearchSkill, setSearchSkill] = useState('');
    const [SearchLocation, setSearchLocation] = useState('');
    const [SearchDate, setSearchDate] = useState('');
    const [modelName, setmodelName] = useState('');
    const [modelYear, setmodelYear] = useState('');
    const [modelLocation, setmodelLocation] = useState('');
    const [modelSkill, setmodelSkill] = useState('');
    const [Error, setError] = useState('');
    const [ProjectArray, setProjectArray] = useState([]);
    const [SearchArray, setSearchArray] = useState([]);

    useEffect(() => {
        (async _ => {
            let projects = await getProjects();
            setProjectArray(projects);
            setLoading(false)
        })()
    }, []);

    const Search = async () => {
        let object = {
            SearchProjectName,
            SearchClintName,
            SearchSkill,
            SearchLocation,
            SearchDate
        }

        let projects = await getSearchData(object);
        setSearchArray(projects);
        setLoading(false)
    }

    return (
        <>
            <div className="container-fluid" style={{ backgroundImage: `url(${BGImage})` }}>
                <div className="row" >
                    <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2">
                    </div>
                    <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
                        <input className='InputFeild' placeholder="Search according to following Category" />
                    </div>
                    <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2">
                    </div>
                    <div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
                        <div className='SearchContainer'>
                            <div className="row">
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                </div>
                                <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                                    <h5 className="HeadingSearch">Search Category</h5>
                                </div>
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1 col-lg-1 col-xl-1">
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                    <input className="SubCataSearch" onChange={(e) => setSearchProjectName(e.target.value)} placeholder="Project name" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                    <input className="SubCataSearch" onChange={(e) => setSearchClintName(e.target.value)} placeholder="Client name" />
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                    <input className="SubCataSearch" onChange={(e) => setSearchSkill(e.target.value)} placeholder="Skills" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                    <input className="SubCataSearch" onChange={(e) => setSearchLocation(e.target.value)} placeholder="location" />
                                </div>
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                    <input className="SubCataSearch" onChange={(e) => setSearchDate(e.target.value)} placeholder="Start Date" />
                                </div>
                                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-4">
                                    <div className="row">
                                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                            <Link>
                                                <h6 className="Cancel">Cancel</h6>
                                            </Link>
                                        </div>
                                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                            <button className="SearchButton" onClick={Search} color="primary">
                                                <h6 className="ButtonText">Search</h6>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                </div>
                            </div>
                            <div>
                                <hr style={{ width: '90%' }} />
                                <div style={{ width: '100%', height: 20 }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2">
                    </div>
                </div>

                {/* Heading Text */}
                {loading === true ?
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                            </div>
                            <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 ListHeadingContainer">
                                <div className="row mt-3">
                                    <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5"></div>
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                        <ClipLoader color={color} loading={loading} size={45} />
                                    </div>
                                    <div className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                            </div>
                            <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 ListHeadingContainer">
                                <div className="row">
                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                        <h6 className="ListID">ID</h6>
                                    </div>
                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                        <h6 className="ListName">Project Name</h6>
                                    </div>
                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                        <h6 className="ListClint">Clint Name</h6>
                                    </div>
                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                        <h6 className="ListNum">Employees</h6>
                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                        <h6 className="Listexperience">Experience</h6>
                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                        <h6 className="Listskills">Skills</h6>
                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                        <h6 className="Listlocations">Location</h6>
                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                        <h6 className="ListstartDate">Stat Date</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                            </div>
                        </div>
                    </div>
                }
                {/* Heading Text */}


                {
                    ProjectArray.map(ls =>
                        <div className="row">
                            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                            </div>
                            <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                                <Card Item={ls} Model={handleShow} />
                            </div>
                            <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                            </div>
                        </div>
                    )}
                <div style={{ width: '100%', height: 200 }}></div>
            </div>
            <Modal
                show={show}
                handleClose={handleClose}
                Error={Error}
                setmodelName={setmodelName}
                setmodelYear={setmodelYear}
                setmodelLocation={setmodelLocation}
                setmodelSkill={setmodelSkill}
                Value={Value}
                modelName={modelName}
                modelYear={modelYear}
                modelLocation={modelLocation}
                modelSkill={modelSkill}
                setError={setError}
            />
        </>
    );
}

export default Dashboard;

