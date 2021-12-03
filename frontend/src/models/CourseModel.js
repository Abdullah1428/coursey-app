class CourseModel {
  constructor() {
    this.courseCode = ''
    this.title = ''
    this.titleOther = ''
    this.department = {
      code: '',
      name: '',
    }
    this.publicSyllabusVersions = []
    this.cancelled = false
    this.deactivated = false
    this.recruitmentText = ''
    this.supplementaryInfo = ''
    this.prerequisites = ''
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
    this.department = {
      code: courseDetail.course.department.code,
      name: courseDetail.course.department.name,
    }
    this.publicSyllabusVersions = courseDetail.publicSyllabusVersions
    this.cancelled = courseDetail.course.cancelled
    this.deactivated = courseDetail.course.deactivated
    this.recruitmentText = courseDetail.course.recruitmentText
    this.supplementaryInfo = courseDetail.course.supplementaryInfo
    this.prerequisites = courseDetail.course.prerequisites
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
    let department = this.department
    let publicSyllabusVersions = this.publicSyllabusVersions
    let cancelled = this.cancelled
    let deactivated = this.deactivated
    let recruitmentText = this.recruitmentText
    let supplementaryInfo = this.supplementaryInfo
    let prerequisites = this.prerequisites
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
      department,
      publicSyllabusVersions,
      cancelled,
      deactivated,
      recruitmentText,
      supplementaryInfo,
      prerequisites,
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
