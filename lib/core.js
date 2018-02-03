const request = require("request");
const crypto = require('crypto');

class Api {
  constructor(options) {
    this.vendorId = options.vendorId;
    this.vendorKey = options.vendorKey;
    this.sessionUid = '';
    this.district = options.district;
    this.baseURL = options.baseURL;
  }
   
  /*
  ---------------------------------------------
  ********** GRADEBOOK API FUNCTIONS **********
  ---------------------------------------------
  */

  gb_get_student_assignments_by_student(input, callback) { // GET get a students assignments with their id
    let path  = `${this.baseURL}/GBService/${this.district}/Assignment?StudentID=${input}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});

  }

  gb_get_assignment_by_id(assignmentId, callback) { // GET probably will not use
    let path = `${this.baseURL}/GBService/${this.district}/Assignment?AssignmentID=${assignmentId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignments_by_course(courseId, sectDist, callback) { // GET probably will not use
    let path = `${this.baseURL}/GBService/${this.district}/Assignment?CourseID=${courseId}&SectionDescr=${sectDist}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignments_by_teacher_id(staffId, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/Assignment?TeacherID=${staffId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_create_assignment() { // POST
    // path /GBService/{district}/Assignment
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_save_assignment() { // PUT
    // path /GBService/{district}/Assignment
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignment_score_by_student(studentId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/AssignmentScore?StudentID=${studentId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignment_score_by_assignment(assignmentId, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/AssignmentScore?AssignmentID=${assignmentId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignment_score_by_course(courseId, secDisc, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/AssignmentScore?CourseID=${courseId}&SectionDescr=${secDisc}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignment_score_by_teacher(teacherId, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/AssignmentScore?TeacherID=${teacherId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignment_score_by_assignment_student(, callback) { // GET
    // path /GBService/{district}/AssignmentScore?TeacherID={Staff_DBID}
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignment_score_by_class_student_assignment(classId, studentId, assignmentId, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/AssignmentScore?ClassID=${classId}&StudentID=${studentId}&AssessmentID=${assignmentId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_create_assignment_score() { // POST
    // path /GBService/{district}/AssignmentScore
  }

  gb_save_assignment_score() { // PUT
    // path /GBService/{district}/AssignmentScore
  }

  gb_get_assignment_types(assignmentId, callback) {// GET
    let path = `${this.baseURL}/GBService/${this.district}/AssignmentType?AssignmentTypeID=${assignmentId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_assignment_types_teacher(teacherId, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/AssignmentType?TeacherID=${teacherId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  } 

  gb_get_assignment_types_class(classId, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/ AssignmentType?ClassID=${classId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  } 

  gb_get_assignment_types_course(courseId, secDisc, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/AssignmentType?CourseID=${courseId}&SectionDescr=${secDisc}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }  

  gb_create_assignment_type() { // POST
    // path /GBService/{district}/ AssignmentType
  }

  gb_save_assignment_type() { // PUT
    // path /GBService/{district}/ AssignmentType
  }

  gb_get_all_classes(callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/Class`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_class(classId, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/Class?ClassID=${classId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_classes_by_teacher(staffId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/Class?TeacherID=${staffId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_classes_by_student(studentId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/Class?StudentID=${studentId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_classes_by_school(schoolId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/Class?SchoolID=${schoolId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  gb_get_classes_by_course(courseId, secDis, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/Class?CourseID=${courseId}&SectionDescr=${secDis}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_class_enrollment(classId, callback) { // GET 
    let path  = `${this.baseURL}/GBService/${this.district}/ClassEnrollment?ClassID=${classId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_classes_enrollment_by_teacher(teacherId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/ClassEnrollment?TeacherID=${teacherId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_classes_by_school(schoolId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/ClassEnrollment?SchoolID=${schoolId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_classes_by_course(courseId, callback) { // GET 
    let path = `${this.baseURL}/GBService?${this.district}/ClassEnrollment?CourseID=${courseId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_marks(callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/MarkType`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_all_schools(callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/School`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_school(schoolId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/School?SchoolID=${schoolId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_schools_by_class(classId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/School?ClassID=${classId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_all_teachers(callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/Teacher`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_teacher(staffId, callback) { // GET
    let path = `${this.baseURL}/GBService/${this.district}/Teacher?TeacherID=${staffId}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_teachers_by_school(schoolId, callback) { // GET 
    let path = `${this.baseURL}/GBService/${this.district}/Teacher?SchoolID=${schoolId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  /*
  ---------------------------------------------
  ********* STUDENT INFO API FUNCTIONS ********
  ---------------------------------------------
  */

  get_absent_note_codes(id, year, isSummer, callback) { // GET
    let path = `${this.baseURL}/SisService/AbsenceNoteCode?leaOrSchoolInfoRefId=${id}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_absent_note_codes_by_school_and_year(id, year, callback) { // GET 
    let path = `${this.baseURL}/SisService/AbsenceNoteCode?leaOrSchoolInfoRefId=${id}&schoolYear=${year}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_absent_note_codes_by_school(id, callback) { // GET 
    let path = `${this.baseURL}/SisService/AbsenceNoteCode?leaOrSchoolInfoRefId={id}`
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_absent_reaason_code(id, year, isSummer, callback) { // GET 
    let path = `${this.baseURL}/SisService/AbsenceReasonCode?leaOrSchoolInfoRefId=${id}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_attendance_code(id, year, isSummer, callback) { // GET 
    let path = `${this.baseURL}/SisService/AttendanceCode?leaOrSchoolInfoRefId=${id}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_bell_schedule(id, year, isSummer, callback) { // GET 
    let path = `${this.baseURL}/SisService/BellSchedule?leaOrSchoolInfoRefId=${id}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_calendar_date_school_year(id, year, callback) { // GET 
    let path = `${this.baseURL}/SisService/CalendarDate?leaOrSchoolInfoRefId=${id}&schoolYear=${year}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }
  
  get_codes_by_school(id, year, codeTypeName, callback) { // GET 
    let path = `${this.baseURL}/SisService/Codes?SchoolId=${id}&SchoolYear=${year}&codeTypeName=${codeTypeName}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }
  get_contact_by_student(id, callback) { // GET 
    let path = `${this.baseURL}/SisService/Contact?studentPersonalRefId=${id}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_course(id, year, isSummer, callback) { // GET 
    let path = `${this.baseURL}/SisService/Course?leaOrSchoolInfoRefId=${id}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});

  }

  get_course_history_by_student_school(studentId, schoolId, callback) { // GET 
  let path = `${this.baseURL}/SisService/CourseHistory?studentId=${studentId}&schoolId=${schoolId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_discipline_codes(id, year, isSummer, callback) { // GET
    let path = `${this.baseURL}/SisService/DisciplineCodes?leaOrSchoolInfoRefId=${id}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});

  }

  get_discipline_incident(id, callback) { // GET
    let path = `${this.baseURL}/SisService/DisciplineIncident?disciplineIncidentRefId=${id}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_discipline_incident_by_student(id, callback) { // GET 
    let path = `${this.baseURL}/SisService/DisciplineIncident?studentPersonalRefId=${id}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  create_discipline_incident() { // POST 
    // path SisService/DisciplineIncident
  }

  update_discipline_incident() { // PUT
    // path SisService/DisciplineIncident
  }

  get_student_membership(id, year, callback) { // GET
    let path  = `${this.baseURL}/SisService/MembershipGroup?schoolId=${id}&schoolYear=${year}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_room(id, callback) { // GET 
    let path = `${this.baseURL}/SisService/Room?roomInfoRefId=${id}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_room_by_roomtype_school(roomId, schoolInfoRef, callback) { // GET
    let path = `${this.baseURL}/SisService/Room?roomTypeRefId=${roomId}&leaOrSchoolInfoRefId=${schoolInfoRef}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_school_info(id, year, isSummer, callback) { // GET 
    let path = `${this.baseURL}/SisService/SchoolInfo?leaOrSchoolInfoRefId=${id}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_school_enrollement(id, callback) { // GET 
    let path = `${this.baseURL}/SisService/SchoolEnrollment?studentSchoolEnrollmentRefId=${id}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_school_enrollment_session(id, year, isSummer, callback) { // GET 
    let path = `${this.baseURL}/SisService/SchoolEnrollment?studentPersonalRefId=${id}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_staffmember(id, callback) { // GET 
    let path = `${this.baseURL}/SisService/Staff?staffPersonalRefId=${id}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_staff(id, year, callback) { // GET 
    let path = `${this.baseURL}/SisService/Staff?leaOrSchoolInfoRefId=${id}&schoolYear=${year}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_student_attendance_summary(studentRef, schoolRef, year, isSummer, callback) { // GET
    let path = `${this.baseURL}/SisService/StudentAttendanceSummary?studentPersonalRefId=${studentRef}&leaOrSchoolInfoRefId=${schoolRef}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_student_daily_attendance(studentRef, schoolRef, date,  callback) { // GET 
    let path = `${this.baseURL}/SisService/StudentDailyAttendance?studentPersonalRefId=${studentRef}&schoolInfoRefId=${schoolRef}&date=${date}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_student_daily_attendance_school(schoolId, date, callback) { // GET
    let path = `${this.baseURL}/SisService/StudentDailyAttendance?schoolInfoRefId=${schoolId}&date=${date}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  create_student_daily_attendance() { // POST
    // path SisService/StudentDailyAttendance
  }

  update_Student_daily_attendance() { // PUT
    // path SisService/StudentDailyAttendance
  }

  get_student_membership_school(studentId, schoolId, year, callback) { // GET 
    let path = `${this.baseURL}/SisService/StudentMembership?studentId=${studentId}&schoolId=${schoolId}&schoolYear=${year}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_student_period_attendance(studentRef, schoolRef, date, absentId, callback) { // GET 
    let path = `${this.baseURL}/SisService/StudentPeriodAttendance?studentPersonalRefId=${studentRef}&schoolInfoRefId=${schoolRef}&date=${date}&absenceRecordTypeId=${absentId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_student_personal(studentId, year, isSummer, callback) { // GET
    let path = `${this.baseURL}/SisService/StudentPersonal?studentPersonalRefId=${studentId}&schoolYear=${year}&isSummerSession=${isSummer}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_student_picture(studentId, callback) { // GET 
    let path = `${this.baseURL}/SisService/StudentPicture?studentPersonalRefId=${studentId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }

  get_transportation(schoolId, year, studentId, callback) { // GET 
    let path = `${this.baseURL}/SisService/Transportation?SchoolInfoRefId=${schoolId}&schoolYear=${year}&studentPersonalRefID=${studentId}`;
    getRequest(path, (err, data) => { callback(dataCallback(err, data))});
  }


}

function constructHeaders() {
  let reqTime = new Date();
  let hash = crypto.createHmac('sha1','').update(new Buffer(`${this.vendorId}${this.sessionUid}${this.reqTime}${this.vendorKey}`)).digest('base64');
  return {
    "VL-Authorization": `${this.vendorId}||${hash}`,
    "Date": reqTime,
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
}

function constructPayload(options) {
  let payload = JSON.stringify(options.payload);
  return {
    uri: options.path,
    headers: constructHeaders(),
    method: options.reqType,
    body: payload // when posting must be an array of objects
  };
}

function postRequest(input, callback) {
  request.post(constructPayload(input), function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, body);
    } else {
      callback({error: err, body: body});
    }
  });
}

function getRequest(input, callback) {
  request.get(constructPayload({path: input, reqType: 'GET'}), function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, body); // contains count, result, and clientmessage
    } else {
      callback({error: err, body: body});
    }
  });
}

function dataCallback(err, data) {
  if (!err) {
    return null, data;
  } else {
    return err;
  }
}

function create(options) {
  return new Api(options);
}

module.exports = create;