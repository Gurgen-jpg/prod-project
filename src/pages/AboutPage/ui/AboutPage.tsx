import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutUs');
    return (
        <div>
            {t('about')}
        </div>
    );
};

export default AboutPage;
