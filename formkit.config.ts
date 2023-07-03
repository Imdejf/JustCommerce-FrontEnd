import { pl } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import '@formkit/themes/genesis'
const config: DefaultConfigOptions = {
  locales: { pl },
  locale: 'pl',
  icons: {
    ...genesisIcons,
  },
}

export default config