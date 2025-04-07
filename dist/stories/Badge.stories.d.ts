import { BadgeProps } from '../@interfaces';
import { Badge } from '../Badge';
import { Meta, StoryObj } from '@storybook/react';
declare const meta: Meta<typeof Badge>;
export default meta;
interface Props extends BadgeProps {
    darkMode: boolean;
}
export declare const Default: StoryObj<Props>;
export declare const LeadingIconBadge: StoryObj<Props>;
export declare const ImageIconBadge: StoryObj<Props>;
export declare const TrailingIconBadge: StoryObj<Props>;
//# sourceMappingURL=Badge.stories.d.ts.map