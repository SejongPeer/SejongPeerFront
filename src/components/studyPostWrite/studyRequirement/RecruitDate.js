import React, { useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { format } from 'date-fns';

import style from '../StudyRequirement.module.css';

const ReucruitDate = ({
    startDate,
    endDate,
    setChangeDate,
    dateRange,
    handleDatePickerFocus
}) => {
    const datePickerRef = useRef(null);

    const handleWrapperClick = () => {
        datePickerRef.current.setFocus();
    };

    return (
        <div className={style.flexWrapper} onClick={handleWrapperClick}>
            <div className={style.leftWrapper}>
                <label className={style.label}>
                    모집 기간
                </label>

                <div className={style.valueText}>
                    {startDate && endDate
                    ? `${format(startDate, 'M월 d일')} ~ ${format(
                        endDate,
                        'M월 d일'
                        )}`
                    : null}
                </div>
            </div>

            <DatePicker
                ref={datePickerRef}
                className={style.datePicker}
                selectsRange={true}
                locale={ko}
                dateFormat="MM월dd일"
                selected={dateRange.startDate}
                startDate={dateRange.startDate}
                endDate={dateRange.endDate}
                onChange={dates => setChangeDate(dates)}
                onFocus={handleDatePickerFocus}
                showPopperArrow={false}
            />
        </div>
    )
}

export default ReucruitDate;