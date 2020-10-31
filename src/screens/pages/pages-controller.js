import React, { useMemo } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import PagesView from './pages-view'
import URI from 'urijs'
import { isBrowser } from '../../helpers'

const PagesController = () => {

  let location = useLocation();
  console.log(location)
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
