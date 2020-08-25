import React from 'react'

function InfoArea() {
    return (
        <div className="info-wrapper">
            <div className="container">

                <div className="row">

                    <div className="col-lg-2"></div>
                    <div className=" col-lg-4 heading">
                        <h3>For a free consultation about what beauty service is best suited to you call us!</h3>
                        <p>Let us help you find your nearest Depilex Branch</p>
                    </div>
                    <div className=" col-lg-3 number">
                        <h3>+92 323 8871800</h3>
                        <hr className="line" style={{border:'1px solid black'}}></hr>
                    </div>
                    <div className=" col-lg-3"></div>

                </div>
                <div className="row"> 
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <button type="button" style={{backgroundColor:'black',color:'white'}} class="btn  btn-lg btn-block info-btn">View More Details</button>
                </div>
                <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default InfoArea
