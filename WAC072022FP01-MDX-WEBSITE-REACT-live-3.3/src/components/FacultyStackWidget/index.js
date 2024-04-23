import React from 'react'
import Style from './FacultyStackWidget.module.scss';

import { CourseStackkData } from '../DummyData'
import FacultyStack from '../FacultyStack'

const FacultyStackWidget = () => {
  return (
    <section className={Style.faculty_stack_widget}>
        <FacultyStack props={CourseStackkData}  />
    </section>
  )
}

export default FacultyStackWidget