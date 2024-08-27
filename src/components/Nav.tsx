import { Box, Typography, AppBar, Toolbar, Button, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import imageSrc from "../assets/background.jpg";

const MainBox = {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 3fr 2fr",
  gridTemplateRows: "1fr 3fr 1fr",
  minHeight: "100vh",
  background: `url(${imageSrc})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const logo = {
  gridRow: "1 / 2",
  gridColumn: "1 / 2",
  placeSelf: "center",
  color: "white",
  fontSize: "24px",
  marginTop: "3%",
  textAlign: "center",
};

const NavLinks = {
  gridRow: "1 / 2",
  gridColumn: "2 / 3",
  placeSelf: "center",
  color: "white",
  fontSize: "24px",
  width: "100%",
  background: "transparent",
  border: "none",
  marginTop: "3%",
  boxShadow: "2px 2px 5px rgba(40, 1, 215, 0.5)", 
};

const buttonStyle = {
  color: "#fff",
  flex: 1,
  marginTop: "1em",
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '#03A7D3',  
    textDecorationThickness: '3px',  
  },
};

const MyCV = {
  gridRow: "1 / 2",
  gridColumn: "3 / 4",
  placeSelf: "center",
  color: "#fff",
  fontSize: "20px",
  marginTop: "1.7em",
  textAlign: "center",
  cursor: "pointer",
  textDecoration: "none",
  backgroundColor: "#03A7D3",
  padding: ".7em",
  borderRadius: "20px",
};

const info = {
  gridRow: "2 / 3",
  gridColumn: "1 / 3",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
  color: "#fff",
  width: "60%",
  padding: "6em",
};

const textInfoTitle = {
  fontSize: "2rem",
  textAlign: "left",
  color: "#fff",
  textShadow: "0 0 7px #fff",
};
const textInfoSubTitle = {
  textAlign: "left",
  color: "#03A7D3",
  fontSize: "1.2rem",
  lineHeight: "1.6",
  padding: "20px 0",
};
const iconStyles = {
  fontSize: 40,
  margin: "0 10px",
  color: "#F9636C",
};
export default function Nav(): JSX.Element {
  return (
    <Box sx={MainBox}>
      <Typography sx={logo}>Wedyan</Typography>
      <AppBar position="static" sx={NavLinks}>
        <Toolbar>
          <Button  sx={buttonStyle}>Who's am I</Button>
          <Button sx={buttonStyle}>Skills</Button>
          <Button sx={buttonStyle}>Projects</Button>
        </Toolbar>
      </AppBar>

      <Link
        id="MyCV"
        sx={MyCV}
        href="https://drive.google.com/file/d/1cMR7rm66WCPggxSlccF4i2SAU2MFlfML/view?usp=sharing"
        download="Wedyan_CV.pdf"
        target="_blank"
      >
        Download My CV
      </Link>

      <Box sx={info} id="info">
        <Typography sx={textInfoTitle} variant="h4">
          I am Wedyan
        </Typography>
        <Typography sx={textInfoSubTitle} id="textInfoSubTitle">
          Front-End Developer, I specialize in transforming static design
          concepts into dynamic and interactive user interfaces. With a focus on
          bridging the gap between design and functionality in websites process
          development. My expertise lies in utilizing front-end technologies to
          create engaging interfaces that are responsive and optimized for user
          interaction.
        </Typography>

        <Box sx={{ textAlign: "left" }}>
          <Link
            href="https://github.com/wedyaan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={iconStyles} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/wedyaan-aloufi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={iconStyles} />
          </Link>
          <Link href="mailto:wedyaan-aloufi@hotmail.com">
            <EmailIcon sx={iconStyles} />
          </Link>
        </Box>
      </Box>

    
    </Box>
  );
}
