import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    margin : "20px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: 'black',
  },
}));

export default function PokeCard(props) {
  const { pokemon } = props;
  console.log(pokemon);

  const classes = useStyles();

  return (
    <Card className={classes.root} key={pokemon.id}>
      <CardHeader
        avatar={
          <Avatar
            src={pokemon.gif}
            aria-label="recipe"
            className={classes.avatar}
          />
        }
        title={pokemon.name}
      />
      <CardMedia className={classes.media} image={pokemon.png} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {pokemon.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
