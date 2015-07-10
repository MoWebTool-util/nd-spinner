/**
 * @module Spinner
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict';

var Overlay = require('nd-overlay');

var Spinner = Overlay.extend({

  attrs: {
    reference: null,
    alignment: null,
    element: '<div></div>',
    content: null,
    size: 'small',
    zIndex: 999
  },

  initAttrs: function(config) {
    Spinner.superclass.initAttrs.call(this, config);

    var size = this.get('size');
    this.set('className', 'ui-spinner-' + size);

    var fixes = ({
      small: ['10px', '', '-10px'],
      large: ['20px', '', '-20px']
    })[size];

    var alignment = this.get('alignment');
    var aligns = ['0%', '50%', '100%'];
    var alignX = aligns[1];
    var alignY = aligns[1];
    var fixX;
    var fixY;

    ['left', 'center', 'right'].some(function(align, i) {
      if (alignment.indexOf(align) !== -1) {
        fixX = fixes[i];
        alignX = aligns[i];
        return true;
      }
    });

    ['top', 'middle', 'bottom'].some(function(align, i) {
      if (alignment.indexOf(align) !== -1) {
        fixY = fixes[i];
        alignY = aligns[i];
        return true;
      }
    });

    this.set('align', {
      baseElement: this.get('reference'),
      baseXY: [alignX + fixX, alignY + fixY],
      selfXY: [alignX, alignY]
    });
  },

  _onRenderContent: function(content) {
    this.element.html(content);
  }

});

module.exports = Spinner;
