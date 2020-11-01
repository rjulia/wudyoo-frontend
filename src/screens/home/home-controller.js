import React from 'react'
import { connect } from 'react-redux';
import HomeView from './home-view'
import { useQuery } from '@apollo/react-hooks';
import {Spinner} from '../../components'
import { GET_CATEGORIES } from '../../services/queries'


const HomeController = ({ settings }) => {

  const { data, loading, error } = useQuery(GET_CATEGORIES);
  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;

  const viewProps = {
    settings,
    data
  }

  return (
      <HomeView {...viewProps}/>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(HomeController); 
