import { createContext, ReactNode,useContext, useState } from 'react'

import { SearchContextType } from './types'

export const SearchContext = createContext<SearchContextType | null>(null)

const SearchProvider = ({ children }: { children: ReactNode }) => {

  return (
    <SearchContext.Provider
      value={{
       
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchProvider = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchProvider deve ser usado dentro de SearchProvider')
  }
  return context
}

export default SearchProvider
