import React from 'react'

const Facilities = () => {
    return (
        <div className='facilities'>
            <div className="card" >
                <i className='fa fa-thermometer-empty'></i>
                <div className="card-body">
                    <h5 className="card-title">Fully A/C Class</h5>
                    <p className="card-text">Air conditioning in schools offers a better way to keep pupils and staff comfortable leaving teachers able to concentrate on teaching and pupils learning.</p>
                </div>
            </div>
            <div className="card">
            <i className='fa fa-television '></i>
                <div className="card-body">
                    <h5 className="card-title">Digital Classroom</h5>
                    <p className="card-text">Smart Classrooms are technology enhanced classrooms that foster opportunities for teaching and learning by integrating learning technology.</p>
                </div>
            </div>
            <div className="card">
            <i className='fa fa-bus '></i>
                <div className="card-body">
                    <h5 className="card-title">Transportation</h5>
                    <p className="card-text">We are Providing bus facilities for certain routes. School also provide optional transport facility on certain routes.</p>
                </div>
            </div>
            <div className="card">
            <i className='fa fa-book '></i>
                <div className="card-body">
                    <h5 className="card-title">Ultra Morden Library</h5>
                    <p className="card-text">We have a well-equipped library that can accommodate more than 50 students at a time. and also huge Collections of Books.</p>
                </div>
            </div>

        </div>
    )
}

export default Facilities