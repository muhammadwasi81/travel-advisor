import { alpha, makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  search: {
    position: 'relative',
    background: 'lightgrey',
    height: '40px',
    borderRadius: '6px',
    margin: '0 10px',
    width: '50%',
  },
  searchIcon: {
    padding: '0 5px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '100%',
    margin: '5px 30px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
