import { useTranslation } from 'react-i18next';
import { Page } from "widgets/Page";

const AboutPage = () => {
    const { t } = useTranslation('aboutUs');
    return (
        <Page>
            {t('about')}
        </Page>
    );
};

export default AboutPage;
