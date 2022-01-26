import React from 'react';
import {
  StyledSpinner,
  InnerCircle,
  OuterCircle
} from './Spinner.styled';

const Spinner = () => (
  <StyledSpinner viewBox="0 0 120 120">
    <InnerCircle cx="60" cy="60" r="30" />
    <OuterCircle cx="60" cy="60" r="50" />
  </StyledSpinner>
);

export default Spinner;