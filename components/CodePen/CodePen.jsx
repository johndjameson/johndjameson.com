import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  background: #ddd;
  border-radius: 6px;
  border: none;
  display: block;
  width: 100%;
`;

function CodePen({ height, id, tabs, theme, title, user, version }) {
  const url = new URL(`https://codepen.io/${user}/embed/${id}`);

  url.searchParams.set('default-tab', tabs);
  url.searchParams.set('embed-version', version);
  url.searchParams.set('theme-id', theme);

  return (
    <StyledIframe
      height={height}
      loading="lazy"
      scrolling="no"
      src={url.toString()}
      style={{ height: `${height}px` }}
      title={title}
    />
  );
}

CodePen.propTypes = {
  height: PropTypes.number,
  id: PropTypes.string.isRequired,
  tabs: PropTypes.string,
  theme: PropTypes.number,
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
  version: PropTypes.number,
};

CodePen.defaultProps = {
  height: 400,
  tabs: 'results',
  theme: 41300,
  user: 'johndjameson',
  version: 2,
};

export default CodePen;
