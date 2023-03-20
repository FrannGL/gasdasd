import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <>
      <Grid
        container
        lg={12}
        sx={{
          display: "flex",
          mt: 10,
          width: "100%",
          height: "100%",
          mx: "auto",
          px: 5,
          py: 5,
          gap: 2,
        }}
      >
        <Grid
          item
          sx={{
            minWidth: "35%",
            height: 300,
          }}
        >
          <Card>
            <CardMedia
              image="../../public/assets/images/fabrica.jpg"
              sx={{ height: 300 }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            width: "63%",
            height: 300,
          }}
        >
          <Typography variant="h2">MISIÓN</Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            Nos esforzamos para que cada cerveza producida sea reflejo de
            dedicación, compromiso y orgullo diario de todo nuestro equipo de
            trabajo.
          </Typography>
        </Grid>
        <Grid item sx={{ width: "63%", height: 300 }}>
          <Typography variant="h2" align="right">
            VISIÓN
          </Typography>
          <Typography
            variant="p"
            align="right"
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            Aspiramos a ser los Artesanos Cerveceros líderes en generar
            experiencias únicas, brindándole a la comunidad nuestra calidad
            humana, fusionando la cerveza con el arte y la gastronomía.
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "red", minWidth: "35%", height: 300 }}
        >
          <Card>
            <CardMedia
              image="../../public/assets/images/fabrica(2).jpg"
              sx={{ height: 300 }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid
          item
          sx={{ backgroundColor: "red", minWidth: "35%", height: 300 }}
        >
          <Card>
            <CardMedia
              image="../../public/assets/images/fabrica(3).jpg"
              sx={{ height: 300 }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item sx={{ width: "63%", height: 300 }}>
          <Typography variant="h2">VALORES</Typography>
          <Typography
            variant="p"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            “El respeto, el compromiso y la búsqueda de la mejora continua es
            reflejo de orgullo y excelencia. Somos un equipo que busca
            representarse en cada área a través de un sentimiento compartido de
            esfuerzo, dedicación y responsabilidad, tratando de capitalizar las
            experiencias para luego compartirlas con amigos, proveedores y
            clientes, construyendo día a día el Espíritu Artesanal que nos
            caracteriza”
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
