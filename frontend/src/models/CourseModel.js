class CourseModel {
  constructor() {
    this.courseCode = ''
    this.title = ''
    this.titleOther = ''
    this.departmentCode = ''
    this.department = {
      code: '',
      name: '',
    }
    this.cancelled = false
    this.deactivated = false
    this.recruitmentText = ''
    this.credits = 0
    this.creditUnitLabel = 'Credits'
    this.creditUnitAbbr = 'hp'
    this.state = ''
    this.courseUrl = `https://www.kth.se/student/kurser/kurs/${
      this.courseCode ? this.courseCode : ''
    }`
    this.examiners = []
  }

  setCourseDetails = (courseDetail) => {
    this.courseCode = courseDetail.course.courseCode
    this.title = courseDetail.course.title
    this.titleOther = courseDetail.course.titleOther
    this.departmentCode = courseDetail.course.departmentCode
    this.department = {
      code: courseDetail.course.department.code,
      name: courseDetail.course.department.name,
    }
    this.cancelled = courseDetail.course.cancelled
    this.deactivated = courseDetail.course.deactivated
    this.recruitmentText = courseDetail.course.recruitmentText
    this.credits = courseDetail.course.credits
    this.creditUnitLabel = courseDetail.course.creditUnitLabel
    this.creditUnitAbbr = courseDetail.course.creditUnitAbbr
    this.state = courseDetail.course.state
    this.courseUrl = `https://www.kth.se/student/kurser/kurs/${
      this.courseCode ? this.courseCode : ''
    }`
    this.examiners = courseDetail.examiners
  }

  getCourseDetails = () => {
    let courseCode = this.courseCode
    let title = this.title
    let titleOther = this.titleOther
    let departmentCode = this.departmentCode
    let department = this.department
    let cancelled = this.cancelled
    let deactivated = this.deactivated
    let recruitmentText = this.recruitmentText
    let credits = this.credits
    let creditUnitLabel = this.creditUnitLabel
    let creditUnitAbbr = this.creditUnitAbbr
    let state = this.state
    let courseUrl = this.courseUrl
    let examiners = this.examiners

    let courseDetail = {
      courseCode,
      title,
      titleOther,
      departmentCode,
      department,
      cancelled,
      deactivated,
      recruitmentText,
      credits,
      creditUnitLabel,
      creditUnitAbbr,
      state,
      courseUrl,
      examiners,
    }

    return courseDetail
  }
}

export default CourseModel
