import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Typography } from "@material-ui/core";

const NotesList = props => {
  const { notes, deleteNote } = props;
  return (
    <List>
      {notes.length ? (
        notes.map((notes, index) => (
          <ListItem button key={notes.id}>
            <ListItemText primary={notes.title} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteNote(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <Typography align="center" variant="subtitle1">
          No notes yet…
        </Typography>
      )}
    </List>
  );
};

export default NotesList;
