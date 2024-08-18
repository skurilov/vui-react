import React from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  label: string;
  variant?: 'filled' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
};

const getButtonStyles = ({ variant, disabled }: ButtonProps) => {
  switch (variant) {
    case 'outlined':
      return {
        backgroundColor: 'transparent',
        color: disabled ? '#cccccc' : '#4f46e5',
        border: disabled ? '1px solid #cccccc' : '1px solid #4f46e5',
        '&:hover': {
          backgroundColor: disabled ? 'transparent' : '#f0f0ff',
        },
        '&:active': {
          backgroundColor: disabled ? 'transparent' : '#e5e5ff',
        },
      };
    case 'text':
      return {
        backgroundColor: 'transparent',
        color: disabled ? '#cccccc' : '#4f46e5',
        border: 'none',
        textDecoration: 'underline',
        '&:hover': {
          color: disabled ? '#cccccc' : '#5a54d6',
        },
        '&:active': {
          color: disabled ? '#cccccc' : '#4a42c4',
        },
      };
    case 'filled':
    default:
      return {
        backgroundColor: disabled ? '#cccccc' : '#4f46e5',
        color: disabled ? '#ffffff' : '#ffffff',
        border: 'none',
        '&:hover': {
          backgroundColor: disabled ? '#cccccc' : '#5a54d6',
        },
        '&:active': {
          backgroundColor: disabled ? '#cccccc' : '#4a42c4',
        },
      };
  }
};

const sizes = {
  small: {
    fontSize: '12px',
    padding: '8px 16px',
  },
  medium: {
    fontSize: '14px',
    padding: '10px 20px',
  },
  large: {
    fontSize: '16px',
    padding: '12px 24px',
  },
};

const StyledButton = styled.button<ButtonProps>(
  ({ variant = 'filled', size = 'medium', disabled = false, label }) => ({
    borderRadius: '8px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    ...getButtonStyles({ label, variant, disabled }),
    ...sizes[size],
  }),
);

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'filled',
  size = 'medium',
  disabled = false,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      label={label}
    >
      {label}
    </StyledButton>
  );
};
