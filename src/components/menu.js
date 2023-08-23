import * as React from "react";
import { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { styles } from "./style"
import { BsChat } from "react-icons/bs";
import { Box, Toolbar, Typography, Grid, Avatar, Button } from "@mui/material";
import { CiGrid2H, CiAlignTop } from "react-icons/ci";
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import { useContext } from "react";
import { FastFoodContext } from "../context/index";

export const Menuu = () => {
  const [isActive, setIsActive] = useState();
  const [vertical, setVertical] = useState();
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

  return (
    <>

      <Grid container>
        <Grid xs={2}>

          <Box>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "15px", p: 2 }}
            >
              <Avatar
                alt="Remy Sharp"
                sx={{ width: "70px", height: "70px" }}
                src="https://media.istockphoto.com/id/1309966291/photo/delivery-fast-food-concept.webp?b=1&s=170667a&w=0&k=20&c=34EQrgXWR22_R5RE0whfwmj1U9XIl3jVRixt-AevUSQ="
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Fast Food
                </Typography>
                <Typography sx={{ color: "#959CA1", fontSize: "12px" }}>
                  Online maxsulot sotuvi
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                  onClick={() => navigate("/buyurtmalar")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  pt: "10px",
                    pb:"10px",
                    cursor:"pointer",
                    background: location.pathname === "/buyurtmalar" ? "#FCB600" : "#fff",
                    color: location.pathname === "/buyurtmalar" ? "#fff" : "#2D3A45"

                }}
              >
                <Box sx={{
                    padding:"5px",
                    background: "#f6f6f6",
                    borderRadius: "8px",
                    marginLeft: "20px",
                    color:"#2D3A45"
                }}>
                    <CheckCircleOutlineIcon

                    />
                </Box>
                Buyurtmalar
              </Typography>
              <Typography
                  onClick={() => navigate("/mahsulotlar")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  pt: "10px",
                    pb:"10px",
                    cursor:"pointer",
                    background: location.pathname === "/mahsulotlar" ? "#FCB600" : "#fff",
                    color: location.pathname === "/mahsulotlar" ? "#fff" : "#2D3A45"

                }}
              >
                <Box  sx={{
                    padding:"5px",
                    background: "#f6f6f6",
                    borderRadius: "8px",
                    marginLeft: "20px",
                    color:"#2D3A45"
                }}>
                    <WorkOutlineIcon

                    />
                </Box>
                Maxsulotlar
              </Typography>
              <Typography
                  onClick={() => navigate("/kategoriya")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  pt: "10px",
                    pb:"10px",
                    cursor:"pointer",
                    background: location.pathname === "/kategoriya" ? "#FCB600" : "#fff",
                    color: location.pathname === "/kategoriya" ? "#fff" : "#2D3A45"

                }}
              >
                <Box  sx={{
                    padding:"5px",
                    background: "#f6f6f6",
                    borderRadius: "8px",
                    marginLeft: "20px",
                    color:"#2D3A45",

                }}>
                    <ViewInArIcon

                    />
                </Box>
                Katalog
              </Typography>

              <Typography
                  onClick={() => navigate("/mijozlar")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  py: "10px",
                    cursor:"pointer",
                    background: location.pathname === "/mijozlar" ? "#FCB600" : "#fff",
                    color: location.pathname === "/mijozlar" ? "#fff" : "#2D3A45"

                }}
              >
               <Box sx={{
                   padding:"5px",
                   background: "#f6f6f6",
                   borderRadius: "8px",
                   marginLeft: "20px",
                   color:"#2D3A45"
               }}>
                   <PeopleAltIcon
                   />
               </Box>
                Mijozlar
              </Typography>
            </Box>
          </Box>

        </Grid>
        <Grid xs={10}>
            <Outlet/>
        </Grid>
      </Grid>
    </>
  );
};
