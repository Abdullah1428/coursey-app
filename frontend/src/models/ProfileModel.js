class ProfileModel {
  constructor() {
    this.id = 0;
    this.firstName = 'Simon';
    this.lastName = 'Hallak';
    this.email = 'shallak@kth.se';
    this.password = 'Coursey123';
    this.year = 'Third';
    this.program = 'Media Technology';
    this.school = 'EECS';
  }

  setProfileDetails = (profileDetails) => {
    this.id = profileDetails.user.id;
    this.firstName = profileDetails.user.firstName;
    this.lastName = profileDetails.user.lastName;
    this.email = profileDetails.user.email;
    this.password = profileDetails.user.password;
    this.year = profileDetails.user.year;
    this.program = profileDetails.user.program;
    this.school = profileDetails.school.school;
  };

  getProfileDetails = () => {
    let id = this.id;
    let firstName = this.firstName;
    let lastName = this.lastName;
    let email = this.email;
    let password = this.password;
    let year = this.year;
    let program = this.program;
    let school = this.school;

    let profileDetail = {
      id,
      firstName,
      lastName,
      email,
      password,
      year,
      program,
      school,
    };

    return profileDetail;
  };
}

export default ProfileModel;
