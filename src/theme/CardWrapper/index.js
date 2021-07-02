import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
// import Link from "@material-ui/core/Link";
import Link from "@docusaurus/Link";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 375,
    marginBottom: "1rem",
  },
  heading: {paddingBottom: theme.spacing(3)},
}));

export function CardWrapper({ href, icon, title, description }) {
  return (
    <Card className={useStyles().card}>
      <CardActionArea component={Link} href={href}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <span role="img" aria-label="frown">
              {icon}
            </span>{" "}
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardWrapper;