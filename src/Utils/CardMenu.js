
import { useState } from "react";
import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Card, CardContent, Typography, Grid, Avatar,Stack,SvgIcon } from "./MaterialUIComponents";
import {ArrowDownwardIcon,ArrowUpwardIcon,AttachMoneyIcon} from "./MaterialUI-Icons"

const CardMenu = (props) => {
  const { difference, positive = false } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      style={{
        borderRadius: "20px", // Bordes redondeados de la tarjeta
        boxShadow: isHovered
          ? "0 0 8px rgba(0, 0, 255, 0.5)"
          : "0 0 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease", // Transición suave de la sombra
        cursor: "pointer", // Cambio de cursor a la manita
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
              Budget
            </Typography>
            <Typography variant="h4">
              14
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
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

export default CardMenu;
