import React, { useState } from 'react';
import NursingHeader from './NursingHeader';
import { format } from 'date-fns';
import AvailableNurse from './AvailableNurse';
import NursingbookingModal from './NursingbookingModal';
import { SetTitle } from '../../Utilities/SetTitle';

const Nursing = () => {
    SetTitle('Nursing');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedNurseModal, setSelectedNurseModal] = useState([]);
    const formatedDate = format(selectedDate, 'PP');
    return (
        <div className='nursing container'>
            <NursingHeader
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate} />
            <AvailableNurse
                formatedDate={formatedDate}
                setSelectedNurseModal={setSelectedNurseModal}
            />
            {/* booking modal for nursing */}
            <NursingbookingModal
                selectedNurseModal={selectedNurseModal}
                formatedDate={formatedDate}
            />
        </div>
    );
};

export default Nursing;