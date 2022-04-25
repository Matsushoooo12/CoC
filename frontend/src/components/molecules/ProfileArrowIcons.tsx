import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  left: {
    width: "40px",
    height: "40px",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "40px",
    margin: "auto",
  },
  right: {
    width: "40px",
    height: "40px",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: "40px",
    margin: "auto",
  },
}));

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const ProfileArrowIcons: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { handleNext, handleBack } = props;
  return (
    <>
      <div className={classes.left} onClick={handleBack}>
        <ArrowLeftIcon color="primary" fontSize="large" />
      </div>
      <div className={classes.right} onClick={handleNext}>
        <ArrowRightIcon color="primary" fontSize="large" />
      </div>
    </>
  );
};

export default ProfileArrowIcons;
