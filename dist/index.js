var React = require('react');

var Iphone = function Iphone() {
  var container = {
    fontFamily: 'Open Sans',
    width: '240px',
    height: '500px',
    background: '#f4f6fc'
  };
  var iphoneCase = {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '30px',
    boxShadow: '0px 0px 0px 4px #1f1f1f, 0px 0px 0px 4px #191919, 0px 0px 0px 12px #111'
  };
  return React.createElement("div", {
    style: container
  }, React.createElement("div", {
    style: iphoneCase
  }, React.createElement("div", {
    className: 'react-iphone__speaker'
  }), React.createElement("div", {
    className: 'react-iphone__camera'
  }), "hello"));
};

exports.Iphone = Iphone;
//# sourceMappingURL=index.js.map
