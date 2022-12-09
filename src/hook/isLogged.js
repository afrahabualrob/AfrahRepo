import { useState } from "react";
import { useCookies } from "react-cookie";

const isLogged = () => {
  const [logged, setLogged] = useState(false);
  const [cookie] = useCookies();
  let loggedStatus;
  if ("Token" in cookie) {
    loggedStatus = true;
    setLogged(loggedStatus);
  }
  return loggedStatus;
};

export default isLogged;
