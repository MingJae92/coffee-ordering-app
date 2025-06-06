import { Box, Typography } from "@mui/material";
import {
  outerWrapperStyle,
  backgroundImageStyle,
  overlayContentStyle,
  headingStyle,
  descriptionStyle,
 
} from "../../styles/CallToAction/CallToAction.styles";

const CallToAction = () => {
  return (
    <Box sx={outerWrapperStyle}>
      <Box sx={backgroundImageStyle} />
      <Box sx={overlayContentStyle}>
        <Typography sx={headingStyle}>
          {" "}
          Coffee, seats and zero distractions! 
        </Typography>
        <Typography>Service starting soon!</Typography>
        <Typography sx={descriptionStyle}>
         "Prepare you hearts before the Lord as we worship and praise the Lord!"
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
            mt: 3,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default CallToAction;
