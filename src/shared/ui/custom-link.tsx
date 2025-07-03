import { createLink } from '@tanstack/react-router';
import { forwardRef } from 'react';

import type { LinkComponent } from '@tanstack/react-router';
import type { AnchorHTMLAttributes } from 'react';

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const BasicLinkComponent = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (props, ref) => {
    return (
      <a ref={ref} {...props} className={'block px-3 py-2 text-blue-700'} />
    );
  },
);

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const CustomLink: LinkComponent<typeof BasicLinkComponent> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />;
};
