---
title: Trouble Shooting
---

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 375,
    marginBottom: "1rem",
  },
  heading: {paddingBottom: theme.spacing(3)},
}));

My patient's pain/other symptoms are very difficult to control; what do I do next?

1. Review Moderate to Severe Pain section section
2. Contact your local specialist palliative care team

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:1800 772 273")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>          	
        Palliative Care Helpline
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        1800 772 273
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 5635 6400")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>
          Gold Coast
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        07 5635 6400
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 3646 6138")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>
          Royal Brisbane and Women's Hospital
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        07 3646 6138
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 3182 6419")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>          	
        Brisbane South
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        07 3182 6419
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 3163 8111")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>          	
        Mater Hospital (Brisbane)
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        GPs: 07 3163 8111
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 3163 8111")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>          	
        St Vincent's Hospital Brisbane
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        GPs: 07 3240 1111
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 3139 4601")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>          	
        The Prince Charles Hospital
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        GPs: 07 3139 4601
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 3883 7364")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>
        Redcliffe Hospital
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        07 3883 7364
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 5470 5333")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>
        Sunshine Coast
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        07 5470 5333
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>

<Card className={useStyles().card}>
    <CardActionArea onClick={() => window.open("tel:07 4433 1111")}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={{
    textDecoration: "none"}}>
        Townsville
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        07 4433 1111
        </Typography>
      </CardContent>
    </CardActionArea>
</Card>
