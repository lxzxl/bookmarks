/**
 * Created by steven on 16/5/15.
 */
'use strict';

export class Panel extends Object {
  constructor(name = 'New Panel') {
    super({
      name,
      links: [],
      flags: {
        isEditing: false
      }
    });
  }
}

export class Link extends Object {
  constructor(name = 'New Link') {
    super({
      name,
      url: 'http://'
    });
  }
}
