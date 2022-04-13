import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from '@mui/material/Pagination';
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import "./datatable.css";
import { deleteAlert, getAlerts } from "../../../../actions/alert";

const useStyles = makeStyles((theme) => ({
  tableHead: {
    fontSize: "0.7rem !important",
    fontWeight: "bold !important",
  },
  tabledata: {
    fontSize: "0.7rem !important",
    border: "none !important",
  },
}));

const Datatable = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    getAlerts({ page, pageSize }, (type, response) => {
      if(type === 'success'){
          setData([ ...response.data[0].data ])
          const totalPage = Math.ceil(response.data[0].count[0].count / pageSize)
          setPageCount(totalPage)
      }
    });
  };

  const handleDelete = (id) => {
    deleteAlert(id, (type, response) => {
        if(type === 'success') {
            fetchData()
        }
    })
  }

  return (
    <div className="datatable_wrapper">
      <div className="">
        <ColorButton variant="contained">Alerts</ColorButton>
        <TriggeredAlerts variant="contained">triggered Alerts</TriggeredAlerts>
      </div>
      <TableContainer>
        <Table sx={{ fontSize: "0.5rem" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component={"th"} className={classes.tableHead}>
                Name
              </TableCell>
              <TableCell component={"th"} className={classes.tableHead}>
                Price Signal
              </TableCell>
              <TableCell component={"th"} className={classes.tableHead}>
                Criteria
              </TableCell>
              <TableCell component={"th"} className={classes.tableHead}>
                Value
              </TableCell>
              <TableCell component={"th"} className={classes.tableHead}>
                Email
              </TableCell>
              <TableCell component={"th"} className={classes.tableHead}>
                Active Days
              </TableCell>
              <TableCell component={"th"} className={classes.tableHead}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="td" className={classes.tabledata}>
                  {row.name}
                </TableCell>
                <TableCell component="td" className={classes.tabledata}>
                  {row.priceSignal}
                </TableCell>
                <TableCell component="td" className={classes.tabledata}>
                  {row.criteria}
                </TableCell>
                <TableCell component="td" className={classes.tabledata}>
                  {row.value}
                </TableCell>
                <TableCell component="td" className={classes.tabledata}>
                  {row.email}
                </TableCell>
                <TableCell component="td" className={classes.tabledata}>
                  {row.activeDays.toString()}
                </TableCell>
                <TableCell component="td" className={classes.tabledata}>
                  <DeleteIcon style={{ fontSize: '1rem' }} onClick={() => handleDelete(row._id)}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination_container">
         <Pagination count={pageCount} variant="outlined" shape="rounded" onChange={(event, page) => setPage(page)}/>
      </div>
    </div>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#0d1148",
  minWidth: "7rem",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: "#0d1148",
  },
}));

const TriggeredAlerts = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "white",
  minWidth: "7rem",
  borderRadius: 10,
  marginLeft: "1rem",
  "&:hover": {
    backgroundColor: "white",
  },
}));

export default Datatable;
