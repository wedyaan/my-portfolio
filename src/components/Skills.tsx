import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons'; 
import '../App.css' 

import backgroundImage from '../assets/y.jpg';

const MainBox = {
  height: 'auto',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding : '2em 0',

 
};

const TitleText = {
  textAlign: 'center',
  color: 'white',
   
};

const Skills = () => {
  const iconColor = '#F9636C'; 

  const skills = [
    { icon: <FontAwesomeIcon icon={faHtml5} size="2x" color={iconColor} /> },  
    { icon: <FontAwesomeIcon icon={faCss3Alt} size="2x" color={iconColor} /> }, 
    { icon: <FontAwesomeIcon icon={faJs} size="2x" color={iconColor} /> },  
    { icon: <FontAwesomeIcon icon={faReact} size="2x" color={iconColor} /> }, 
  ];

  return (
    <Box sx={MainBox}>
      <Typography variant="h4" sx={TitleText}>
        Skills
      </Typography>
      <ImageList
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingTop: '2em',
          flexWrap: 'wrap',
        }}
        variant="masonry"
        cols={skills.length}
      >
        {skills.map((skill, index) => (
          <ImageListItem
            key={index}
            sx={{
              textAlign: 'center',
              borderRadius: '50%',
              padding: '1.5em',
              fontSize: 28,
              backgroundColor: '#fff',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#03A7D3',
              },
              
            }}
          >
            {skill.icon}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Skills;