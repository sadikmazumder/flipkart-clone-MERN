//component
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Banner />
      </Box>
    </>
  );
};

export default Home;
