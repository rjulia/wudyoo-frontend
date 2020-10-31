import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { GET_PAGE } from '../../services/queries'
import {Spinner} from '../../components'
import PagesView from './pages-view'


const PagesController = ({ settings }) => {
  let location = useLocation();
  const slug = _.last(_.split(location.pathname, '/'))
  const { data, loading, error } = useQuery(GET_PAGE, {
    variables: {
      slug
    }
  });
  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;

  const viewProps = {
    settings,
    data
  }
  return (
    <PagesView {...viewProps} />
  )
}

const mapStateToProps = (state) => {
  return state
}


export default connect(mapStateToProps)(PagesController); 
