import MarkdownPage from "../components/MarkdownPage";
import { useTranslation } from "react-i18next";
export default function Activities() {
  const { i18n } = useTranslation();
  return (
    <div>
    <MarkdownPage file={`/markdown/${i18n.language}/activities.md`} />
    <div><img src="/assets/badm_3.jpg" width="40%"></img>
    <img src="/assets/badm_5.jpg" width="40%"></img>
    <img src="/assets/hiking_2.jpg" width="40%"></img>
    <img src="/assets/hiking_1.jpg" width="40%"></img>
    </div>
    </div>
  );
}