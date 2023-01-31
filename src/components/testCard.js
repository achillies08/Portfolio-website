import { Avatar, Card, CardContent, Typography } from "@mui/material";

const TestCard = (test) => {
  return (
    <>
      <Card elevation={4} sx={{ maxWidth: 450 }}>
        <Avatar alt={test[0]} sx={{ ml: "45%" }} />
        <CardContent>
          <Typography>{test[0]}</Typography>
          <Typography>{test[1]}</Typography>
          <Typography>{test[2]}</Typography>
          <Typography variant="body2">{test[3]}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default TestCard;
