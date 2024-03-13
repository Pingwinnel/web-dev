import {
  FormsModule
} from "./chunk-FXDYAQCY.js";
import {
  CommonModule
} from "./chunk-NBK4UOSH.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  __spread,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵsetNgModuleScope,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-3WHSHWZO.js";

// node_modules/ng-starrating/fesm5/ng-starrating.js
var _c0 = ["starMain"];
var RatingComponent = (
  /** @class */
  function() {
    function RatingComponent2() {
    }
    RatingComponent2.prototype.ngOnInit = function() {
    };
    RatingComponent2.ɵfac = function RatingComponent_Factory(t) {
      return new (t || RatingComponent2)();
    };
    RatingComponent2.ɵcmp = ɵɵdefineComponent({ type: RatingComponent2, selectors: [["lib-rating"]], decls: 2, vars: 0, template: function RatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " rating works! ");
        ɵɵelementEnd();
      }
    }, encapsulation: 2 });
    (function() {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingComponent2, [{
        type: Component,
        args: [{
          selector: "lib-rating",
          template: "\n    <p>\n      rating works!\n    </p>\n  "
        }]
      }], function() {
        return [];
      }, null);
    })();
    return RatingComponent2;
  }()
);
var StarRatingComponent = (
  /** @class */
  function() {
    function StarRatingComponent2() {
      var _this = this;
      this.stars = [];
      this._readOnly = false;
      this._totalStars = 5;
      this.rate = new EventEmitter();
      this.onStarsCountChange = new Subject();
      this.onStarsCountChange.subscribe(function() {
        _this.setStars();
        _this.generateRating(true);
        _this.applySizeAllStars();
        _this.applyColorStyleAllStars(false);
        _this.addEvents();
      });
      this.onValueChange = new Subject();
      this.onValueChange.subscribe(function() {
        _this.generateRating();
        _this.applySizeAllStars();
      });
      this.onCheckedColorChange = new Subject();
      this.onCheckedColorChange.subscribe(function() {
        _this.applyColorStyleAllStars(true);
      });
      this.onUnCheckedColorChange = new Subject();
      this.onUnCheckedColorChange.subscribe(function() {
        _this.applyColorStyleAllStars(false);
      });
      this.onSizeChange = new Subject();
      this.onSizeChange.subscribe(function() {
        _this.applySizeAllStars();
      });
      this.onReadOnlyChange = new Subject();
      this.onReadOnlyChange.subscribe(function() {
        _this.readonly ? _this.makeReadOnly() : _this.makeEditable();
      });
    }
    StarRatingComponent_1 = StarRatingComponent2;
    Object.defineProperty(StarRatingComponent2.prototype, "checkedcolor", {
      get: function() {
        return this._checkedColor;
      },
      set: function(value) {
        this._checkedColor = value;
        this._checkedColor && this.onCheckedColorChange.next(this._checkedColor);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(StarRatingComponent2.prototype, "uncheckedcolor", {
      get: function() {
        return this._unCheckedColor;
      },
      set: function(value) {
        this._unCheckedColor = value;
        this._unCheckedColor && this.onUnCheckedColorChange.next(this._unCheckedColor);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(StarRatingComponent2.prototype, "value", {
      get: function() {
        return this._value;
      },
      set: function(value) {
        value = !value || value == null ? 0 : value;
        this._value = value;
        this._value >= 0 && this.onValueChange.next(this._value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(StarRatingComponent2.prototype, "size", {
      get: function() {
        return this._size.concat(!this._size.includes("px") ? "px" : "");
      },
      set: function(value) {
        value = !value || value == null || value == "0px" ? "24px" : value;
        this._size = value;
        this.onSizeChange.next(this._size);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(StarRatingComponent2.prototype, "readonly", {
      get: function() {
        return String(this._readOnly) === "true";
      },
      set: function(value) {
        this._readOnly = value;
        this.onReadOnlyChange.next(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(StarRatingComponent2.prototype, "totalstars", {
      get: function() {
        return this._totalStars;
      },
      set: function(value) {
        this._totalStars = value <= 0 ? 5 : Math.round(value);
        this.onStarsCountChange.next(this._totalStars);
      },
      enumerable: true,
      configurable: true
    });
    StarRatingComponent2.prototype.makeEditable = function() {
      if (!this.mainElement)
        return;
      this.mainElement.nativeElement.style.cursor = "pointer";
      this.mainElement.nativeElement.title = this.value;
      this.stars.forEach(function(star) {
        star.style.cursor = "pointer";
        star.title = star.dataset.index;
      });
    };
    StarRatingComponent2.prototype.makeReadOnly = function() {
      if (!this.mainElement)
        return;
      this.mainElement.nativeElement.style.cursor = "default";
      this.mainElement.nativeElement.title = this.value;
      this.stars.forEach(function(star) {
        star.style.cursor = "default";
        star.title = "";
      });
    };
    StarRatingComponent2.prototype.addEvents = function() {
      var _this = this;
      if (!this.mainElement)
        return;
      this.mainElement.nativeElement.addEventListener("mouseleave", this.offStar.bind(this));
      this.mainElement.nativeElement.style.cursor = "pointer";
      this.mainElement.nativeElement.title = this.value;
      this.stars.forEach(function(star) {
        star.addEventListener("click", _this.onRate.bind(_this));
        star.addEventListener("mouseenter", _this.onStar.bind(_this));
        star.style.cursor = "pointer";
        star.title = star.dataset.index;
      });
    };
    StarRatingComponent2.prototype.ngAfterViewInit = function() {
    };
    StarRatingComponent2.prototype.onRate = function(event) {
      if (this.readonly)
        return;
      var star = event.srcElement;
      var oldValue = this.value;
      this.value = parseInt(star.dataset.index);
      var rateValues = { oldValue, newValue: this.value, starRating: this };
      this.rate.emit(rateValues);
    };
    StarRatingComponent2.prototype.onStar = function(event) {
      if (this.readonly)
        return;
      var star = event.srcElement;
      var currentIndex = parseInt(star.dataset.index);
      for (var index = 0; index < currentIndex; index++) {
        this.stars[index].className = "";
        this.addDefaultClass(this.stars[index]);
        this.addCheckedStarClass(this.stars[index]);
      }
      for (var index = currentIndex; index < this.stars.length; index++) {
        this.stars[index].className = "";
        this.addDefaultClass(this.stars[index]);
      }
    };
    StarRatingComponent2.prototype.offStar = function(event) {
      this.generateRating();
    };
    StarRatingComponent2.prototype.addDefaultClass = function(star) {
      star.classList.add(StarRatingComponent_1.CLS_DEFAULT_STAR);
    };
    StarRatingComponent2.prototype.addCheckedStarClass = function(star) {
      star.classList.add(StarRatingComponent_1.CLS_CHECKED_STAR);
    };
    StarRatingComponent2.prototype.addHalfStarClass = function(star) {
      star.classList.add(StarRatingComponent_1.CLS_HALF_STAR);
    };
    StarRatingComponent2.prototype.setStars = function() {
      var _this = this;
      if (!this.mainElement)
        return;
      var starContainer = this.mainElement.nativeElement;
      var maxStars = __spread(Array(Number(this.totalstars)).keys());
      this.stars.length = 0;
      starContainer.innerHTML = "";
      maxStars.forEach(function(starNumber) {
        var starElement = document.createElement("span");
        starElement.dataset.index = (starNumber + 1).toString();
        starElement.title = starElement.dataset.index;
        starContainer.appendChild(starElement);
        _this.stars.push(starElement);
      });
    };
    StarRatingComponent2.prototype.applySizeAllStars = function() {
      var _this = this;
      if (this._size) {
        this.stars.length == 0 && this.setStars();
        this.stars.forEach(function(star) {
          var newSize = _this.size.match(/\d+/)[0];
          var halfSize = parseInt(newSize) * 10 / 24;
          var halfMargin = 0 - parseInt(newSize) * 20 / 24;
          star.style.setProperty(StarRatingComponent_1.VAR_SIZE, _this.size);
          if (star.classList.contains(StarRatingComponent_1.CLS_HALF_STAR)) {
            star.style.setProperty(StarRatingComponent_1.VAR_HALF_WIDTH, halfSize + "px");
            star.style.setProperty(StarRatingComponent_1.VAR_HALF_MARGIN, halfMargin + "px");
          }
        });
      }
    };
    StarRatingComponent2.prototype.applyColorStyleAllStars = function(setChecked) {
      var _this = this;
      this.stars.length == 0 && this.setStars();
      this.stars.forEach(function(star) {
        if (setChecked) {
          _this.applyCheckedColorStyle(star);
        } else {
          _this.applyUnCheckedColorStyle(star);
        }
      });
    };
    StarRatingComponent2.prototype.applyColorStyle = function(starElement) {
      this.applyCheckedColorStyle(starElement);
      this.applyUnCheckedColorStyle(starElement);
    };
    StarRatingComponent2.prototype.applyCheckedColorStyle = function(starElement) {
      starElement.style.setProperty(StarRatingComponent_1.VAR_CHECKED_COLOR, this.checkedcolor);
    };
    StarRatingComponent2.prototype.applyUnCheckedColorStyle = function(starElement) {
      starElement.style.setProperty(StarRatingComponent_1.VAR_UNCHECKED_COLOR, this.uncheckedcolor);
    };
    StarRatingComponent2.prototype.generateRating = function(forceGenerate) {
      var _this = this;
      if (forceGenerate === void 0) {
        forceGenerate = false;
      }
      if (!this.mainElement)
        return;
      if (this.readonly && !forceGenerate)
        return;
      this.stars.length == 0 && this.setStars();
      this.mainElement.nativeElement.title = this.value;
      var hasDecimals = (Number.parseFloat(this.value.toString()) % 1).toString().substring(3, 2) ? true : false;
      var i = 1;
      this.stars.forEach(function(star) {
        star.className = "";
        _this.applyColorStyle(star);
        _this.addDefaultClass(star);
        if (_this.value >= i) {
          _this.addCheckedStarClass(star);
        } else {
          if (hasDecimals) {
            _this.addHalfStarClass(star);
            hasDecimals = false;
          }
        }
        i++;
      });
    };
    var StarRatingComponent_1;
    StarRatingComponent2.VAR_CHECKED_COLOR = "--checkedColor";
    StarRatingComponent2.VAR_UNCHECKED_COLOR = "--unCheckedColor";
    StarRatingComponent2.VAR_SIZE = "--size";
    StarRatingComponent2.VAR_HALF_WIDTH = "--halfWidth";
    StarRatingComponent2.VAR_HALF_MARGIN = "--halfMargin";
    StarRatingComponent2.CLS_CHECKED_STAR = "on";
    StarRatingComponent2.CLS_DEFAULT_STAR = "star";
    StarRatingComponent2.CLS_HALF_STAR = "half";
    StarRatingComponent2.INP_CHECKED_COLOR = "checkedcolor";
    StarRatingComponent2.INP_UNCHECKED_COLOR = "uncheckedcolor";
    StarRatingComponent2.INP_VALUE = "value";
    StarRatingComponent2.INP_SIZE = "size";
    StarRatingComponent2.INP_READONLY = "readonly";
    StarRatingComponent2.INP_TOTALSTARS = "totalstars";
    __decorate([
      ViewChild("starMain", { static: true })
    ], StarRatingComponent2.prototype, "mainElement", void 0);
    __decorate([
      Output()
    ], StarRatingComponent2.prototype, "rate", void 0);
    __decorate([
      Input(StarRatingComponent_1.INP_CHECKED_COLOR)
    ], StarRatingComponent2.prototype, "checkedcolor", null);
    __decorate([
      Input(StarRatingComponent_1.INP_UNCHECKED_COLOR)
    ], StarRatingComponent2.prototype, "uncheckedcolor", null);
    __decorate([
      Input(StarRatingComponent_1.INP_VALUE)
    ], StarRatingComponent2.prototype, "value", null);
    __decorate([
      Input(StarRatingComponent_1.INP_SIZE)
    ], StarRatingComponent2.prototype, "size", null);
    __decorate([
      Input(StarRatingComponent_1.INP_READONLY)
    ], StarRatingComponent2.prototype, "readonly", null);
    __decorate([
      Input(StarRatingComponent_1.INP_TOTALSTARS)
    ], StarRatingComponent2.prototype, "totalstars", null);
    StarRatingComponent2.ɵfac = function StarRatingComponent_Factory(t) {
      return new (t || StarRatingComponent2)();
    };
    StarRatingComponent2.ɵcmp = ɵɵdefineComponent({ type: StarRatingComponent2, selectors: [["star-rating"]], viewQuery: function StarRatingComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mainElement = _t.first);
      }
    }, inputs: { checkedcolor: "checkedcolor", uncheckedcolor: "uncheckedcolor", value: "value", size: "size", readonly: "readonly", totalstars: "totalstars" }, outputs: { rate: "rate" }, decls: 2, vars: 0, consts: [["starMain", ""]], template: function StarRatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", null, 0);
      }
    }, styles: [":root{--checkedColor:gold;--unCheckedColor:gray;--size:24px;--halfWidth:10px;--halfMargin:-20px}.star{cursor:pointer;color:var(--unCheckedColor);font-size:var(--size);width:var(--size);display:inline-block}.star:last-child{margin-right:0}.star:before{content:'\\2605'}.star.on{color:var(--checkedColor)}.star.half:after{content:'\\2605';color:var(--checkedColor);position:absolute;margin-left:var(--halfMargin);width:var(--halfWidth);overflow:hidden}"], encapsulation: 3 });
    (function() {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRatingComponent2, [{
        type: Component,
        args: [{ selector: "star-rating", template: "<div #starMain>\n</div>", encapsulation: ViewEncapsulation$1.ShadowDom, styles: [":root{--checkedColor:gold;--unCheckedColor:gray;--size:24px;--halfWidth:10px;--halfMargin:-20px}.star{cursor:pointer;color:var(--unCheckedColor);font-size:var(--size);width:var(--size);display:inline-block}.star:last-child{margin-right:0}.star:before{content:'\\2605'}.star.on{color:var(--checkedColor)}.star.half:after{content:'\\2605';color:var(--checkedColor);position:absolute;margin-left:var(--halfMargin);width:var(--halfWidth);overflow:hidden}"] }]
      }], function() {
        return [];
      }, { rate: [{
        type: Output
      }], checkedcolor: [{
        type: Input,
        args: [StarRatingComponent_1.INP_CHECKED_COLOR]
      }], uncheckedcolor: [{
        type: Input,
        args: [StarRatingComponent_1.INP_UNCHECKED_COLOR]
      }], value: [{
        type: Input,
        args: [StarRatingComponent_1.INP_VALUE]
      }], size: [{
        type: Input,
        args: [StarRatingComponent_1.INP_SIZE]
      }], readonly: [{
        type: Input,
        args: [StarRatingComponent_1.INP_READONLY]
      }], totalstars: [{
        type: Input,
        args: [StarRatingComponent_1.INP_TOTALSTARS]
      }], mainElement: [{
        type: ViewChild,
        args: ["starMain", { static: true }]
      }] });
    })();
    return StarRatingComponent2;
  }()
);
var RatingModule = (
  /** @class */
  function() {
    function RatingModule2() {
    }
    RatingModule2.prototype.ngDoBootstrap = function() {
    };
    RatingModule2.ɵfac = function RatingModule_Factory(t) {
      return new (t || RatingModule2)();
    };
    RatingModule2.ɵmod = ɵɵdefineNgModule({ type: RatingModule2 });
    RatingModule2.ɵinj = ɵɵdefineInjector({ imports: [
      FormsModule,
      CommonModule
    ] });
    (function() {
      (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule2, [{
        type: NgModule,
        args: [{
          imports: [
            FormsModule,
            CommonModule
          ],
          declarations: [
            RatingComponent,
            StarRatingComponent
          ],
          exports: [StarRatingComponent],
          entryComponents: [StarRatingComponent]
        }]
      }], function() {
        return [];
      }, null);
    })();
    (function() {
      (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RatingModule2, { declarations: function() {
        return [RatingComponent, StarRatingComponent];
      }, imports: function() {
        return [
          FormsModule,
          CommonModule
        ];
      }, exports: function() {
        return [StarRatingComponent];
      } });
    })();
    return RatingModule2;
  }()
);
export {
  RatingModule,
  StarRatingComponent,
  RatingComponent as ɵa
};
//# sourceMappingURL=ng-starrating.js.map
