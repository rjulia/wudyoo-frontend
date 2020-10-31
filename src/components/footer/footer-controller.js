import React from 'react'
import FooterView from './footer-view'
import { useQuery } from '@apollo/react-hooks';
import { GET_PAGES } from '../../services/queries'
import Spinner from '../spinner'

const FooterController = () => {
  const { data, loading, error } = useQuery(GET_PAGES);
  console.log(data)
  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;
  return (
    <FooterView pages={data.pages}/>
  )
}

export default FooterController
