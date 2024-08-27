 import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const iconStyles = {
    fontSize: 30, // Adjust the size as needed
    color: "#fff",
    marginLeft: "0.5em", // Add some spacing between the text and the icon
  };

  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        fontSize:20
      }}
    >
     
      <p>wedyan &copy; {new Date().getFullYear()}   </p>
      <Link
        href="https://github.com/wedyaan"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <GitHubIcon sx={iconStyles} />
      </Link>
    </div>
  );
}