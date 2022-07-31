import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
	.use(LanguageDetector)
	.use(I18NextHttpBackend)
	.use(initReactI18next)
	.init({
		ns: ["pages", "common", "validation"],
		defaultNS: "pages",
		fallbackLng: "hu",
		supportedLngs: ["hu", "en"],
	});
