import React from 'react';

function Card(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="ListContainer">
                            <div className="row">
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                    <h6 className="ListID">1</h6>
                                    <button className="ListButton" onClick={props.Model} color="primary">
                                        <h6 className="ButtonText">Apply</h6>
                                    </button>
                                </div>
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                    <h6 className="ListName">{props.Item.projectName}</h6>
                                </div>
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                    <h6 className="ListClint">{props.Item.clientName}</h6>
                                </div>
                                <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                                    <h6 className="ListNum">{props.Item.employees}</h6>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <h6 className="Listexperience">{props.Item.experience}</h6>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <h6 className="Listskills">{props.Item.skills}</h6>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <h6 className="Listlocations">{props.Item.locations}</h6>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <h6 className="ListstartDateValue">{props.Item.startDate}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
