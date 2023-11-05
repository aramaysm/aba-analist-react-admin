import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import HeartIcon from '@heroicons/react/24/solid/HeartIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import BriefcaseIcon from '@heroicons/react/24/solid/BriefcaseIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Dashboard',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Contractors',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <BriefcaseIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Period and payments',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <CurrencyDollarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Service log',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <HeartIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Pending',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <ClockIcon />
      </SvgIcon>
    )
  },
  
];
