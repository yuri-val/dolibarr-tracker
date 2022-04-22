import {
  VaInput,
  VaButton,
  VaSelect,
  VaList,
  VaListItem,
  VaListItemSection,
  VaListItemLabel,
  VaListLabel,
  VaAvatar,
  VaIcon,
  VaCardTitle,
  VaInnerLoading,
  VaCard,
  VaCardActions,
  VaCardContent,
  VaBadge,
  VaDivider,
  VaDateInput,
  VaAlert,
} from "vuestic-ui";

export default function withUIComponents(app) {
  app
    .component("va-input", VaInput)
    .component("va-button", VaButton)
    .component("va-select", VaSelect)
    .component("va-list", VaList)
    .component("va-list-item", VaListItem)
    .component("va-list-item-section", VaListItemSection)
    .component("va-list-item-label", VaListItemLabel)
    .component("va-list-label", VaListLabel)
    .component("va-avatar", VaAvatar)
    .component("va-icon", VaIcon)
    .component("va-card-title", VaCardTitle)
    .component("va-inner-loading", VaInnerLoading)
    .component("va-card", VaCard)
    .component("va-card-actions", VaCardActions)
    .component("va-card-content", VaCardContent)
    .component("va-badge", VaBadge)
    .component("va-divider", VaDivider)
    .component("va-date-input", VaDateInput)
    .component("va-alert", VaAlert);
}
