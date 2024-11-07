
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showUser } from "features/olduserDetailSlice";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Box,
  Icon,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  IconButton,
  TablePagination

} from "@mui/material";
import EditNoteIcon from '@mui/icons-material/EditNote';
import VisibilityIcon from '@mui/icons-material/Visibility';

// STYLED COMPONENT
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } }
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } }
  }
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD."
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD."
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD."
  },
  {
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  }
];

export default function PaginationTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

////
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading } = useSelector((state) => state.appdata);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <Box style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:'5px'
      }} 
  sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>;
  }
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                
                <TableCell align="left">{subscriber.name}</TableCell>
                <TableCell align="center">{subscriber.email}</TableCell>
                <TableCell align="center">{subscriber.age}</TableCell>
                <TableCell align="center">{subscriber.gender}</TableCell>
                <TableCell align="center">${subscriber.name}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon color="edit">
                      
                      <Link to={`/material/updateuser/${subscriber.id}`} className="card-link">
                    <EditNoteIcon />
                  </Link>
                    </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon color="view"><VisibilityIcon> </VisibilityIcon></Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={subscribarList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
}
