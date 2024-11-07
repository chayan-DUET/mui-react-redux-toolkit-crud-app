import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
//import SimpleForm from "./SimpleForm";
import StepperForm from "./StepperForm";
import UserForm from "./UserForm";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function UpdateUser() {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Update User Form">
          <UserForm />
        </SimpleCard>

        <SimpleCard title="stepper form">
          <StepperForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
