import { Box, Container, Typography } from "@mui/material";

function DescriptionSection({ description }) {
  return (
    <Box mt="20px">
      <Typography>{description}</Typography>
    </Box>
  );
}

export default DescriptionSection;
