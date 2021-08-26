import { MenuProps } from '.';
import { data } from '../../api/dados.json';

export default {
  links: data.setting.menulink,
  blogName: 'Carlos Humberto',
  logo: '/assets/images/carlos-humberto.png',
} as MenuProps;
