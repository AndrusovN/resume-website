import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";


function LanguageSwitcher() {

    const { i18n } = useTranslation();

    return (
        <div className="language-select">
            <button onClick={() => i18n.changeLanguage("en")}>
                EN
            </button>

            <button onClick={() => i18n.changeLanguage("ru")}>
                RU
            </button>
        </div>
    );
}

export default function Header() {

  const { t } = useTranslation();
  return (
    <header className="header">

      <h1>{t("name")}</h1>

      <nav>

        <NavLink to="/">{t("welcome")}</NavLink>

        <NavLink to="/math">{t("math")}</NavLink>

        <NavLink to="/software">{t("software")}</NavLink>

        <NavLink to="/teaching">{t("teaching")}</NavLink>

        <NavLink to="/activities">{t("activities")}</NavLink>

      </nav>

      <LanguageSwitcher/>
    </header>
  );
}