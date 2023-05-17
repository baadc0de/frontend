import {
  ConstrainedPaddedLayout,
  FunctionRowHeader,
  MainContentLayout,
  PaddedLayout,
  Sidebar,
  SidebarContainer,
  SidebarLink,
  Stat,
  StatsRow,
  TextBlock,
  TitleHeading,
} from '@frontend/ackit';
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';
import { useInstanceDataApi } from '../data';

export function Index() {
  return (
    <>
      <SidebarContainer>
        <Sidebar>
          <SidebarLink name={'Dashboard'} icon={ChartBarIcon} current />
          <SidebarLink name={'Domain'} icon={BuildingOfficeIcon} />
          <SidebarLink name={'Engines'} icon={Cog6ToothIcon} />
          <SidebarLink name={'Instances'} icon={ServerStackIcon} />
        </Sidebar>
      </SidebarContainer>
      <MainContentLayout>
        <FunctionRowHeader>
          <TitleHeading title={'Dashboard'} />
        </FunctionRowHeader>
        <PaddedLayout>
          <TextBlock>
            <p>
              Welcome to the Dashboard page of the Audio Cloud Management
              Application! This page is the central hub of our application and
              serves as a gateway to all the features and functionalities that
              Audio Cloud provides. Here, you can view important information
              about the executing tasks, media files and instances, such as
              their status, metadata, and processing history, all in one
              convenient location.
            </p>
            <br />
          </TextBlock>
        </PaddedLayout>
        <StatsRow>
          <Stat name={'Audio Engines'} value={0} unit={'alerts'} />
          <Stat name={'Instances'} value={0} unit={'alerts'} />
          <Stat name={'Media'} value={1} unit={'alerts'} />
          <Stat name={'Tasks'} value={0} unit={'alerts'} />
        </StatsRow>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit();
          }}
        >
          <div className="container">
            <label>Username : </label>
            <input
              type="text"
              id={'username'}
              placeholder="Enter Username"
              name="username"
              required
            />
            <label>Password : </label>
            <input
              type="password"
              id={'password'}
              placeholder="Enter Password"
              name="password"
              required
            />
            <button type="submit">Login</button>
            <button type="button" className="cancelbtn">
              {' '}
              Cancel
            </button>
          </div>
        </form>
      </MainContentLayout>
    </>
  );
}

export default Index;

function onSubmit() {
  const username = (document.getElementById('username') as HTMLInputElement)
    .value;
  const password = (document.getElementById('password') as HTMLInputElement)
    .value;

  fetch('http://localhost:7200/api/v1/users/login', {
    method: 'POST',
    body: JSON.stringify({ id: username, password: password }),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('login', res);
      return fetch('http://localhost:7200/api/v1/users/whoami', {
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((res) => console.log('whoami', res));
    })
    .catch(console.error);
}
