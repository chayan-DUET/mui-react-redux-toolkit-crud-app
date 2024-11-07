import { Box, styled } from "@mui/material";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "app/components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "features/olduserDetailSlice";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppChayan() {
  // const dispatch = useDispatch();
  // const { users, loading, searchData } = useSelector((state) => state.appdata);
  // //const users =[]; 
  // useEffect(() => {
  //   dispatch(showUser());
  //   console.log( "hi1");
  //   console.log( users); 
  //   console.log( "hi");
  // }, [dispatch]);
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.appdata);

  useEffect(() => {
    dispatch(showUser());
  }, []);



  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Table" }]} />
      </Box>
      <SimpleCard title="Pagination Table hlw dear Chayan how r u with nice MUI">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
}
