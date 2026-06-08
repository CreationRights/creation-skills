import { ComponentType } from "react";

import UsPrivacyPolicy from "./us-privacy-policy";
import UsStatePrivacy from "./us-state-privacy";
import UsTermsOfUse from "./us-terms-of-use";
import UsOnlineSalesTerms from "./us-online-sales-terms";
import UsDmca from "./us-dmca";
import UsDisclaimer from "./us-disclaimer";

import UkPrivacyPolicy from "./uk-privacy-policy";
import UkTermsAndConditions from "./uk-terms-and-conditions";
import UkSupplyOfServices from "./uk-supply-of-services";
import UkCookiePolicy from "./uk-cookie-policy";
import UkAcceptableUse from "./uk-acceptable-use";
import UkDisclaimer from "./uk-disclaimer";

const legalDocComponents: Record<string, ComponentType> = {
  "us/privacy-policy": UsPrivacyPolicy,
  "us/state-privacy": UsStatePrivacy,
  "us/terms-of-use": UsTermsOfUse,
  "us/online-sales-terms": UsOnlineSalesTerms,
  "us/dmca": UsDmca,
  "us/disclaimer": UsDisclaimer,
  "uk/privacy-policy": UkPrivacyPolicy,
  "uk/terms-and-conditions": UkTermsAndConditions,
  "uk/supply-of-services": UkSupplyOfServices,
  "uk/cookie-policy": UkCookiePolicy,
  "uk/acceptable-use": UkAcceptableUse,
  "uk/disclaimer": UkDisclaimer,
};

export function getLegalDocComponent(
  region: string,
  slug: string
): ComponentType | null {
  return legalDocComponents[`${region}/${slug}`] ?? null;
}
