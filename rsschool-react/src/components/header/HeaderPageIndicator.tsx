import { HeaderPath } from '../types/types';

const HeaderPageIndicator = (headerPath: HeaderPath) => {
  const locationPath: { [path: string]: string } = {
    '/': 'Main',
    '/input': 'Form',
    '/about': 'About',
  };

  return (
    <div className="current__page">
      <p>{locationPath[headerPath.path] || 'Error'}</p>
    </div>
  );
};

export default HeaderPageIndicator;
