import React, { useEffect, useState } from 'react'
import CourseDetail from '../views/CourseDetail'

import axios from 'axios'

const CourseDetailPresenter = () => {
  const [courseDetail, setCourseDetail] = useState({})

  useEffect(() => {
    const getCourseDataFromAPI = async () => {
      console.log('called')
      let apUrl = 'http://localhost:5000/api/course/DH2642'

      const { data } = await axios.get(apUrl)

      console.log(data)
    }

    getCourseDataFromAPI()
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    <>
      <CourseDetail courseDetail={courseDetail} />
    </>
  )
}

export default CourseDetailPresenter
