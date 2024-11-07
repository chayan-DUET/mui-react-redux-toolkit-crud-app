import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled
} from "@mui/material";
import { Span } from "app/components/Typography";
import { updateUser } from "features/olduserDetailSlice";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px"
})); 

const UserForm = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({ date: new Date() });
  const { users, loading } = useSelector((state) => state.appdata);
 useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

/*   const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }; */

  //console.log("updated data", updateData);


  //const [state, setState] = useState();

 /*  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== setUpdateData.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [setUpdateData.password]); */

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(updateData));
    console.log(updateData);
    navigate("/material/chayan");
  };

  const handleChange = (e) => {
    e.persist();
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  console.log("updated data", updateData); 
 // const handleDateChange = (date) => setUpdateData({ ...setUpdateData, date });

  const {
    name,
    age,
    gender,
    email
  } = updateData;

  return ( 
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="name"
              id="standard-basic"
              value={updateData && updateData.name}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="name (Min length 4, Max length 20)"
              validators={["required", "minStringLength: 4", "maxStringLength: 20"]}
            />

            <TextField
              type="email"
              name="email"
              label="Email"
              value={updateData && updateData.email}
              onChange={handleChange}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />

            <TextField
              type="number"
              name="age"
              label="Age"
              onChange={handleChange}
              value={updateData && updateData.age}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date picker"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider> */}

          
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            
            <RadioGroup
              row
              name="gender"
              sx={{ mb: 2 }}
               value={updateData && updateData.gender}
              onChange={handleChange}>
              <FormControlLabel
                value="Male"
                label="Male"
                onChange={handleChange}
                checked={updateData && updateData.gender === "Male"}
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Female"
                onChange={handleChange}
                label="Female"
                checked={updateData && updateData.gender === "Female"}
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Others"
                onChange={handleChange}
                label="Others"
                checked={updateData && updateData.gender === "Others"}
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>

            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service for user info."
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default UserForm;
