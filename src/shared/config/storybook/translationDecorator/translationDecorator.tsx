import { Story } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { Suspense } from "react";

export const translationDecorator = (StoryComponent: Story) => {
    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback="">
                <StoryComponent />
            </Suspense>
        </I18nextProvider>
    );
};
