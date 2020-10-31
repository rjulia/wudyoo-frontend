import React, { useMemo } from 'react'
import { useLocation } from "react-router-dom";
import PagesView from './pages-view'
import URI from 'urijs'
import { isBrowser } from '../../helpers'

const PagesController = ({settings}) => {
  console.log(settings)
  let location = useLocation();
  const urlParams = useMemo(() => {
    let search = {}
    if (isBrowser()) {
      search = URI(location.pathname).search(true)
    }
    return search
  }, [location])

  console.log(urlParams)
  return (
      <PagesView/>
  )
}

export default PagesController
