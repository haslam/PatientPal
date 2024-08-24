import { ReactElement} from 'react';
import { render, RenderOptions } from '@testing-library/react';

// @TODO: Prefer custom wrapper when intl and/or redux is setup.
const customRender = (ui: ReactElement, options: RenderOptions) => {
  return render(ui, { ...options });
};

export * from '@testing-library/react';
export { customRender as render };
