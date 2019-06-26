import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// React Router
import { Link, Route } from "react-router-dom";
// Notes Components
import NotesForm from "./notesForm";
import NotesList from "./notesList";
import Home from "./Home";
import Note from "./Note";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: []
    };
  }

  updateField = name => e => {
    this.setState({ [name]: e.target.value });
  };

  /*
  saveNote = () => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: Date.now(),
          title: this.state.title,
          description: this.state.description
        }
      ]
    });
  };
 */

  saveNote = () => {
    if (this.state.title && this.state.description) {
      this.setState({
        title: "",
        description: "",
        notes: [
          ...this.state.notes,
          {
            id: Date.now(),
            title: this.state.title,
            description: this.state.description
          }
        ]
      });
      // this.clearValue();
    }
  };

  deleNote = index => {
    this.setState({
      notes: this.state.notes.filter((_, i) => i !== index)
    });
  };

  /*  clearValue = () => {
    this.setState({
      title: "",
      description: ""
    });
  }; */

  // updateTitleDescription = event => {
  //   // console.log(event.target);
  //   this.setState({
  //     title: event.target.value,
  //     description: event.target.value
  //   });
  // };

  render() {
    /*     console.log(this.state);
     */
    return (
      <React.Fragment>
        <Typography align="center" variant="h2" gutterBottom>
          My Notes
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid>
            <NotesList notes={this.state.notes} deleteNote={this.deleteNote} />
          </Grid>
          <Grid item xs={8}>
            <Route exact path="/" component={Home} />
            <Route
              path="/new"
              render={() => (
                <NotesForm
                  title={this.state.title}
                  description={this.state.description}
                  updateField={this.updateField}
                  saveNote={this.saveNote}
                />
              )}
            />
            <Route
              path="/view/:id"
              render={props => <Note {...props} notes={this.state.notes} />}
            />
          </Grid>
        </Grid>
        <Fab color="primary" component={Link} to="/new">
          <AddIcon />
        </Fab>
      </React.Fragment>
    );
  }
}

export default App;
