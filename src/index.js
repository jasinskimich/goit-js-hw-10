import './css/styles.css';
import { debounce } from 'lodash';
import { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');
const searchResultsList = document.querySelector('.country-list');
const searchResultsInfo = document.querySelector('.country-info');