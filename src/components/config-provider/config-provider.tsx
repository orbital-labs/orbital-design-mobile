import React, { FC, useContext } from 'react'
import { Locale } from '../../locales/base'
import enUS from '../../locales/en-US'

type Config = {
  locale: Locale
}

export const defaultConfigRef: {
  current: Config
} = {
  current: {
    locale: enUS,
  },
}

export function setDefaultConfig(config: Config) {
  defaultConfigRef.current = config
}

export function getDefaultConfig() {
  return defaultConfigRef.current
}

const ConfigContext = React.createContext<Config | null>(null)

export type ConfigProviderProps = Config

export const ConfigProvider: FC<ConfigProviderProps> = props => {
  const { children, ...config } = props
  const parentConfig = useConfig()

  return (
    <ConfigContext.Provider
      value={{
        ...parentConfig,
        ...config,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig()
}
