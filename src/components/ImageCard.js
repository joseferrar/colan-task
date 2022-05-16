import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ReactPaginate from "react-paginate";
import Card from "@mui/material/Card";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import dummydata from "../Data/data.json";

function ImageCard() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState(dummydata);
  const [perPage] = useState(3);

  console.log(data);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={
          <ArrowBackIosNewIcon style={{ color: offset === 0 && "gray" }} />
        }
        nextLabel={
          <ArrowForwardIosIcon style={{ color: offset === 2 && "gray" }} />
        }
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={3}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        activeLinkClassName={"ht"}
      />
      <Grid container spacing={2} marginTop={2}>
        {data.slice(offset, offset + perPage).map((item, index) => (
          <Grid item xs={12} sm={3} md={3} key={index} marginLeft={6}>
            <Card style={{ borderRadius: 12 }} elevation={1}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="auto"
                  height="400"
                  image={item?.image}
                  alt={item?.image}
                />
                <CardContent>
                  <Typography
                    fontWeight="bold"
                    textAlign="center"
                    fontSize={20}
                  >
                    {item?.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ImageCard;
