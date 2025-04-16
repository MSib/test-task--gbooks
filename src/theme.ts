import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

export const CustomAura = definePreset(Aura, {
  css: () => `
  .p-panel .p-panel-header {
    display: none;
    padding-bottom: 0;
  }
  .p-panel .p-panel-content {
    padding-top: 1.125rem;
  }
`,
})
