/**
 * Created by steven on 5/13/16.
 */
const path = require('path');
const ghpages = require('gh-pages');

ghpages.publish(path.join(__dirname, '../dist'), {
  branch: 'coding-pages'
}, (err) => {
  if (err) console.log(err);
  else consle.log('Successfully Published!!!!')
});
