import React, { useEffect, useState } from 'react'
import CourseDetail from '../views/CourseDetail'

import axios from 'axios'

const CourseDetailPresenter = (props) => {
  const [courseDetail, setCourseDetail] = useState({})

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      let apUrl = 'http://localhost:5000/api/course/DH2642'

      const { data } = await axios.get(apUrl)

      props.courseModel.setCourseDetails(data)

      setCourseDetail(props.courseModel.getCourseDetails())
    }

    getCourseDataFromAPI()
  }, [])

  return (
    <>
      <CourseDetail courseDetail={courseDetail} />
    </>
  )
}

export default CourseDetailPresenter
