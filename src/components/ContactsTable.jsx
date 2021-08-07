import React from "react";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import { NATIONALITIES } from "../constants/constants";
import { useStyles } from "../styles/styles";

const ContactsTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell width="13%">Fullname</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell width="15%">Location</TableCell>
            <TableCell>Nationalities</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <TableRow key={el.login.uuid}>
              <TableCell>
                <Avatar
                  src={el.picture.thumbnail}
                  alt={`${el.name.title} ${el.name.first} ${el.name.last}`}
                />
              </TableCell>
              <TableCell>
                {el.name.title} {el.name.first} {el.name.last}
              </TableCell>
              <TableCell>
                <Typography className={classes.typography}>
                  {moment(el.dob.date).format("dddd, l, hh:mm a")}
                </Typography>
                <Typography className={classes.typography}>
                  {el.dob.age} years
                </Typography>
              </TableCell>
              <TableCell>{el.email}</TableCell>
              <TableCell>{el.phone}</TableCell>
              <TableCell>
                <Typography component="p" className={classes.typography}>
                  /{el.location.country}/
                </Typography>
                <Typography component="p" className={classes.typography}>
                  {`${el.location.street.number} ${el.location.street.name},`}
                </Typography>
                <Typography component="p" className={classes.typography}>
                  {el.location.state} {el.location.postcode}
                </Typography>
              </TableCell>
              <TableCell>{NATIONALITIES[el.nat]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactsTable;
