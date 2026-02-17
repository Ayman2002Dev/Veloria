import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";

function ProductSkeleton({ boxesLength }) {
  const skeletonArray = Array.from({ length: boxesLength });

  return (
    <>
      {skeletonArray.map((s, index) => (
        <Card
          key={index}
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Box>
            <Skeleton variant="rectangular" height={250} />
          </Box>

          <CardContent sx={{ flexGrow: 1 }}>
            <Skeleton width="80%" />
            <Skeleton width="100%" />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "5px",
              }}
            >
              <Skeleton width="60%" />
            </Box>

            <Skeleton width="80%" />

            <Skeleton width="50%" />
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default ProductSkeleton;
