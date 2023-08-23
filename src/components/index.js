import * as React from "react";
import {useState, useContext} from "react";
import {
    Box,
    Button,
    Grid,
    List,
    Divider,
    ListItem,
    ListItemButton,
    Drawer,
    ListItemIcon,
    ListItemText,
    Typography,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material"



import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FastFoodContext } from "../context/index";
import {
    Routes,
    useNavigate,
    Route,
    useLocation,
    useSearchParams,
} from "react-router-dom";
import {CiAlignTop, CiGrid2H} from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri"

import { FoodProducts } from "../data/product";
import {FoodCategorys } from "../data/category"


export const MenuMahsulot = () => {
    const [isActive, setIsActive] = useState();
    const [vertical, setVertical] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const {tutorials, setTutorials} = useContext(FastFoodContext)



    const [state, setState] = React.useState({

        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    }



    const maxsulodDelete = (id) => {
        setTutorials((prev) => {
            return prev.filter((event) => {
                return event.id !== id;
            })
        })
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{px:"20px",pt:"40px"}}>
                <Typography sx={{fontWeight:"bold",mb:4}}>Yangi maxsulot qo’shish</Typography>

                <Typography sx={{color:"#81898F", fontSize:"12px"}}>
                    Maxsulot nomi
                </Typography>
                <TextField
                    sx={{mb:2,width:"100%"}}
                    id="outlined-size-small"
                    // defaultValue="Small"
                    size="small"
                />
                <FormControl sx={{ width: "100%",mb:2 }} size="small">
                    <Typography sx={{color:"#81898F", fontSize:"12px"}}>
                        Kategoriya
                    </Typography>

                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"

                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Typography sx={{color:"#81898F", fontSize:"12px"}}>
                    Narxi
                </Typography>
                <TextField
                    sx={{mb:2,width:"100%"}}
                    id="outlined-size"
                    // defaultValue="Small"
                    size="small"
                />
                <Typography sx={{color:"#81898F", fontSize:"12px"}}>
                    Qo’shimcha ma’lumot
                </Typography>
                <TextField
                    sx={{mb:2,width:"100%"}}
                    id="outlined-size-small"
                    // defaultValue="Small"
                    size="small"
                />
                <Typography sx={{color:"#81898F", fontSize:"12px"}}>
                    Maxsulot rasmini yuklang
                </Typography>
                <TextField
                    sx={{mb:2,width:"100%"}}
                    id="outlined-size-small"
                    // defaultValue="Small"
                    size="small"
                />
            </List>

        </Box>
    );

    return(
        <>



                <Grid>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            height: "80px",
                            justifyContent: "space-around",
                        }}

                    >
                        <div>
                            {['right'].map((anchor) => (
                                <React.Fragment key={anchor}>

                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                    >
                                        {list(anchor)}
                                    </Drawer>

                        <Box onClick={toggleDrawer(anchor, true)}
                            sx={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                cursor:"pointer"
                            }}
                        >
                            <Typography
                                sx={{
                                    background: "#20D472",
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "30px",
                                    color: "white",
                                }}
                            >
                                +
                            </Typography>
                            <Typography>
                                Yangi buyurtma <br /> qo’shish
                            </Typography>
                        </Box>
                                </React.Fragment>
                            ))}
                        </div>
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                display: "flex ",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 550,

                                    backgroundColor: "#EDEFF3",
                                    borderRadius: 10,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    p: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: isActive === 1 ? "#fff" : "",
                                        px: 5,
                                        py: "6px",
                                        borderRadius: 10,
                                        boxShadow:
                                            isActive === 1
                                                ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                                                : "",
                                        cursor: "pointer",

                                        color: isActive === 1 ? "black" : "#A0A7AD",
                                    }}
                                    onClick={() => setIsActive(1)}
                                >
                                    <Typography sx={{ fontSize: 10 }}>Yangi</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        px: 5,
                                        py: "6px",
                                        borderRadius: 10,
                                        backgroundColor: isActive === 2 ? "#fff" : "",
                                        boxShadow:
                                            isActive === 2
                                                ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                                                : "",
                                        cursor: "pointer",

                                        color: isActive === 2 ? "black" : "#A0A7AD",
                                    }}
                                    onClick={() => setIsActive(2)}
                                >
                                    <Typography sx={{ fontSize: 10 }}>Qabul qilingan</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: isActive === 3 ? "#fff" : "",
                                        px: 5,
                                        py: "6px",
                                        borderRadius: 10,
                                        boxShadow:
                                            isActive === 3
                                                ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                                                : "",
                                        cursor: "pointer",

                                        color: isActive === 3 ? "black" : "#A0A7AD",
                                    }}
                                    onClick={() => setIsActive(3)}
                                >
                                    <Typography sx={{ fontSize: 10 }}>Jo'natilgan</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: isActive === 4 ? "#fff" : "",
                                        px: 5,
                                        py: "6px",
                                        borderRadius: 10,
                                        boxShadow:
                                            isActive === 4
                                                ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                                                : "",
                                        cursor: "pointer",

                                        color: isActive === 4 ? "black" : "#A0A7AD",
                                    }}
                                    onClick={() => setIsActive(4)}
                                >
                                    <Typography sx={{ fontSize: 10 }}>Yopilgan</Typography>
                                </Box>
                            </Box>
                            {/*{vertical === 2 ? (*/}
                            {/*  <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>*/}
                            {/*    None*/}
                            {/*  </Typography>*/}
                            {/*) : (*/}
                            {/*  ""*/}
                            {/*)}*/}
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: "#fff",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    backgroundColor: "#EDEFF3",
                                    gap: "10px",
                                    borderRadius: 10,
                                    p: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "25px",
                                        height: "25px",
                                        backgroundColor: vertical === 1 ? "#fff" : "",
                                        color: vertical === 1 ? "black" : "#A0A7AD",
                                        borderRadius: "50%",
                                        cursor: "pointer",

                                        boxShadow:
                                            vertical === 1
                                                ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                                                : "",
                                    }}
                                    onClick={() => setVertical(1)}
                                >
                                    <CiGrid2H style={{ fontSize: 20 }} />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "25px",
                                        height: "25px",
                                        backgroundColor: vertical === 2 ? "#fff" : "",
                                        color: vertical === 2 ? "black" : "#A0A7AD",
                                        borderRadius: "50%",
                                        cursor: "pointer",

                                        boxShadow:
                                            vertical === 2
                                                ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)"
                                                : "",
                                    }}
                                    onClick={() => setVertical(2)}
                                >
                                    <CiAlignTop style={{ fontSize: 20 }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>



            <Box sx={{ background: "#EDEFF3", height: "90vh",pt:"10px", }}>
                <Box container sx={{
                    py:"10px",
                    paddingLeft:"40px",

                    background:"#fff",

                }}>
                    <Box sx={{display: "flex",
                        alignItems: "center",}}>
                        <Typography sx={{width:"20%"}}>Maxsulot</Typography>
                        <Typography sx={{width:"20%"}}>Kategoriya</Typography>
                        <Typography sx={{width:"20%"}}>Narxi</Typography>
                        <Typography sx={{width:"20%"}}>Qo’shimcha</Typography>
                        <Typography sx={{width:"20%"}}>ACTION</Typography>
                    </Box>
                </Box>

                <Box sx={{ my: 3, px: 3,
                    height:"80vh",overflow:"scroll", }}>

                    {tutorials.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        my: 1,
                                        backgroundColor: "#fff",
                                        borderRadius: "10px",
                                        px: 2,
                                        py: 1,
                                        display: "flex",
                                        alignItems: "center",


                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            width: "25%",
                                        }}
                                    >
                                        <img src={item.img} alt="proImg" />
                                        <Typography>{item.name}</Typography>
                                    </Box>

                                    {FoodCategorys.map((item2, index2) => {
                                        if (item2.id === item.category) {
                                            return (
                                                <Box sx={{ width: "25%" }} key={index2}>
                                                    <Typography>
                                                        {item2.name}
                                                    </Typography>
                                                </Box>
                                            );
                                        }
                                    })}
                                    {/*<Box>*/}
                                    {/*    <Typography>*/}
                                    {/*        {item.category === item2.id ? item2.name : ""}*/}
                                    {/*    </Typography>*/}
                                    {/*</Box>*/}
                                    <Box sx={{ width: "25%" }}>
                                        <Typography>
                                            {Intl.NumberFormat("en-En").format(item.price)} UZS
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: "25%" }}>
                                        <Typography>{item.addition}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex",  alignItems: "center", gap: 2 }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: 40,
                                                height: 40,
                                                border: "4px solid #EDEFF3",
                                                borderRadius: "50%",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <FiEdit2 style={{ color: "#2D3A45" }} />
                                        </Box>
                                        <Box

                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: 40,
                                                height: 40,
                                                border: "4px solid #EDEFF3",
                                                borderRadius: "50%",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => maxsulodDelete(item.id)}
                                        >
                                            <RiDeleteBin6Line style={{ color: "#2D3A45" }} />
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                </Box>
            </Box>
        </>
    )
}