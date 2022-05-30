import styled, { css } from 'styled-components';

const Header = styled.header`
  align-items: center;
  background: var(--jdj-color-header-bg);
  display: flex;
  gap: 24px;
  height: 80px;
  padding-left: var(--jdj-layout-container-width-padding-x);
  padding-right: var(--jdj-layout-container-width-padding-x);
  transition: background-color 0.2s ease-out;
`;

const HeaderItem = styled.div`
  ${({ full }) =>
    full &&
    css`
      flex-grow: 1;
    `};
`;

HeaderItem.displayName = 'Header.Item';

export default Object.assign(Header, { Item: HeaderItem });
