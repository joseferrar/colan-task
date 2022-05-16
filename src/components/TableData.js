import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableData() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
  };

  const offset1 = offset * perPage;
  console.log(offset1);

  return (
    <div style={{ margin: 16 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#000" }}>
            <TableRow>
              <TableCell style={{ color: "#fff" }}>#</TableCell>
              <TableCell align="left" style={{ color: "#fff" }}>
                {" "}
                Name
              </TableCell>
              <TableCell align="left" style={{ color: "#fff" }}>
                Job title
              </TableCell>
              <TableCell align="left" style={{ color: "#fff" }}>
                Mobile Number
              </TableCell>
              <TableCell align="left" style={{ color: "#fff" }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(offset1, offset1 + perPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">React Js</TableCell>
                <TableCell align="left">+91 98843545534</TableCell>
                <TableCell align="left">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginLeft: "auto" }}>
        <ReactPaginate
          previousLabel={
            <ArrowBackIosNewIcon style={{ color: offset === 0 && "gray" }} />
          }
          nextLabel={
            <ArrowForwardIosIcon
              style={{ color: offset === data.length && "gray" }}
            />
          }
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={50}
          marginPagesDisplayed={0}
          pageRangeDisplayed={perPage}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default TableData;
