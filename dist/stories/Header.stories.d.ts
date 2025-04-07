/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ user, onLogin, onLogout, onCreateAccount }: import("../Header").HeaderProps) => import("react").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
    args: {
        onLogin: import("@vitest/spy").Mock<(...args: any[]) => any>;
        onLogout: import("@vitest/spy").Mock<(...args: any[]) => any>;
        onCreateAccount: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
declare type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
//# sourceMappingURL=Header.stories.d.ts.map