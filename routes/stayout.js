const express = require('express');
const StayoutRequest = require('../models/stayout_request');
const router = express.Router();

// 'http://localhost:3001/hlth/create'

router.post('/create', async (req, res, next) => {
  try {
    const data = await StayoutRequest.create({
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      std_id: req.body.std_id,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/hlth/search'
// 학번으로 시작일, 종료일 조회 후 PK 순으로 정렬
router.post('/search', async (req, res, next) => {
  try {
    const data = await StayoutRequest.create({
      where: { std_id: req.body.std_id, },
      attributes: ['start_date', 'end_date'], 
      order: [['stayout_id', 'DESC']],
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/hlth/update'
// PK, 학번으로 수정
router.post('/update', async (req, res, next) => {
  try {
    const data = await StayoutRequest.update({
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      where: {
        std_id: req.body.std_id,
        stayout_id: req.body.stayout_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/hlth/delete'
// PK, 학번으로 삭제
router.post('/delete', async (req, res, next) => {
  try {
    const data = await StayoutRequest.destroy({
      where: {
        std_id: req.body.std_id,
        stayout_id: req.body.stayout_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;