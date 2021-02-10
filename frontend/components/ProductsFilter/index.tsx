import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import theme from 'layout/themes';
import { ptBR } from '@material-ui/core/locale';
import Tooltip from '@material-ui/core/Tooltip';
import { Container } from './styles';

const customTheme = createMuiTheme(
  {
    palette: {
      primary: { main: theme.primary },
      secondary: { main: theme.secondary },
    },
  },
  ptBR
);

interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={`R$ ${value}`}
    >
      {children}
    </Tooltip>
  );
}

const ProductsFilter: React.FC = () => {
  function valuetext(value: number) {
    return `${value}°C`;
  }
  const [value, setValue] = useState<number[]>([100, 1500]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Container>
      <h3>Filtros</h3>
      <span className="horizontal-divisor" />
      <div className="filter-item">
        <p className="filter-title">Preço:</p>
        <ThemeProvider theme={customTheme}>
          <Slider
            value={value}
            min={100}
            max={3000}
            onChange={handleChange}
            valueLabelDisplay="auto"
            ValueLabelComponent={ValueLabelComponent}
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
        </ThemeProvider>
      </div>
      <div className="filter-item">
        <p className="filter-title">Categoria: </p>
      </div>
    </Container>
  );
};

export default ProductsFilter;
