import Head from 'next/head'
import RestaurantSignUpForm from '../components/RestaurantSignUpForm';
import ClientSignUpForm from '../components/ClientSignUpForm';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import Alert from '@mui/material/Alert';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function Home() {
  return (
    <div className="form-container">
      <Head>
        <title>react-hook-form-demo-app</title>
        <meta name="description" content="A Nextjs demo application, demonstrating how to use react-hook-form and yup with material-ui to validate forms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Alert 
          severity="info"
          style={{
            marginBottom: 30
          }}
        >
          The code for this website is available on <a href="https://github.com/Aissa-cmd/react-hook-form-demo-app">GitHub</a>
        </Alert>
      <div className="form">
        <div className="form-header">Sing up</div>
        <TabsUnstyled defaultValue={0}>
          <TabsList
            style={{
              marginBottom: 30
            }}
          >
            <Tab>As Restaurant</Tab>
            <Tab>As Client</Tab>
          </TabsList>
          <TabPanel value={0}>
          <RestaurantSignUpForm />
          </TabPanel>
          <TabPanel value={1}>
            <ClientSignUpForm />
          </TabPanel>
        </TabsUnstyled>
      </div>
    </div>
  )
}
