import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({ width }) => {
    switch (width) {
      case 'narrow':
        return css`
          padding-left: var(--jdj-layout-container-width-narrow-padding-x);
          padding-right: var(--jdj-layout-container-width-narrow-padding-x);
        `;
      case 'default':
        return css`
          padding-left: var(--jdj-layout-container-width-padding-x);
          padding-right: var(--jdj-layout-container-width-padding-x);
        `;
    }
  }}
`;

Container.defaultProps = {
  width: 'default',
};

export default Container;
