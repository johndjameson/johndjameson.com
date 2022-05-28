import PropTypes from 'prop-types';

function CodePen({ height, id, tabs, theme, title, user, version }) {
  const parameters = new URLSearchParams();

  parameters.set('default-tab', tabs);
  parameters.set('embed-version', version);
  parameters.set('theme-id', theme);

  return (
    <iframe
      height={height}
      loading="lazy"
      scrolling="no"
      src={`https://codepen.io/${user}/embed/${id}/?${parameters.toString()}`}
      style={{ border: 'none', display: 'block', height: `${height}px`, width: '100%' }}
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
  theme: 23596,
  user: 'johndjameson',
  version: 2,
};

export default CodePen;
