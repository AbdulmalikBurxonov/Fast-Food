
import styled from "styled-components";
import Box from "@mui/material/Box";

export const styles = {
    board: { background: "#aaa", p: 2, width: 240, height: "100%" },
    menu: { display: "flex",
        alignItems: "center",
        gap: "10px",
        pt: "10px",
        pb:"10px",
        cursor:"pointer",}
};

export const StyledList = styled(Box)`
  background: #f1f2f4;
  padding: 16px;
  width: 240px;
  border-radius: 16px;
  height: 100%;
  .list {
    padding: 8px 16px;
    background: white;
    border-radius: 10px;
    margin-bottom: 8px;
    cursor: pointer;
    color: #757575;
  }
`;
