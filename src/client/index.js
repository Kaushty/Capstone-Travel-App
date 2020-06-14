console.log(`Entry Point ${__filename}`);

import {fetchData} from './js/fetchAll';
import './styles/main_style.scss'
import './styles/header_style.scss'
import './styles/body_style.scss'
import './styles/formatdata_style.scss'


document.getElementById('btn-sub').addEventListener('click', function(){
    console.log('Button Clicked');
    fetchData();
})

