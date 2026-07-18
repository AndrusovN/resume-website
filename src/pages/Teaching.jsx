import MarkdownPage from "../components/MarkdownPage";
import { useTranslation } from "react-i18next";

export default function Teaching() {
  const { i18n } = useTranslation();
  return (
    <MarkdownPage file={`/markdown/${i18n.language}/teaching.md`} />
  );
}