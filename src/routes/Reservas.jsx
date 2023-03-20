// COMPONENTES MATERIAL-UI
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

// COMPONENTES PROPIOS
import NavBar from "../components/NavBar";
import BookingOfficesContainer from "../components/BookingOfficesContainer";

export default function Reservas() {
  return (
    <>
      <NavBar />

      <Container
        disableGutters
        maxWidth={false}
        sx={{ width: "100%", height: "100vh" }}
      >
        <Card sx={{ maxWidth: "100%", mt: 5 }}>
          <CardMedia
            sx={{ height: 200 }}
            title=""
            image="../../public/assets/images/barriles.jpg"
          />
          <Typography variant="h2" align="center" sx={{ mt: 5 }}>
            RESERVAS
          </Typography>
          <Container
            maxWidth={false}
            sx={{
              mt: 4,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "80%",
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderTop: 1,
                borderBottom: 1,
              }}
            >
              <Typography
                variant="h2"
                color="initial"
                sx={{
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                ..." No podemos comprar la felicidad pero si una buena cerveza y
                disfrutarla con amigos, que es casi lo mismo "...
              </Typography>
            </Box>
          </Container>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={100}
              align="center"
              sx={{ mt: 3, mb: 5 }}
            >
              Reservá el estilo que más te gusta y te lo llevamos a tu fiesta o
              reunión!
            </Typography>
          </CardContent>
          <BookingOfficesContainer />
        </Card>
      </Container>
    </>
  );
}
