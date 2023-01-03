import React from 'react';
import { DayPicker } from 'react-day-picker';
import nursing from '../../images/nursing.jpg';

const NursingHeader = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className='select-date py-5'>
            <div className="row">
                <div className="col-md-6">
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
                <div className="col-md-6">
                    <img src={nursing} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default NursingHeader;