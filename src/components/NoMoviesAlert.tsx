import { useI18n } from "$/locales";

const NoMoviesAlert = () => {
    const t = useI18n()

    return <div className="text-gray-700 dark:text-gray-400 max-w-xs">
        <p className="text-center">{t('home.no-movies')}</p>
    </div>
}

export default NoMoviesAlert;