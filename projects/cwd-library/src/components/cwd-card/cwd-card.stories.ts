import { Meta, StoryObj } from '@storybook/angular';
import { CwdCardComponent } from './cwd-card.component';

const meta: Meta<CwdCardComponent> = {
  title: 'CWD/Card',
  component: CwdCardComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['outlined', 'elevated'],
      control: { type: 'select' }
    }
  }
};

export default meta;
type Story = StoryObj<CwdCardComponent>;

export const Basic: Story = {
  args: { variant: 'outlined' },
  render: (args) => ({
    props: args,
    template: `
      <cwd-card [variant]="variant">
        <div card-header>Header</div>
        <div card-body>Body content goes here.</div>
        <div card-footer>
          <cwd-button>Cancel</cwd-button>
          <cwd-button>Submit</cwd-button>
        </div>
      </cwd-card>
    `
  })
};
