
import { useTranslation } from "react-i18next";


export default function Footer() {

  const { t } = useTranslation();
  return (
    <footer className="footer">

      <p>{t("name")}</p>

      <p>
        Email: 
        <a href="mailto:andrusov.n@gmail.com">
          andrusov.n@gmail.com
        </a>
      </p>

      <p>
        GitHub: 
        <a
          href="https://github.com/AndrusovN"
          target="_blank"
          rel="noreferrer"
        >
          github.com/AndrusovN
        </a>
      </p>

      <p>
        Telegram: 
        <a href="https://t.me/n_andrusov">
          @n_andrusov
        </a>
      </p>

      <p>
        <a href="https://arxiv.org/search/math?query=Nikita+Andrusov&searchtype=all&abstracts=show&order=-announced_date_first&size=50">ArXiV</a>
      </p>

    </footer>
  );
}