import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import BriefcaseIcon from '@heroicons/react/24/solid/BriefcaseIcon';
import HeartIcon from '@heroicons/react/24/solid/HeartIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewServicesLog = (props) => {
  const { difference, positive = false, sx, value, backgroundColorAvatar } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Service log
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: backgroundColorAvatar,
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <HeartIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Since last month
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewServicesLog.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
  backgroundColorAvatar: PropTypes.string,
};
