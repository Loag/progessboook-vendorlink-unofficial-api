const request = require("request");
const crypto = require('crypto');

class Api {
  constructor(options) {
    this.vendorId = options.vendorId;
    this.vendorKey = options.vendorKey;
    this.sessionUid = '';
  }
  
  /*
  ---------------------------------------------
  ********** GRADEBOOK API FUNCTIONS **********
  ---------------------------------------------
  */

  gb_get_student_assignments_by_student() { // GET get a students assignments with their id
    // path /GBService/{district}/Assignment?StudentID={Student_DBID}
  }

  gb_get_assignment_by_it() { // GET probably will not use
    // path /GBService/{district}/Assignment?AssignmentID={Assignment_DBID}
  }

  gb_get_assignments_by_course() { // GET probably will not use
    // path /GBService/{district}/ Assignment?CourseID={Course_DBID}&SectionDescr={SectionDescription}
  }

  gb_get_assignments_by_teacher_id() { // GET
    // path /GBService/{district}/Assignment?TeacherID={Staff_DBID}
  }

  gb_create_assignment() { // POST
    // path /GBService/{district}/Assignment
  }

  gb_save_assignment() { // PUT
    // path /GBService/{district}/Assignment
  }

  gb_get_assignment_score_by_student() { // GET 
    // path /GBService/{district}/AssignmentScore?StudentID={Student_DBID}
  }

  gb_get_assignment_score_by_assignment() { // GET
    // path /GBService/{district}/AssignmentScore?AssignmentID={Assignment_DBID}
  }

  gb_get_assignment_score_by_course() { // GET
    // path /GBService/{district}/ AssignmentScore?CourseID={Course_DBID}&SectionDescr={SectionDescription}
  }

  gb_get_assignment_score_by_teacher() { // GET
    // path /GBService/{district}/AssignmentScore?TeacherID={Staff_DBID}
  }

  gb_get_assignment_score_by_assignment_student() { // GET
    // path /GBService/{district}/AssignmentScore?TeacherID={Staff_DBID}
  }

  gb_get_assignment_score_by_class_student_assignment() { // GET
    // path /GBService/{district}/ AssignmentScore?ClassID={Class_DBID}&StudentID={Student_DBID}&AssessmentID={Asses sment_DBID}
  }

  gb_create_assignment_score() { // POST
    // path /GBService/{district}/AssignmentScore
  }

  gb_save_assignment_score() { // PUT
    // path /GBService/{district}/AssignmentScore
  }

  gb_get_assignment_types() {// GET
    // path /GBService/{district}/AssignmentType? AssignmentTypeID ={ AssignmentType_DBID}
  }

  gb_get_assignment_types_teacher() { // GET
    // path /GBService/{district}/ AssignmentType?TeacherID ={Teacher_DBID}
  } 

  gb_get_assignment_types_class() { // GET
    // path /GBService/{district}/ AssignmentType?ClassID={Class_DBID}
  } 

  gb_get_assignment_types_course() { // GET
    // path /GBService/{district}/ AssignmentType?CourseID={Course_DBID}&SectionDescr={SectionDescription}
  }  

  gb_create_assignment_type() { // POST
    // path /GBService/{district}/ AssignmentType
  }

  gb_save_assignment_type() { // PUT
    // path /GBService/{district}/ AssignmentType
  }

  gb_get_all_classes() { // GET
    // path /GBService/{district}/Class
  }

  gb_get_classe() { // GET
    // path /GBService/{district}/Class?ClassID={Class_DBID}
  }

  gb_get_classes_by_teacher() { // GET 
    // path /GBService/{district}/Class?TeacherID={Staff_DBID}
  }

  gb_get_classes_by_student() { // GET 
    // path /GBService/{district}/Class?StudentID={Student_DBID}
  }

  gb_get_classes_by_school() { // GET 
    // path /GBService/{district}/Class?SchoolID={School_DBID}
  }

  gb_get_classes_by_course() { // GET 
    // path /GBService/{district}/Class?CourseID={Course_DBID}&SectionDescr={SectionDescription}
  }

  get_class_enrollment() { // GET 
    // path /GBService/{district}/ClassEnrollment?ClassID={Class_DBID}
  }

  get_classes_enrollment_by_teacher() { // GET 
    // path /GBService/{district}/ClassEnrollment?TeacherID={Teacher_DBID}
  }

  get_classes_by_school() { // GET 
    // path /GBService/{district}/ClassEnrollment?SchoolID={School_DBID}
  }

  get_classes_by_course() { // GET 
    // path / GBService?{district}/ClassEnrollment?CourseID={Course_DBID}
  }

  get_marks() { // GET 
    // path /GBService/{district}/MarkType
  }

  get_all_schools() { // GET 
    // path /GBService/{district}/School
  }

  get_school() { // GET 
    // path /GBService/{district}/School?SchoolID={School_DBID}
  }

  get_schools_by_class() { // GET 
    // path /GBService/{district}/School?ClassID={Class_DBID}
  }

  get_all_teachers() { // GET 
    // path /GBService/{district}/Teacher
  }

  get_teacher() { // GET
    // path /GBService/{district}/Teacher?TeacherID={Staff_DBID}
  }

  get_teachers_by_school() { // GET 
    // path /GBService/{district}/Teacher?SchoolID={School_DBID}
  }

  /*
  ---------------------------------------------
  ********* STUDENT INFO API FUNCTIONS ********
  ---------------------------------------------
  */

  get_absent_note_codes() { // GET
    // path SisService/ AbsenceNoteCode?leaOrSchoolInfoRefId={id}&schoolYear={year}&isSummerSession={boolean}
  }

  get_absent_note_codes_by_school_and_year() { // GET 
    // path SisService/AbsenceNoteCode?leaOrSchoolInfoRefId={id}&schoolYear={year}
  }

  get_absent_note_codes_by_school() { // GET 
    // path SisService/AbsenceNoteCode?leaOrSchoolInfoRefId={id}
  }

  get_absent_reaason_code() { // GET 
    // path SisService/AbsenceReasonCode?leaOrSchoolInfoRefId={id}&schoolYear={year}&isSummerSession={boolean}
  }

  get_attendance_code() { // GET 
    // path SisService/AttendanceCode?leaOrSchoolInfoRefId={id}&schoolYear={year}&isSummerSession ={boolean}
  }

  get_bell_schedule() { // GET 
    // path SisService/BellSchedule?leaOrSchoolInfoRefId={id}&schoolYear={year}&isSummerSession={b oolean}
  }

  get_calendar_date_school_year() { // GET 
    // path SisService/CalendarDate?leaOrSchoolInfoRefId={id}&schoolYear={year}
  }
  
  get_codes_by_school() { // GET 
    // path SisService/Codes?SchoolId={id}&SchoolYear={year}&codeTypeName={codeTypeName}
  }
  get_contact_by_student() { // GET 
    // path SisService/Contact?studentPersonalRefId={id}
  }

  get_course() { // GET 
    // path SisService/Course?leaOrSchoolInfoRefId={id}&schoolYear={year}&isSummerSession={boolean }

  }

  get_course_history_by_student_school() { // GET 
    // path SisService/CourseHistory?studentId={studentid}&schoolId={schoolid}
  }

  get_discipline_codes() { // GET
    // path SisService/DisciplineCodes?leaOrSchoolInfoRefId={id}&schoolYear={year}&isSummerSession= {boolean}

  }

  get_discipline_incident() { // GET
    // path SisService/DisciplineIncident?disciplineIncidentRefId={id}
  }

  get_discipline_incident_by_student() { // GET 
    // path SisService/DisciplineIncident?studentPersonalRefId={id}
  }

  create_discipline_incident() { // POST 
    // path SisService/DisciplineIncident
  }

  update_discipline_incident() { // PUT
    // path SisService/DisciplineIncident
  }

  get_student_membership() { // GET
    // path SisService/MembershipGroup?schoolId={id}&schoolYear={schoolyear}
  }

  get_room() { // GET 
    // path SisService/Room?roomInfoRefId={id}
  }

  get_room_by_roomtype_school() { // GET
    // path SisService/Room?roomTypeRefId={id}&leaOrSchoolInfoRefId={id}
  }

  get_school_info() { // GET 
    // path SisService/SchoolInfo?leaOrSchoolInfoRefId={id}&schoolYear={year}&isSummerSession={bool ean}
  }

  get_school_enrollement() { // GET 
    // path SisService/SchoolEnrollment?studentSchoolEnrollmentRefId={id}
  }

  get_school_enrollment_session() { // GET 
    // path SisService/SchoolEnrollment?studentPersonalRefId={id}&schoolYear={year}&isSummerSessio n={boolean}
  }

  get_staffmember() { // GET 
    // path SisService/Staff?staffPersonalRefId={id}
  }

  get_staff() { // GET 
    // path SisService/Staff?leaOrSchoolInfoRefId={id}&schoolYear={year}
  }

  get_student_attendance_summary() { // GET
    // path SisService/StudentAttendanceSummary?studentPersonalRefId={id}&leaOrSchoolInfoRefId={id} &schoolYear={year}&isSummerSession={boolean}
  }

  get_student_daily_attendance() { // GET 
    // path SisService/StudentDailyAttendance?studentPersonalRefId={id}&schoolInfoRefId={id}&date={date}
  }

  get_student_daily_attendance_school() { // GET
    // path SisService/StudentDailyAttendance?schoolInfoRefId={id}&date={date}
  }

  create_student_daily_attendance() { // POST
    // path SisService/StudentDailyAttendance
  }

  update_Student_daily_attendance() { // PUT
    // path SisService/StudentDailyAttendance
  }

  get_student_membership_school() { // GET 
    // path SisService/StudentMembership?studentId={id}&schoolId={id}&schoolYear={Year}
  }

  get_student_period_attendance() { // GET 
    // path SisService/StudentPeriodAttendance?studentPersonalRefId={id}&schoolInfoRefId={id}&date={d ate}&absenceRecordTypeId={id}
  }

  get_student_personal() { // GET
    // path SisService/StudentPersonal?studentPersonalRefId={id}&schoolYear={year}&isSummerSession ={boolean}
  }

  get_student_picture() { // GET 
    // path SisService/StudentPicture?studentPersonalRefId={id}
  }

  get_transportation() { // GET 
    // path SisService/Transportation?SchoolInfoRefId={id}&schoolYear={year}&studentPersonalRefID={id}
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
      callback({error: err, body: body.Message});
    }
  });
}

function getRequest(input, callback) {
  request.get(constructPayload(input), function(err, res, body) {
    if (!err && res.statusCode === 200) {
      callback(null, body); // contains count, result, and clientmessage
    } else {
      callback({error: err, body: body.Message});
    }
  });
}

function create(options) {
  return new Api(options);
}

module.exports = create;