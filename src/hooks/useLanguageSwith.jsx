/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useTranslation } from "react-i18next";

const useLanguageSwitch = () => {
    const [currentLanguage,setcurrentLanguage]=useState('es')
    const {t,i18n } = useTranslation();
  const handleselectlanguage = (event) => {
    if(event.value=='es'){
      i18n.changeLanguage('es')
      setcurrentLanguage('es')
    }else if(event.value=='en'){
      i18n.changeLanguage('en')
      setcurrentLanguage('en')

    }else{
      i18n.changeLanguage('en')
    }
  };

  return {
    currentLanguage,
    handleselectlanguage,
    t
  }


  };
  
  export default useLanguageSwitch;