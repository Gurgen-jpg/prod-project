import React from 'react';
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/ui/Input";
import { Page } from "widgets/Page";

const HomePage = () => {
    const { t } = useTranslation('home');
    const [value, setValue] = React.useState('');

    return (
        <Page>
            {t('home')}
            <Input value={value} onChange={setValue} placeholder="введите логин" />
        </Page>
    );
};

export default HomePage;
