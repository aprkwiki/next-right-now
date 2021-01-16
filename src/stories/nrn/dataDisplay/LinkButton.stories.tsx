import {
  Meta,
  Story,
} from '@storybook/react/types-6-0';
import React from 'react';
import ExternalLink from '../../../components/utils/ExternalLink';
import LinkButton, { Props } from '../../../components/utils/LinkButton';
import withChildrenMock from '../../shared/hocs/withChildrenMock';

type PropsWithChildrenMock = Props & {
  text?: string;
  useLink?: boolean;
};

export default {
  title: 'Next Right Now/Data display/LinkButton',
  component: LinkButton,
  subcomponents: { ExternalLink },
  argTypes: withChildrenMock({}),
} as Meta;

const Template: Story<PropsWithChildrenMock> = (props) => {
  const {
    text,
    useLink,
  } = props;

  if (useLink) {
    return (
      <ExternalLink href={'/'}>
        <LinkButton
          {...props}
        >
          {text || 'Default text'}
        </LinkButton>
      </ExternalLink>
    );
  }

  return (
    <LinkButton
      {...props}
    >
      {text || 'Default text'}
    </LinkButton>
  );
};

export const DynamicExample: Story<PropsWithChildrenMock> = Template.bind({});
DynamicExample.args = {
  text: `Do nothing`,
};

export const DynamicExampleWithLink: Story<PropsWithChildrenMock> = Template.bind({});
DynamicExampleWithLink.args = {
  text: 'Open external link',
  useLink: true,
};