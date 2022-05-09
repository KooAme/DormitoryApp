const express = require('express');
const { Op } = require('sequelize');
const HlthRequest = require('../models/hlth_request');
const StdInfo = require('../models/std_info');
const router = express.Router();

// 헬스 예약자 관리
//'http://localhost:3001/hlth'
router.post('/', async (req, res, next) => {
  try {
    let s_Id = req.body.std_id;
    let s_Name = req.body.std_name;
    let s_StartDate = req.body.start_ttime;
    let s_EndDate = req.body.end_date;
    let s_StartTime = req.body.start_time;
    let s_EndTime = req.body.end_time;
    s_Id = s_Id ? s_Id : { [Op.ne]: null };
    s_Name = s_Name ? s_Name : { [Op.ne]: null };
    s_StartDate = s_StartDate
      ? s_StartDate
      : { [Op.ne]: null };
    s_EndDate = s_EndDate ? s_EndDate : { [Op.ne]: null };
    s_StartTime = s_StartTime
      ? s_StartTime
      : { [Op.ne]: null };
    s_EndTime = s_EndTime ? s_EndTime : { [Op.ne]: null };
    const data = await HlthRequest.findAll({
      include: [
        {
          model: StdInfo,
        },
      ],
      where: {
        std_id: s_Id,
        std_name: s_Name,
        //req_date BETWEEN start_date AND end_date
        //req_time BETWEEN start_time AND end_time
      },
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;