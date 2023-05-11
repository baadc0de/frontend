import { render } from '@testing-library/react';

import Ackit from './ackit';

describe('Ackit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ackit />);
    expect(baseElement).toBeTruthy();
  });
});
