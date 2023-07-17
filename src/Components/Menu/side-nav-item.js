
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, ButtonBase, SvgIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SideNavItem = (props) => {
  const { active = false, disabled, external, icon, path, title, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = () => {
    if (children && children.length > 0) {
      setIsOpen(!isOpen);
    } else if (path) {
      navigate(path); // Navegar a la ruta si no hay submenús
    }

   
  };



  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',
          textAlign: 'left',
          width: '100%',
          ...(active && {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }),
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }
        }}
        onClick={toggleOpen} // Agregar onClick para alternar la apertura/cierre de la lista anidada
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: 'center',
              color: 'neutral.400',
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              ...(active && {
                color: 'primary.main'
              })
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: 'neutral.400',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'common.white'
            }),
            ...(disabled && {
              color: 'neutral.500'
            })
          }}
        >
          {title}
        </Box>
      </ButtonBase>
      {isOpen && children && (
        <ul>
          {children.map((child) => (
            <SideNavItem
              key={child.title}
              active={active}
              disabled={disabled}
              external={external}
              icon={child.icon}
              path={child.path}
              title={child.title}
              children={child.children} // Recursivamente pasar los hijos anidados
            />
          ))}
        </ul>
      )}
    </li>
  );
};

SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object)
};