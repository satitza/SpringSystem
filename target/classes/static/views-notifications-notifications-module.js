(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-notifications-notifications-module"],{

/***/ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js ***!
  \***********************************************************************/
/*! exports provided: AlertComponent, AlertConfig, AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return AlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return AlertConfig;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe((/**
         * @param {?} dismissible
         * @return {?}
         */
        function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.close(); }), parseInt((/** @type {?} */ (this.dismissOnTimeout)), 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    AlertComponent.prototype.close = 
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AlertComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dismissible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dismissOnTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    /**
     * @return {?}
     */
    AlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
    AlertModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [AlertComponent],
                    exports: [AlertComponent],
                    entryComponents: [AlertComponent]
                },] }
    ];
    return AlertModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-bootstrap-alert.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js ***!
  \***********************************************************************/
/*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CLASS_NAME; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsModalRef = /** @class */ (function () {
    function BsModalRef() {
        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */
        this.setClass = Function;
    }
    BsModalRef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BsModalRef;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return ModalOptions;
}());
if (false) {}
/** @type {?} */
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
/** @type {?} */
var CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
var SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
/** @type {?} */
var TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.clickStartedInContent = false;
        this.config = Object.assign({}, options);
    }
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }), this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClickStarted = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClickStop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }), this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1',
                        '[attr.aria-modal]': 'true',
                        '[attr.aria-labelledby]': 'config.ariaLabelledBy',
                        '[attr.aria-describedby]': 'config.ariaDescribedby'
                    }
                }] }
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalOptions },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    ModalContainerComponent.propDecorators = {
        onClickStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
        onClickStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseup', ['$event'],] }],
        onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc', ['$event'],] }]
    };
    return ModalContainerComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAnimated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.FADE);
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: CLASS_NAME.BACKDROP }
                }] }
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    return ModalBackdropComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TRANSITION_DURATION = 300;
/** @type {?} */
var BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this.clickStartedInContent = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClickStarted = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClickStop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    // todo: consider preventing default and stopping propagation
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onEsc = 
    // todo: consider preventing default and stopping propagation
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this._config.show) {
                _this.show();
            }
        }), 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = /**
     * Allows to manually open modal
     * @return {?}
     */
    function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop((/**
         * @return {?}
         */
        function () {
            _this.showElement();
        }));
    };
    /** Allows to manually close modal */
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout((/**
             * @return {?}
             */
            function () { return _this.hideModal(); }), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.showElement = /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        /** @type {?} */
        var transitionComplete = (/**
         * @return {?}
         */
        function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        });
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.hideModal = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop((/**
         * @return {?}
         */
        function () {
            if (!_this.isNested) {
                if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                    _this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        }));
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    // todo: original show was calling a callback when done, but we can use
    // promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = 
    // todo: original show was calling a callback when done, but we can use
    // promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */
            var callbackRemove = (/**
             * @return {?}
             */
            function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            });
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    /**
     * Events tricks
     * @protected
     * @return {?}
     */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    ModalDirective.prototype.focusOtherModal = /**
     * Events tricks
     * @protected
     * @return {?}
     */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    function () {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        /** @type {?} */
        var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = /**
     * @protected
     * @return {?}
     */
    function () {
        if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]
            .getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = /**
     * @protected
     * @return {?}
     */
    function () {
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }
    ]; };
    ModalDirective.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClickStarted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
        onClickStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseup', ['$event'],] }],
        onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc', ['$event'],] }]
    };
    return ModalDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsModalService = /** @class */ (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        // tslint:disable-next-line:no-any
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    // tslint:disable-next-line:no-any
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    BsModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }), this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        var duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.removeBackdrop(); }), duration);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    BsModalService.prototype._showModal = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        var e_1, _a;
        var _this = this;
        /** @type {?} */
        var modalLoader = this.loaders[this.loaders.length - 1];
        if (this.config && this.config.providers) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(this.config.providers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var provider = _c.value;
                    modalLoader.provide(provider);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        /** @type {?} */
        var bsModalRef = new BsModalRef();
        /** @type {?} */
        var modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var duration = _this.config.animated ? TRANSITION_DURATIONS.MODAL : 0;
            setTimeout((/**
             * @return {?}
             */
            function () { return modalContainerRef.instance.hide(); }), duration);
        });
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.setClass = (/**
         * @param {?} newClass
         * @return {?}
         */
        function (newClass) {
            modalContainerRef.instance.config.class = newClass;
        });
        return bsModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    BsModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.removeBackdrop = /**
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** Checks if the body is overflowing and sets scrollbar width */
    /** @internal */
    /** Checks if the body is overflowing and sets scrollbar width */
    /**
     * \@internal
     * @return {?}
     */
    BsModalService.prototype.checkScrollbar = /** Checks if the body is overflowing and sets scrollbar width */
    /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    BsModalService.prototype.resetScrollbar = /**
     * @private
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    BsModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @private
     * @return {?}
     */
    BsModalService.prototype._createLoaders = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype.removeLoaders = /**
     * @private
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((/**
         * @param {?} loader
         * @param {?} i
         * @return {?}
         */
        function (loader, i) {
            loader.instance.level = i + 1;
        }));
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    BsModalService.prototype.copyEvent = 
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe((/**
         * @return {?}
         */
        function () {
            to.emit(_this.lastDismissReason);
        }));
    };
    BsModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }
    ]; };
    return BsModalService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    };
    /**
     * @return {?}
     */
    ModalModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    };
    ModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        ModalBackdropComponent,
                        ModalDirective,
                        ModalContainerComponent
                    ],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent]
                },] }
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-bootstrap-modal.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/alerts.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/alerts.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Bootstrap Alerts</strong>\n          <div class=\"card-header-actions\">\n            <a href=\"https://valor-software.com/ngx-bootstrap/#/alerts\" target=\"_blank\">\n              <small className=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n          </alert>\n          <alert type=\"warning\">\n            <strong>Warning!</strong> Better check yourself, you're not looking too good.\n          </alert>\n          <alert type=\"danger\">\n            <strong>Oh snap!</strong> Change a few things up and try submitting again.\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong>\n          <small>link</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n          </alert>\n          <alert type=\"warning\">\n            <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\n          </alert>\n          <alert type=\"danger\">\n            <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n          </alert>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>additional content</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">\n            <h4 class=\"alert-heading\">Well done!</h4>\n            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n            <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dismissing</small>\n        </div>\n        <div class=\"card-body\">\n          <div *ngFor=\"let alert of alerts\">\n            <alert [type]=\"alert.type\" [dismissible]=\"dismissible\">{{ alert.msg }}</alert>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"dismissible = !dismissible\">Toggle dismissible</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dynamic html</small>\n        </div>\n        <div class=\"card-body\">\n          <div *ngFor=\"let alert of alertsHtml\">\n            <alert [type]=\"alert.type\"><span [innerHtml]=\"alert.msg\"></span></alert>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dynamic content</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\">{{messages[index]}}</alert>\n\n          <div *ngIf=\"index !== messages.length -1; else elseBlock\">\n            <button class=\"btn btn-primary\" (click)=\"changeText()\">Change text</button>\n          </div>\n          <ng-template #elseBlock>\n            <button class=\"btn btn-primary\" (click)=\"index = 0\">Reset</button>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>dismiss on timeout</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"success\" dismissOnTimeout=\"5000\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n\n          <p>If you missed alert on top of me, just press <code>Add more</code> button</p>\n          <div *ngFor=\"let alert of alertsDismiss\">\n            <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">{{ alert.msg }}</alert>\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Add more</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>global styling</small>\n        </div>\n        <div class=\"card-body\">\n          <style>\n            .alert-md-color {\n              background-color: #7B1FA2;\n              border-color: #4A148C;\n              color: #fff;\n            }\n          </style>\n          <alert type=\"md-color\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>component level styling</small>\n        </div>\n        <div class=\"card-body\">\n          <alert type=\"md-local\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Alerts</strong> <small>configuring defaults</small>\n        </div>\n        <div class=\"card-body\">\n          <alert>\n            <strong>Well done!</strong> You successfully read this important alert message.\n          </alert>\n          <alert type=\"info\">\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n          </alert>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/badges.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/badges.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <div class=\"card-header-actions\">\n            <a href=\"http://coreui.io/docs/components/bootstrap-badge/\" class=\"card-header-action\" target=\"_blank\">\n              <small class=\"text-muted\">docs</small>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <h1>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h1>\n          <h2>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h2>\n          <h3>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h3>\n          <h4>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h4>\n          <h5>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h5>\n          <h6>Example heading\n            <span class=\"badge badge-secondary\">New</span>\n          </h6>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"link\" class=\"btn btn-primary\">Notifications\n            <span class=\"badge badge-light badge-pill\" style=\"position: static;\">9</span>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>contextual variations</small>\n        </div>\n        <div class=\"card-body\">\n          <span class=\"badge badge-primary\">Primary</span>\n          <span class=\"badge badge-secondary\">Secondary</span>\n          <span class=\"badge badge-success\">Success</span>\n          <span class=\"badge badge-danger\">Danger</span>\n          <span class=\"badge badge-warning\">Warning</span>\n          <span class=\"badge badge-info\">Info</span>\n          <span class=\"badge badge-light\">Light</span>\n          <span class=\"badge badge-dark\">Dark</span>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>pill badges</small>\n        </div>\n        <div class=\"card-body\">\n          <span class=\"badge badge-pill badge-primary\">Primary</span>\n          <span class=\"badge badge-pill badge-secondary\">Secondary</span>\n          <span class=\"badge badge-pill badge-success\">Success</span>\n          <span class=\"badge badge-pill badge-danger\">Danger</span>\n          <span class=\"badge badge-pill badge-warning\">Warning</span>\n          <span class=\"badge badge-pill badge-info\">Info</span>\n          <span class=\"badge badge-pill badge-light\">Light</span>\n          <span class=\"badge badge-pill badge-dark\">Dark</span>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Badges\n          <small>links</small>\n        </div>\n        <div class=\"card-body\">\n          <a href=\"#\" class=\"badge badge-primary\">Primary</a>\n          <a href=\"#\" class=\"badge badge-secondary\">Secondary</a>\n          <a href=\"#\" class=\"badge badge-success\">Success</a>\n          <a href=\"#\" class=\"badge badge-danger\">Danger</a>\n          <a href=\"#\" class=\"badge badge-warning\">Warning</a>\n          <a href=\"#\" class=\"badge badge-info\">Info</a>\n          <a href=\"#\" class=\"badge badge-light\">Light</a>\n          <a href=\"#\" class=\"badge badge-dark\">Dark</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/modals.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/modals.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Bootstrap Modals\n        </div>\n        <div class=\"card-body\">\n          <!-- Button trigger modal -->\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"myModal.show()\">\n            Launch demo modal\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"largeModal.show()\">\n            Launch large modal\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" (click)=\"smallModal.show()\">\n            Launch small modal\n          </button>\n          <hr>\n          <button type=\"button\" class=\"btn btn-primary mr-1\" data-toggle=\"modal\" (click)=\"primaryModal.show()\">\n            Primary modal\n          </button>\n          <button type=\"button\" class=\"btn btn-success mr-1\" data-toggle=\"modal\" (click)=\"successModal.show()\">\n            Success modal\n          </button>\n          <button type=\"button\" class=\"btn btn-warning mr-1\" data-toggle=\"modal\" (click)=\"warningModal.show()\">\n            Warning modal\n          </button>\n          <button type=\"button\" class=\"btn btn-danger mr-1\" data-toggle=\"modal\" (click)=\"dangerModal.show()\">\n            Danger modal\n          </button>\n          <button type=\"button\" class=\"btn btn-info mr-1\" data-toggle=\"modal\" (click)=\"infoModal.show()\">\n            Info modal\n          </button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-success\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"successModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-success\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #warningModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-warning\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"warningModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"warningModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-warning\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>One fine body&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "./src/app/views/notifications/alerts.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/alerts.component.ts ***!
  \*********************************************************/
/*! exports provided: getAlertConfig, AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlertConfig", function() { return getAlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");




// such override allows to keep some initial values
function getAlertConfig() {
    return Object.assign(new ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"](), { type: 'success' });
}
var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(sanitizer) {
        this.dismissible = true;
        this.alerts = [
            {
                type: 'success',
                msg: "You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "Better check yourself, you're not looking too good."
            }
        ];
        this.alertsHtml = [
            {
                type: 'success',
                msg: "<strong>Well done!</strong> You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "<strong>Heads up!</strong> This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "<strong>Warning!</strong> Better check yourself, you're not looking too good."
            }
        ];
        this.index = 0;
        this.messages = [
            'You successfully read this important alert message.',
            'Now this text is different from what it was before. Go ahead and click the button one more time',
            'Well done! Click reset button and you\'ll see the first message'
        ];
        this.alertsDismiss = [];
        this.alertsHtml = this.alertsHtml.map(function (alert) { return ({
            type: alert.type,
            msg: sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, alert.msg)
        }); });
    }
    AlertsComponent.prototype.reset = function () {
        this.alerts = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertsComponent.prototype.changeText = function () {
        if (this.messages.length - 1 !== this.index) {
            this.index++;
        }
    };
    AlertsComponent.prototype.add = function () {
        this.alertsDismiss.push({
            type: 'info',
            msg: "This alert will be closed in 5 seconds (added: " + new Date().toLocaleTimeString() + ")",
            timeout: 5000
        });
    };
    AlertsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    AlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alerts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/alerts.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [{ provide: ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"], useFactory: getAlertConfig }],
            styles: ["\n  .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/badges.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/badges.component.ts ***!
  \*********************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgesComponent = /** @class */ (function () {
    function BadgesComponent() {
    }
    BadgesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./badges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/badges.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/modals.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/notifications/modals.component.ts ***!
  \*********************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



var ModalsComponent = /** @class */ (function () {
    function ModalsComponent() {
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ModalsComponent.prototype, "myModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('largeModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ModalsComponent.prototype, "largeModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('smallModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ModalsComponent.prototype, "smallModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('primaryModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ModalsComponent.prototype, "primaryModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ModalsComponent.prototype, "successModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('warningModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ModalsComponent.prototype, "warningModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dangerModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ModalsComponent.prototype, "dangerModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], ModalsComponent.prototype, "infoModal", void 0);
    ModalsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/modals.component.html")).default
        })
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts.component */ "./src/app/views/notifications/alerts.component.ts");
/* harmony import */ var _badges_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badges.component */ "./src/app/views/notifications/badges.component.ts");
/* harmony import */ var _modals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals.component */ "./src/app/views/notifications/modals.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Notifications'
        },
        children: [
            {
                path: '',
                redirectTo: 'alerts'
            },
            {
                path: 'alerts',
                component: _alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"],
                data: {
                    title: 'Alerts'
                }
            },
            {
                path: 'badges',
                component: _badges_component__WEBPACK_IMPORTED_MODULE_4__["BadgesComponent"],
                data: {
                    title: 'Badges'
                }
            },
            {
                path: 'modals',
                component: _modals_component__WEBPACK_IMPORTED_MODULE_5__["ModalsComponent"],
                data: {
                    title: 'Modals'
                }
            }
        ]
    }
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var _alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alerts.component */ "./src/app/views/notifications/alerts.component.ts");
/* harmony import */ var _badges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badges.component */ "./src/app/views/notifications/badges.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _modals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals.component */ "./src/app/views/notifications/modals.component.ts");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/views/notifications/notifications-routing.module.ts");

// Angular


// Alert Component



// Modal Component


// Notifications Routing

var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _notifications_routing_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsRoutingModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot()
            ],
            declarations: [
                _alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"],
                _badges_component__WEBPACK_IMPORTED_MODULE_5__["BadgesComponent"],
                _modals_component__WEBPACK_IMPORTED_MODULE_7__["ModalsComponent"]
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-notifications-notifications-module.js.map