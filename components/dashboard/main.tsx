import { Box, Container, Toolbar } from "@mui/material";

const Main = (props: any) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        background: "#F0F0F0",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {props.children}
      </Container>
    </Box>
  );
};

export default Main;
