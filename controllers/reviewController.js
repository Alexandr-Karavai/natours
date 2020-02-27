const Review = require('../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');

exports.getReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.body.tourId) filter = { tour: req.body.tourId };
  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    resul: reviews.length,
    data: {
      reviews
    }
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  const review = await Review.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      review
    }
  });
});
