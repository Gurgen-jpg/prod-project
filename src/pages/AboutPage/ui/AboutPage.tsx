import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const AboutPage = () => {
    const { t } = useTranslation('aboutUs');
    return (
        <div>
            {t('about')}
        </div>
    );
};

export default AboutPage;
