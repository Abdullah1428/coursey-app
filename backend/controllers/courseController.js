import asyncHandler from 'express-async-handler';
import { validationResult } from 'express-validator';

import axios from 'axios';

/*
 *   @desc   get course detail
 *   @route  POST /course/:id
 *   @access Private
 */
const getCourseDetail = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const KTH_COURSE_DETAIL_API =
    'https://www.kth.se/api/kopps/v2/course/DH2642/detailedinformation?l=en';

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  const { data } = await axios.get(KTH_COURSE_DETAIL_API, config);

  return res.json(data);
});

const getAllCourses = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const KTH_COURSE_DETAIL_API = 'https://www.kth.se/api/kopps/v2/courses';

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  const { data } = await axios.get(KTH_COURSE_DETAIL_API, config);

  return res.json(data);
});

export { getCourseDetail, getAllCourses };
