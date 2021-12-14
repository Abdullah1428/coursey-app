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

  const id = req.params.id;

  const KTH_COURSE_DETAIL_API = `https://www.kth.se/api/kopps/v2/course/${id}/detailedinformation?l=en`;

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

  const KTH_COURSES_API = 'https://www.kth.se/api/kopps/v2/courses?l=en';

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  const { data } = await axios.get(KTH_COURSES_API, config);

  return res.json(data);
});

const searchCourse = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const query = req.params.query;

  const KTH_SEARCH_COURSE_API = `https://www.kth.se/api/kopps/v2/courses/search?text_pattern=${query}&l=en`;

  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };

  const { data } = await axios.get(KTH_SEARCH_COURSE_API, config);

  return res.json(data);
});

export { getCourseDetail, getAllCourses, searchCourse };
