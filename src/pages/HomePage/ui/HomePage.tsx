import React from 'react';
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/ui/Input";

const HomePage = () => {
    const { t } = useTranslation('home');
    const [value, setValue] = React.useState('');

    return (
        <div>
            {t('home')}
            <Input value={value} onChange={setValue} placeholder="введите логин" />
        </div>
    );
};

export default HomePage;
