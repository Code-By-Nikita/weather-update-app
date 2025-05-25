import React from 'react'
import { useTranslation } from 'react-i18next';

const LanguageButton = () => {

     const { i18n } = useTranslation();
    
      const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };


  return (  
    <div className='flex items-center justify-center'>
          <button onClick={() => changeLanguage('en')} className="px-2 py-1 text-white bg-sky-500 rounded mr-2 mb-2 font-roboto shadow-md text-shadow-sm">
            English
          </button>
          <button onClick={() => changeLanguage('hi')} className="px-2 py-1 text-white bg-sky-500 rounded mb-2 font-hindi font-medium shadow-md text-shadow-sm">
            हिन्दी
          </button>
        </div>
  )
}

export default LanguageButton
