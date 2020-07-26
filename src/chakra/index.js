import components from './components';
import foundations from './foundations';
import styles from './styles';
/**
 * Color mode config
 */
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const theme = {
  ...foundations,
  components,
  styles,
  config,
};
export default theme;
