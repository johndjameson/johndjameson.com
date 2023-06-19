import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  appearance: none;
  background: var(--jdj-color-btn-bg-default);
  border-radius: 6px;
  border: 1px solid var(--jdj-color-btn-border-default);
  box-shadow: 0 1px var(--jdj-color-btn-shadow-default),
    inset 0 1px var(--jdj-color-btn-shadow-inset-default);
  color: var(--jdj-color-btn-fg-default);
  cursor: pointer;
  display: inline-flex;
  font-size: var(--jdj-font-size-btn-default);
  font-weight: var(--jdj-font-weight-semibold);
  line-height: 1;
  padding: var(--jdj-space-300);
  text-align: center;
  transition: 0.2s ease-out;
  white-space: nowrap;
  width: fit-content;

  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return;
      case 'primary':
        return css`
          background: var(--jdj-color-btn-bg-primary);
          border-color: var(--jdj-color-btn-border-primary);
          color: var(--jdj-color-btn-fg-primary);
        `;
      default:
        throw new Error(`\`${variant}\` isn’t a valid <Button> variant`);
    }
  }}
`;

function Button({ href, children, ...moreProps }) {
  const as = href ? 'a' : 'button';

  return (
    <StyledButton
      as={as}
      href={href}
      {...moreProps}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary']),
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;
