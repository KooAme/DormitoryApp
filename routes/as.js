const express = require('express');
const AsRequest = require('../models/as_request');
const router = express.Router();


// 'http://localhost:3001/as/create'
router.post('/create', async (req, res, next) => {
  try {
    const data = await AsRequest.create({
      title: req.body.title,
      content: req.body.content,
      confirm: false,
      request_date: Date.now(),
      vst_date: req.body.allow,
      std_id: req.body.std_id,
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/as/search'
// 신청날짜, 제목 (추후에 수정 예정), 상태, 수리일자 조회
router.post('/search', async (req, res, next) => {
  try {
    const data = await AsRequest.findAll({
      where: { std_id: req.body.std_id },
      attributes: ['request_date', 'title', 'confirm', 'repair_date'],
      order: [['confirm', 'DESC']],
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/as/update'
// PK, 학번으로 수정
router.post('/update', async (req, res, next) => {
  try {
    const data = await AsRequest.update({
      title: req.body.title,
      content: req.body.content,
      request_date: Date.now(),
      where: {
        std_id: req.body.std_id,
        as_id: req.body.as_id,
      },
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 'http://localhost:3001/as/delete'
// PK, 학번으로 삭제
router.post('/delete', async (req, res, next) => {
  try {
    const data = await AsRequest.destroy({
      where: {
        std_id: req.body.std_id,
        as_id: req.body.as_id,
      }
    });
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;