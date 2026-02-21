import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import { Link } from "react-router";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: <FaXTwitter size="16px" />,
      url: "https://x.com/AymanOs85197088",
    },
    { id: 2, icon: <FaGoogle size="16px" />, url: "ayman.osama.dev@gmail.com" },
    {
      id: 3,
      icon: <FaGithub size="16px" />,
      url: "https://github.com/Ayman2002Dev",
    },
    {
      id: 4,
      icon: <FaLinkedin size="16px" />,
      url: "www.linkedin.com/in/ayman-osama-089357238",
    },
  ];
  return (
    <Paper elevation={0} component="footer" sx={{ mt: 9 }} square>
      <Container
        maxWidth="xl"
        component="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.main",
          p: 0,
          pt: 4,
          px: { xs: 2, md: 3 },
          "& > *": {
            color: "textWhite.main",
          },
          "& a": {
            display: "block",
            color: "textWhite.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        }}
      >
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Veloria
              </Typography>

              <Typography variant="subtitle2" mb={3} mt={1}>
                <Typography component="strong">Veloria</Typography> is a modern
                e-commerce platform designed to deliver a smooth, secure, and
                enjoyable online shopping experience. It brings together
                high-quality products across multiple categories, allowing
                customers to shop easily from anywhere.
              </Typography>

              <Box display="flex" gap={2}>
                {/* Google Play */}
                <Box
                  sx={{
                    bgcolor: "#0c2a4d",
                    px: "16px",
                    py: "12px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    component="img"
                    src={googlePlay}
                    alt="Get it on Google Play"
                    height={24}
                  />

                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: 8,
                        color: "textWhite.main",
                        lineHeight: 1.3,
                      }}
                    >
                      Get it on
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "textWhite.main",
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      Google Play
                    </Typography>
                  </Box>
                </Box>

                {/* App Store */}
                <Box
                  sx={{
                    bgcolor: "#0c2a4d",
                    px: "16px",
                    py: "12px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    component="img"
                    src={appStore}
                    alt="Download on the App Store"
                    height={24}
                  />

                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: 8,
                        color: "textWhite.main",
                        lineHeight: 1.3,
                      }}
                    >
                      Download on the
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "textWhite.main",
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      App Store
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography
              variant="h6"
              mb={1.5}
              sx={{ fontSize: "18px", fontWeight: 500, lineHeight: 1 }}
            >
              About Us
            </Typography>

            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Careers
            </Typography>
            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Our Stores
            </Typography>
            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Our Cares
            </Typography>
            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Terms & Conditions
            </Typography>
            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Privacy Policy
            </Typography>
          </Grid>

          {/* Column 3 */}
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography
              variant="h6"
              mb={1.5}
              sx={{ fontSize: "18px", fontWeight: 500, lineHeight: 1 }}
            >
              Customer Care
            </Typography>

            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Help Center
            </Typography>
            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Track Your Order
            </Typography>
            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Corporate & Bulk Purchasing
            </Typography>
            <Typography component={Link} to="#" variant="subtitle2" py={0.8}>
              Returns & Refunds
            </Typography>
          </Grid>

          {/* Column 4 */}
          <Grid item size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography
              variant="h6"
              mb={1.5}
              sx={{ fontSize: "18px", fontWeight: 500, lineHeight: 1 }}
            >
              Contact Us
            </Typography>

            <Typography variant="subtitle2" py={0.8}>
              Zagazig, Al Sharqia, Egypt
            </Typography>
            <Typography variant="subtitle2" py={0.8}>
              Email: ayman.osama.dev@gmail.com
            </Typography>
            <Typography variant="subtitle2" py={0.8}>
              Phone: +1 1123 456 780
            </Typography>
            <Box className="social-icons">
              <Stack direction="row" gap={2}>
                {socialLinks.map((link) => (
                  <IconButton
                    component={Link}
                    key={link.id}
                    to={link.id === 2 ? `mailto:${link.url}` : link.url}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      width: "36px",
                      height: "36px",
                      p: "10px",

                      "&.MuiButtonBase-root": {
                        display: "flex",
                      },

                      "& > *": {
                        color: "textWhite.main",
                      },

                      "&:hover": {
                        bgcolor: "textWhite.main",
                        "& > *": {
                          color: "primary.main",
                        },
                      },
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <Divider sx={{ bgcolor: "#a7a8ad" }} />
            <Typography variant="body2" textAlign="center" py={3}>
              &copy; {new Date().getFullYear()} Veloria. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Footer;
