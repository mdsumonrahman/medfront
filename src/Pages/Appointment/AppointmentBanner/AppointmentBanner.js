import React from 'react';
import chair from '../../../images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='py-5 hero'>
            <div className=" container">
                <div className="hero-content row flex-row-reverse align-items-center ">
                    <div className="col-md-6">
                        <img src={chair} alt="dentist chair" className=" img-fluid" />

                    </div>
                    <div className='col-md-6 d-flex justify-content-center '>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;