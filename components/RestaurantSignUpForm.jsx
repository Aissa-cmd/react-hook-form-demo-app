import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from 'react-query'
import { useCallback } from "react";
import countryCodeData from '../resources/countriesCode'

const schema = yup.object({
  restaurantName: yup.string().required('This field is required'),
  email: yup.string().email('Please enter a valid email address').required('This field is required'),
  countryCode: yup.string().required('This field is required'),
  phoneNumber: yup.string().required('This field is required'),
  address: yup.string().required('This field is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('This field is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('This field is required'),
}).required();

function RestaurantSignUpForm() {
  const fetchCountryCode = useCallback(async () => {
    const response = await fetch('http://apilayer.net/api/countries?access_key=')
    return response.json()
  }, [])

  //const { data: countryCodeData, status } = useQuery('countryCodeItems', fetchCountryCode)

  const { control, handleSubmit, formState:{ errors }, isLoading } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth error={errors.restaurantName?.message}>
            <Controller 
              name="restaurantName"
              control={control}
              render={({ field }) => <TextField id="restaurantName" label="Restaurant name" variant="outlined" error={errors.restaurantName?.message} {...field} fullWidth />}
            />
            {errors.restaurantName?.message && <FormHelperText>{errors.restaurantName.message}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={errors.email?.message}>
            <Controller 
              name="email"
              control={control}
              render={({ field }) => <TextField id="outlined-basic" label="Email" variant="outlined" error={errors.email?.message} {...field} fullWidth />}
            />
            {errors.email?.message && <FormHelperText>{errors.email.message}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid container item xs={12} columnSpacing={1}>
          <Grid item xs={5}>
          <FormControl fullWidth error={errors.countryCode?.message}>
            <InputLabel id="demo-simple-select-label">Country code</InputLabel>
            <Controller
              name="countryCode"
              control={control}
              render={({ field }) => <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Country code"
                  renderValue={selected => selected}
                  {...field}
                >
                  { !isLoading && countryCodeData ?
                    countryCodeData.map((item, idx) => <MenuItem key={idx} value={item.dial_code}>{`${item.dial_code} ${item.name}`}</MenuItem>) :
                    <MenuItem value={20} disabled><CircularProgress  style={{marginRight: 7}} /><span>Loading...</span></MenuItem>
                  }
                </Select>
              }
            />
            {errors.countryCode?.message && <FormHelperText>{errors.countryCode.message}</FormHelperText>}
          </FormControl>
          </Grid>
          <Grid item xs={7}>
            <FormControl fullWidth error={errors.phoneNumber?.message}>
              <Controller 
                name="phoneNumber"
                control={control}
                render={({ field }) => <TextField id="outlined-basic" label="Phone number" variant="outlined" error={errors.phoneNumber?.message} {...field} fullWidth />}
              />
              {errors.phoneNumber?.message && <FormHelperText>{errors.phoneNumber.message}</FormHelperText>}
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={errors.address?.message}>
            <Controller 
              name="address"
              control={control}
              render={({ field }) => <TextField id="outlined-basic" label="Address" variant="outlined" error={errors.address?.message} {...field} fullWidth />}
            />
            {errors.address?.message && <FormHelperText>{errors.address.message}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={errors.password?.message}>
            <Controller 
              name="password"
              control={control}
              render={({ field }) => <TextField id="outlined-basic" label="Password" variant="outlined" error={errors.password?.message} {...field} fullWidth />}
            />
            {errors.password?.message && <FormHelperText>{errors.password.message}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={errors.confirmPassword?.message}>
            <Controller 
              name="confirmPassword"
              control={control}
              render={({ field }) => <TextField id="outlined-basic" label="Confirm password" variant="outlined" error={errors.confirmPassword?.message} {...field} fullWidth />}
            />
            {errors.confirmPassword?.message && <FormHelperText>{errors.confirmPassword.message}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            style={{
              paddingTop: 15,
              paddingBottom: 15
            }}
            type="submit"
            fullWidth
          >Sign up</Button>
        </Grid>
        <Grid item xs={12}>
          <div style={{
            textAlign: 'center'
          }}>Already have an account? <a href="" style={{
            color: '#1976d2'
          }}>Login</a></div>
        </Grid>
      </Grid>
    </form>
  )
}

export default RestaurantSignUpForm;
