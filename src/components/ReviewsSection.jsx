import {
  Typography,
  Box,
  Avatar,
  Stack,
  Rating,
  TextField,
  FormControl,
  FormHelperText,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function ReviewsSection({ reviews }) {
  const [rating, setRating] = useState(0);
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    defaultValues: { rating: 0, review: "" },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box>
      <Stack spacing={3}>
        {reviews ? (
          reviews.map((review) => (
            <Box key={review.comment}>
              <Box
                sx={{
                  display: "flex",
                  columnGap: "10px",
                  alignItems: "center",
                  mb: "16px",
                }}
              >
                <Avatar>
                  {review.reviewerName[0] +
                    review.reviewerName.split(" ")[1][0]}
                </Avatar>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: "8px", fontWeight: "400" }}
                    color="mainText.main"
                  >
                    {review.reviewerName}
                  </Typography>
                  <Box
                    className="review-info"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Stack spacing={2} direction="row">
                      <Rating
                        size="small"
                        name="read-only"
                        value={review.rating}
                        readOnly
                      />
                      <Typography
                        component="span"
                        variant="subtitle2"
                        color="mainText.main"
                      >
                        ({review.rating})
                      </Typography>
                      <Typography
                        component="span"
                        variant="subtitle2"
                        color="mainText.main"
                      >
                        {new Date(review.date).toLocaleDateString()}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#374151" : "#fff",
                }}
              >
                {review.comment}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No Reviews Found</Typography>
        )}
      </Stack>
      <Box className="review-form" sx={{ mt: 6 }}>
        <Typography variant="h6">Write a Review for this product</Typography>
        <Box className="review-form" sx={{ mt: "20px" }}>
          <Box
            className="rating-field"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                position: "relative",
                width: "fit-content",
                "&::before": {
                  content: '"*"',
                  position: "absolute",
                  top: "0",
                  right: "-7px",
                  color: "#e94560",
                },
              }}
            >
              Your Rating
            </Typography>
            <Controller
              name="rating"
              control={control}
              rules={{ required: "Rating is required" }}
              render={({ field, fieldState: { error } }) => (
                <FormControl error={!!error}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <Rating
                      {...field}
                      size="medium"
                      value={field.value || 0}
                      onChange={(_, newValue) => field.onChange(newValue)}
                    />
                    <Typography component="span">
                      ({field.value || 0} / 5)
                    </Typography>
                  </Box>
                  <FormHelperText>{error?.message}</FormHelperText>
                </FormControl>
              )}
            />
          </Box>
          <Box
            className="review-field"
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", mt: "20px" }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                mb: "8px",
                position: "relative",
                width: "fit-content",
                "&::before": {
                  content: '"*"',
                  position: "absolute",
                  top: "0",
                  right: "-7px",
                  color: "#e94560",
                },
              }}
            >
              Your Review
            </Typography>
            <Controller
              name="review"
              control={control}
              rules={{ required: "Review field is required" }}
              render={({ field, fieldState: { error } }) => (
                <FormControl error={!!error}>
                  <TextField
                    error={error}
                    {...field}
                    multiline
                    rows={5}
                    fullWidth
                    placeholder="Write a review here..."
                    sx={{
                      fontSize: "14px",
                      "& textArea::placeholder": {
                        fontSize: "14px",
                      },
                    }}
                  />
                  <FormHelperText sx={{ fontSize: "16px" }}>
                    {error?.message}
                  </FormHelperText>
                </FormControl>
              )}
            />
            <Button
              sx={{ width: "fit-content", mt: "24px", textTransform: "none" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReviewsSection;
