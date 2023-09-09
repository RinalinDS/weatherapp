import { FC, useState } from 'react';

import { AppBar, Button, styled, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import generalStyles from '../../common/styles.module.css';
import { Path } from '../../enum/Path';
import { useActions } from '../../hooks/useActions';
import { DeleteModal } from '../Modal/DeleteModal/DeleteModal';

const HeaderToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
const HeaderBar = styled(AppBar)(() => ({
  background: '#2E3B55',
}));

export const Header: FC<{ isButtonVisible: boolean }> = ({ isButtonVisible }) => {
  const { clearData } = useActions();
  const navigate = useNavigate();
  const [isModalActive, setModalActive] = useState<boolean>(false);

  const buttonText = 'Home';
  const buttonSecondText = 'Clear list';

  const setActive = () => setModalActive(true);

  const backHomeHandler = (): void => {
    navigate(Path.Home);
  };
  const clearStoreData = () => {
    setModalActive(false);
    clearData();
  };
  let { pathname } = useLocation();
  // To hide Clear List button when you're on DetailedPage
  // should I useEffect for this? Don't know.
  if (pathname !== Path.Home) {
    isButtonVisible = false;
  }

  return (
    <HeaderBar position="static">
      <HeaderToolbar>
        <Button color="inherit" onClick={backHomeHandler}>
          <span className={generalStyles.text}>{buttonText}</span>
        </Button>
        {isButtonVisible && (
          <Button color="inherit" onClick={setActive}>
            <span className={generalStyles.text}>{buttonSecondText}</span>
          </Button>
        )}
        <DeleteModal
          isModalActive={isModalActive}
          confirmDeleteHandler={clearStoreData}
          setModalActive={setModalActive}
          text={'Are you sure you want to delete ALL cities?'}
        />
      </HeaderToolbar>
    </HeaderBar>
  );
};
