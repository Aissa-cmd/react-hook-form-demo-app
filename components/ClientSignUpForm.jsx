import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';

const schema = yup.object({
  name: yup.string().required('This field is required'),
  email: yup.string().email('Please enter a valid email address').required('This field is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('This field is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('This field is required'),
}).required();

function ClientSignUpForm() {
  const { control, handleSubmit, formState:{ errors }, isLoading } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth error={errors.restaunamerantName?.message}>
            <Controller 
              name="name"
              control={control}
              render={({ field }) => <TextField id="name" label="Name" variant="outlined" error={errors.name?.message} {...field} fullWidth />}
            />
            {errors.name?.message && <FormHelperText>{errors.name.message}</FormHelperText>}
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

export default ClientSignUpForm;
