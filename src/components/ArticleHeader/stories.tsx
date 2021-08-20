import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit
        pariatur vitae doloremque illo natus fugiat nesciunt ad delectus quos,
        laborum eum numquam saepe dignissimos ullam non. Eveniet, delectus
        veniam?
      </p>
    </div>
  );
};
