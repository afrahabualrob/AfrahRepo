import React, { useEffect, useState } from "react";
import { Grid, Avatar } from "@mui/material";
import styles from './style.module.css'
import { useCookies } from "react-cookie";
import axios from "axios";

const LoggedUser = () => {
  const [cookie, setCookie] = useCookies();
  const [userData, setUserData] = useState({});
 
  useEffect(() => {
    axios
      .get("http://restapi.adequateshop.com/api/users/148307", {
        headers: {
          Authorization: `Bearer ${cookie.Token}`,
        },
      })
      .then((user) => setUserData(user.data));
  }, []);

  return (
    <Grid container alignItems="center" spacing={2} flexWrap="no-wrap">
      <Grid item className={styles.userName} >
        Welcome, {userData.name}
      </Grid>
      <Grid item>
        <Avatar alt={userData.name} src={userData.profilepicture} />
      </Grid>
    </Grid>
  );
};

export default LoggedUser;
