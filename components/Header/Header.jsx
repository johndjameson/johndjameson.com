import styled, { css } from 'styled-components';

const Header = styled.header`
  --jdj-header-bg: #fff;
  align-items: center;
  background-color: var(--jdj-header-bg);
  display: flex;
  gap: 24px;
  height: 80px;
  padding-left: var(--jdj-layout-gutter);
  padding-right: var(--jdj-layout-gutter);
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
