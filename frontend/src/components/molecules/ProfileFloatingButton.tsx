import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "200px",
    height: "64px",
    backgroundColor: "white",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    borderRadius: "40px",
    position: "absolute",
    left: 0,
    bottom: 120,
    right: 0,
    margin: "auto",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    width: "160px",
    height: "40px",
  },
  iconItem: {
    cursor: "pointer",
    fontSize: "28px",
  },
}));

const ProfileFloatingButton: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.icons}>
        <SettingsBackupRestoreIcon className={classes.iconItem} />
        <ThumbUpAltIcon
          className={classes.iconItem}
          style={{ margin: "0 24px", color: "red" }}
        />
        <ThumbDownIcon className={classes.iconItem} style={{ color: "blue" }} />
      </div>
    </div>
  );
};

export default ProfileFloatingButton;
