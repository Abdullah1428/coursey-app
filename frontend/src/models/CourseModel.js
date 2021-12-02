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
    this.examiner = []
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
    this.examiner = courseDetail.examiner
  }

  getCourseDetails = () => {
    courseCode = this.courseCode
    title = this.title
    titleOther = this.titleOther
    departmentCode = this.departmentCode
    department = this.department
    cancelled = this.cancelled
    deactivated = this.deactivated
    recruitmentText = this.recruitmentText
    credits = this.credits
    creditUnitLabel = this.creditUnitLabel
    creditUnitAbbr = this.creditUnitAbbr
    state = this.state
    courseUrl = this.courseUrl
    examiner = this.examiner

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
      examiner,
    }

    return courseDetail
  }
}
