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
var SideMenu = (function (_super) {
    __extends(SideMenu, _super);
    function SideMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sub: 'all'
        };
        return _this;
    }
    SideMenu.prototype.render = function () {
        return (React.createElement("div", null, this.state.sub));
    };
    return SideMenu;
}(Component));
export default SideMenu;
//# sourceMappingURL=SideMenu.js.map