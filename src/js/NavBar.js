var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
var NavBar = (function (_super) {
    __extends(NavBar, _super);
    function NavBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sub: 'all'
        };
        return _this;
    }
    NavBar.prototype.render = function () {
        return (React.createElement("div", null, this.state.sub));
    };
    return NavBar;
}(Component));
export default NavBar;
//# sourceMappingURL=NavBar.js.map