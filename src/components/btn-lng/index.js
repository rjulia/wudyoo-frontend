import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../services/actions/language.actions';
import useStyles from './btn-lng-style'

const BtnLng = (props) => {
  const styles = useStyles()
  const language = props.settings.language;
  const onLanguageButtonPress = (lng) => {
    props.dispatch(setLanguage(lng))

  }

  const isActiveHandle = (lng) => (lng === language) ? true : false

  return (
    <div className={styles.languageContianer}>
      <ul>
        <li className={(isActiveHandle('en')) ? 'active' : ''} onClick={() => onLanguageButtonPress('en')}>EN</li>
        <li >|</li>
        <li className={(isActiveHandle('ch')) ? 'active' : ''} onClick={() => onLanguageButtonPress('ch')}>CH</li>
        <li >|</li>
        <li className={(isActiveHandle('hk')) ? 'active' : ''} onClick={() => onLanguageButtonPress('hk')}>HK</li>
      </ul>
    </div>
  )

}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnLng);
