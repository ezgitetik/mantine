import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Burger } from './Burger';

storiesOf('@mantine/core/Burger/stories', module).add('Default props on MantineProvider', () => (
  <MantineProvider defaultProps={{ Burger: { color: 'red' } }}>
    <Burger opened={false} />
  </MantineProvider>
));
