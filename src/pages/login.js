import { Box, TextField,Typography, Button, Grid } from "@mui/material";
import { useState } from "react";

export const LoginPage = ({ setUserActivited }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (login === "abdulmalik" && password === "1212") setUserActivited(true);
  };

  return (
    <Grid container>
      <Grid xs={8}>
        <img alt="" style={{height:"100vh",width:"100%",objectFit:"cover"}} src={require("./3390.png")} />
      </Grid>
      <Grid xs={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            gap: "10px",
          }}
        >
            <Typography  sx={{fontSize:"28px",fontWeight:"bold",padding:"0"}}>
                Tizimga xush kelibsiz !
            </Typography>
            <Typography sx={{color:"#8D9BA8", fontSize:"16px"}}>
                Tizimga kirish uchun, login va parol orqali <br/>
                autentifikatsiya jarayonidan o’ting
            </Typography>
          <TextField
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder={"Login"}
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Password"}
            type={"password"}
          />
          <Button onClick={submit}>Tizimga kirish</Button>
        </Box>
      </Grid>
    </Grid>
  );
};
