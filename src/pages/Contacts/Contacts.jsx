import { useFetch } from "../../hooks/hooks";
import { Container, Grid, Typography } from "@material-ui/core";
import { useStyles } from "../../styles/styles";
import ContactsTable from "../../components/ContactsTable";

const Contacts = () => {
  const contacts = useFetch();
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Typography variant="h4" component="h4">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <div>Loading...</div>;
            }

            if (contacts.isError) {
              return <div>Error occurred during load</div>;
            }

            return <ContactsTable data={contacts.data} />;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
