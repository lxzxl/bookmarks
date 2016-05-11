/**
 * Created by steven on 16/5/10.
 */
'use strict';
import Wilddog from 'wilddog';
import auth from './auth';
import panelsApi from './panelsApi';

const ref = new Wilddog("https://startme.wilddogio.com/");
window.ref = ref;
auth(ref);
const panels = panelsApi(ref);

export default {
  auth,
  panels
}


