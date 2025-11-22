/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/components/3rdParty/paypal/index.js":
/*!*************************************************!*\
  !*** ./app/components/3rdParty/paypal/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html.txt */ "./app/components/3rdParty/paypal/index.html.txt");
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var _outbound_emails_newContractSubmission_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../outbound-emails/newContractSubmission.js */ "./app/outbound-emails/newContractSubmission.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



// import styles from './style.scss.txt';
var logIf = __webpack_require__(/*! ../../../../utils/logIf.js */ "./utils/logIf.js");

// Attach the paypal script to the head of the document
var script = document.createElement('script');
// Add a custom Client ID 
var deploymentClientId = 'AVzTno9fB7HGr_vYJlE_ZgGqVONSnSJVdRwqoY0CRyA5GZh75iubhs2myXQW5mlNolH7lcQDpooNGf5_';
script.src = "https://www.paypal.com/sdk/js?client-id=".concat(deploymentClientId, "&components=buttons&enable-funding=venmo&disable-funding=credit&currency=USD");
document.head.appendChild(script);

/**
 * This component is a wrapper for the paypal button and logic
 * Paypal offers a few workflows.
 * 
 * This logic is copied over from another project where paypal is working. 
 * The goal is to encapsulate all of it and document it here.
 * 
 */
var paypalButtonAction;
(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_1__.createCustomElement)('paypal-component', function () {
  // Initialize paypal buttons
  // initializePaypalButtons(); // using script on load event
}, _index_html_txt__WEBPACK_IMPORTED_MODULE_0__["default"], "");
window.initializePaypalButtons = function () {
  var cost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250.00;
  // Create random Id for the paypal interaction
  var transactionId = 'ghost-artist-fee-recept-id_' + Math.floor(Math.random() * 1000000);

  // Initialize paypal buttons
  var paypalPayload = {
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        // value: "1.00",
        value: cost
      },
      reference_id: transactionId,
      custom_id: transactionId,
      description: "GHOST membership fee ".slice(0, 127)
    }],
    application_context: {
      shipping_preference: 'NO_SHIPPING'
    }
  };
  paypal.Buttons({
    onInit: function onInit(data, actions) {
      // Disable the buttons
      //   const modal = jQuery('#' + modalId)
      //   const modalData = modal.data()

      logIf.paypal && console.log('oninit', {
        data: data,
        actions: actions
      });

      // actions.disable()
      paypalButtonAction = actions;

      // // Disable the buttons if based on form data

      //   resultMessage('')
      // actions.disable()
    },
    createOrder: function createOrder(data, actions) {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, orderData, _orderData$jsonRespon, errorDetail, errorMessage, err;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/paypal/order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                // use the "body" param to optionally pass additional order information
                // like product ids and quantities
                body: JSON.stringify(paypalPayload)
              });
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              orderData = _context.sent;
              if (!orderData.jsonResponse.id) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return", orderData.jsonResponse.id);
            case 11:
              errorDetail = (_orderData$jsonRespon = orderData.jsonResponse) === null || _orderData$jsonRespon === void 0 || (_orderData$jsonRespon = _orderData$jsonRespon.details) === null || _orderData$jsonRespon === void 0 ? void 0 : _orderData$jsonRespon[0];
              errorMessage = errorDetail ? "".concat(errorDetail.issue, " ").concat(errorDetail.description, " (").concat(orderData.jsonResponse.debug_id, ")") : JSON.stringify(orderData);
              throw new Error(errorMessage);
            case 14:
              _context.next = 21;
              break;
            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              err = JSON.parse(_context.t0.message);
              logIf.paypal && console.log({
                'error.message': _context.t0.message,
                'typeof error.message': _typeof(_context.t0.message),
                err: err
              });
              console.error(_context.t0);

              // resultMessage(
              //   `Could not initiate PayPal Checkout...<br><br>${err.jsonResponse.error_description}`
              // )
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 16]]);
      }))();
    },
    onApprove: function onApprove(data, actions) {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _orderData, response, orderData, errorDetail, _orderData2, _orderData3, transaction, userId, email, user, invoice, contracts;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              logIf.paypal && console.log({
                onApprove: data
              });
              _context2.prev = 1;
              _context2.next = 4;
              return fetch("/api/paypal/capture", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  orderID: data.orderID
                })
              });
            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();
            case 7:
              orderData = _context2.sent;
              orderData = orderData.jsonResponse;
              logIf.paypal && console.log({
                orderData: orderData
              });
              errorDetail = (_orderData = orderData) === null || _orderData === void 0 || (_orderData = _orderData.details) === null || _orderData === void 0 ? void 0 : _orderData[0];
              if (!((errorDetail === null || errorDetail === void 0 ? void 0 : errorDetail.issue) === 'INSTRUMENT_DECLINED')) {
                _context2.next = 15;
                break;
              }
              return _context2.abrupt("return", actions.restart());
            case 15:
              if (!errorDetail) {
                _context2.next = 19;
                break;
              }
              throw new Error("".concat(errorDetail.description, " (").concat(orderData.debug_id, ")"));
            case 19:
              if (orderData.purchase_units) {
                _context2.next = 23;
                break;
              }
              throw new Error(JSON.stringify(orderData));
            case 23:
              // Success
              transaction = ((_orderData2 = orderData) === null || _orderData2 === void 0 || (_orderData2 = _orderData2.purchase_units) === null || _orderData2 === void 0 || (_orderData2 = _orderData2[0]) === null || _orderData2 === void 0 || (_orderData2 = _orderData2.payments) === null || _orderData2 === void 0 || (_orderData2 = _orderData2.captures) === null || _orderData2 === void 0 ? void 0 : _orderData2[0]) || ((_orderData3 = orderData) === null || _orderData3 === void 0 || (_orderData3 = _orderData3.purchase_units) === null || _orderData3 === void 0 || (_orderData3 = _orderData3[0]) === null || _orderData3 === void 0 || (_orderData3 = _orderData3.payments) === null || _orderData3 === void 0 || (_orderData3 = _orderData3.authorizations) === null || _orderData3 === void 0 ? void 0 : _orderData3[0]);
              logIf.paypal && console.log('Capture result', orderData, JSON.stringify(orderData, null, 2), CRUD);

              // replace the buttons with a success message

              document.querySelector('.payPalContainer').style = "display:none";
              document.querySelector('.payPalContainer').insertAdjacentHTML('afterend', "<div class='processPayment'>Processing Payment....</div>");

              // get user Id
              userId = firebase.auth.currentUser.uid;
              email = firebase.auth.currentUser.email;
              _context2.next = 31;
              return CRUD.read('ghost-contracts', userId);
            case 31:
              user = _context2.sent;
              invoice = {
                membershipPaid: true,
                membershipReceipt: {
                  transactionId: transaction.id,
                  status: transaction.status,
                  amount: transaction.amount.value,
                  currency: transaction.amount.currency_code,
                  createdAt: firebase.serverTimestamp()
                }
              };
              _context2.next = 35;
              return CRUD.readAll('ghost-contracts');
            case 35:
              contracts = _context2.sent;
              CRUD.update('ghost-contracts', userId, {
                artistDetails: invoice
              }).then(function () {
                // send email to the user

                (0,_outbound_emails_newContractSubmission_js__WEBPACK_IMPORTED_MODULE_2__.sendNewContractSubmissionEmail)(user, transaction);

                // send email to the board members

                (0,_outbound_emails_newContractSubmission_js__WEBPACK_IMPORTED_MODULE_2__.sendNewContractSubmissionBoardEmail)(user, transaction, contracts);
                claimRolesForMember(userId);
                window.addEventListener("message", function (event) {
                  if (event.data.dispatch !== 'gmailController-response') return;
                  if (event.data.error) {
                    document.querySelector('.processPayment').innerText = "<div style='color:red; font-weight: bold'>Payment successful but error sending email</div>";
                    return;
                  }

                  // You can add additional logic here to handle the message
                  // show success message

                  document.querySelector('.processPayment').innerText = "Payment Successful - Email Sent";
                  setTimeout(function () {
                    // redirect to the dashboard
                    window.location.href = '/members';
                  }, 3000);
                });
              });

              // save data to the database
              // if (orderData) {
              //    CRUD
              // }
            case 37:
              _context2.next = 43;
              break;
            case 39:
              _context2.prev = 39;
              _context2.t0 = _context2["catch"](1);
              logIf.paypal && console.log(_context2.t0);
              console.error(_context2.t0);
            case 43:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 39]]);
      }))();
    }
  }).render('.payPalContainer');
};

// Note move this method to a more appropriate file
//this is for testing
function claimRolesForMember(_x) {
  return _claimRolesForMember.apply(this, arguments);
}
function _claimRolesForMember() {
  _claimRolesForMember = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId) {
    var user, allUsers, membersToUpdate;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return CRUD.read('ghost-contracts', userId);
        case 2:
          user = _context4.sent;
          _context4.next = 5;
          return CRUD.readAll('ghost-contracts');
        case 5:
          allUsers = _context4.sent;
          // find the users that have the role of member
          membersToUpdate = Object.values(allUsers).filter(function (_user) {
            if (!_user.committeeRoleId) return null;
            if (_user.userId === user.userId) return null;
            return _user.committeeRoleId.some(function (roleId) {
              return user.committeeRoleId.includes(roleId);
            });
          }).filter(Boolean); // update the users
          membersToUpdate.forEach(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(member) {
              var newRoles;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    newRoles = member.committeeRoleId.filter(function (roleId) {
                      return !user.committeeRoleId.includes(roleId);
                    });
                    _context3.next = 3;
                    return CRUD.update('ghost-contracts', member.userId, {
                      committeeRoleId: newRoles
                    });
                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }());
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _claimRolesForMember.apply(this, arguments);
}

/***/ }),

/***/ "./app/components/application/index.js":
/*!*********************************************!*\
  !*** ./app/components/application/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html.txt */ "./app/components/application/index.html.txt");
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./app/components/application/style.scss");
/* harmony import */ var _outbound_emails_approvedNewArtist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../outbound-emails/approvedNewArtist */ "./app/outbound-emails/approvedNewArtist.js");
/* harmony import */ var _outbound_emails_notApprovedNewArtist_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../outbound-emails/notApprovedNewArtist.js */ "./app/outbound-emails/notApprovedNewArtist.js");





var logIf = __webpack_require__(/*! ../../../utils/logIf.js */ "./utils/logIf.js");
(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_1__.createCustomElement)('application-component', function () {

  // Fot some reason whe nthe component is loaded via javascript, this call back doesnt fire.

  // events must be inline
}, _index_html_txt__WEBPACK_IMPORTED_MODULE_0__["default"], '', {
  attributes: ['firstName', 'lastName', 'medium', 'createdAt', 'approved', 'hasBeenReviewed', 'email', 'phone', 'website', 'studioAddress', 'mailingAddress', 'isWithinBoundaries', 'randomId', 'waStateBusinessLicenseUbiNumber', 'studioSharingResponse', 'artistMentor', 'howDidYouHearAboutUs', 'digitalImage1', 'digitalImage2', 'digitalImage3', 'digitalImage4', 'artistStatement', 'websiteSocialMedia', 'fbId', 'status']
});
document.addEventListener('DOMContentLoaded', function () {
  window.updateReview = function (event, reviewAnswer) {
    // logIf.crud && console.log("updateReview", event)
    console.log("updateReview", event);
    // update button to loading
    var button = event.target;
    var btnText = button.innerHTML;
    button.setAttribute('disabled', 'disabled');
    button.innerHTML = 'Loading...';

    // get the fbId
    var fbId = button.getAttribute('data-fb-id');
    CRUD.update('new-applications', fbId, {
      hasBeenReviewed: true,
      approved: reviewAnswer
    }).then(function () {
      // update the button text
      button.innerHTML = 'Review Submitted';
      setTimeout(function () {
        button.removeAttribute('disabled');
        button.innerHTML = btnText;

        // collapse the application
        var application = button.closest('.artist-application-review');
        application.classList.toggle('expanded');

        // update status text
        application.querySelector('.status').innerHTML = reviewAnswer ? 'Approved' : 'Not Approved';
        var applicationComponent = button.closest('application-component');
        var newArtistEmail = applicationComponent.getAttribute("email");
        if (reviewAnswer == true) {
          (0,_outbound_emails_approvedNewArtist__WEBPACK_IMPORTED_MODULE_3__.sendApprovedNewArtistEmail)(newArtistEmail);
        } else {
          (0,_outbound_emails_notApprovedNewArtist_js__WEBPACK_IMPORTED_MODULE_4__.sendNotApprovedNewArtistEmail)(newArtistEmail);
        }
      }, 3000);

      // move and collapse the application
    })["catch"](function (err) {
      console.error(err);
      button.innerHTML = btnText;
      button.removeAttribute('disabled');
    });
  };
});

/***/ }),

/***/ "./app/components/contract-received/index.js":
/*!***************************************************!*\
  !*** ./app/components/contract-received/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html.txt */ "./app/components/contract-received/index.html.txt");
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./app/components/contract-received/style.scss");



(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_1__.createCustomElement)('contract-received', function () {
  var _this = this;
  setTimeout(function () {
    // get all image elements
    var images = Array.from(_this.querySelectorAll('img'));
    console.log("images", images);
    images.forEach(function (image) {
      image.addEventListener('load', function () {
        var filePath = this.src;
        var regex = /\/o\/([^?]+)/;
        var fileName;
        var match = filePath.match(regex);
        if (match) {
          fileName = match[1];
        }
        var fileNameDiv = document.createElement('span');
        fileNameDiv.classList.add('file-name');
        fileNameDiv.innerText = fileName;
        var target = this.closest('div').querySelector('b');
        target.insertAdjacentHTML('beforeend', '<br>');
        target.insertAdjacentElement('beforeend', fileNameDiv);
      });
    });
  }, 0);
}, _index_html_txt__WEBPACK_IMPORTED_MODULE_0__["default"], '', {
  attributes: ['firstName', 'lastName', 'membershipPaid', 'scholarshipApplied', 'studioSharingAnswer', 'artisticDemonstration', 'artistStatement', 'artistTagline', 'businessEmail', 'facebook', 'instagram', 'mailingAddress', 'membershipPaid', 'personalEmail', 'phone', 'studioAddress', 'website', 'committeeRoles', 'artistInStudioImage', 'brochureImage', 'digitalImage1', 'digitalImage2', 'digitalImage3', 'signature', 'medium']
});

/***/ }),

/***/ "./app/components/dual-login-form/index.js":
/*!*************************************************!*\
  !*** ./app/components/dual-login-form/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html.txt */ "./app/components/dual-login-form/index.html.txt");
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./app/components/dual-login-form/style.scss");



var logIf = __webpack_require__(/*! ../../../utils/logIf.js */ "./utils/logIf.js");
(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_1__.createCustomElement)('dual-login-form-component', function () {
  setUXEventListeners.bind(this)();
}, _index_html_txt__WEBPACK_IMPORTED_MODULE_0__["default"], '', {
  attributes: ['loginImage', 'signupImage']
});
function setUXEventListeners() {
  // Change form from signup to login
  var dividerEl = this.querySelector('.os-dual-form');
  this.querySelectorAll('.toggleAuthType').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      dividerEl.getAttribute('auth-mode') === 'login' ? dividerEl.setAttribute('auth-mode', 'signup') : dividerEl.setAttribute('auth-mode', 'login');
      //  writeFriendlyMessage();
    });
  });

  // listener on reset password
  // this.querySelector('.reset-password').addEventListener('click', (e) => {
  //     e.preventDefault();
  //     const email = prompt('Enter your email address')
  //     if (email) {
  //         firebase.sendPasswordResetEmail(firebase.auth, email).then(() => {
  //             alert('Password reset email sent')
  //         }).catch(() => {
  //             alert('There was an error sending the password reset email')
  //         })
  //     }
  // })

  // JavaScript
  this.querySelector('.reset-password').addEventListener('click', function (e) {
    e.preventDefault();
    var modal = document.getElementById('reset-password-modal');
    modal.style.display = 'block';
  });
  document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById('reset-password-modal').style.display = 'none';
  });

  // Handle reset password
  document.getElementById('resetSubmit').addEventListener('click', function () {
    var email = document.getElementById('resetEmail').value;
    console.log({
      email: email
    });
    if (email) {
      firebase.sendPasswordResetEmail(firebase.auth, email).then(function () {
        var feedback = document.getElementById('reset-password-modal-feedback');
        console.log({
          feedback: feedback
        });

        // Update test to show success message
        feedback.innerHTML = "\n                    <div class=\"alert alert-success\" role=\"alert\">\n                        Password reset email sent\n                    </div>\n                    ";

        // Hide the modal after 3 seconds
        setTimeout(function () {
          document.getElementById('reset-password-modal').style.display = 'none';
          // remove the success message after 3 seconds
          document.getElementById('reset-password-modal-feedback').innerHTML = '';
        }, 3000);
      })["catch"](function () {
        alert('There was an error sending the password reset email');
      });
    }
  });
  // handle submit event for login form
  this.querySelector('form#login').addEventListener('submit', function (e) {
    e.preventDefault();
    var form = this;

    // get the button
    var btnSubmit = form.querySelector('button[type="submit"]');

    // get the button text
    var btnText = btnSubmit.innerText;
    // change the button text to loading
    btnSubmit.innerText = 'Loading...';
    // disable the button
    btnSubmit.disabled = true;
    var email = form.querySelector('input[id="email-login"]').value.trim();
    var password = form.querySelector('input[id="password-login"]').value.trim();
    return firebase.signInWithEmailAndPassword(firebase.auth, email, password).then(function (user) {
      // redirect to members
      logIf.auth && console.log('redirecting to members page');
      window.location.href = '/members';
    })["catch"](function (err) {
      // change the button text back to original
      btnSubmit.innerText = btnText;
      // enable the button
      btnSubmit.disabled = false;
      console.log("There was an error signing in to your account. ", {
        err: err
      });
      // show error message
      alert('There was an error signing in to your account. Please try again');
    });
  });

  // handle submit event for signup form
  this.querySelector('form#signup').addEventListener('submit', function (e) {
    e.preventDefault();
    var form = this;
    // get the button
    var btnSubmit = form.querySelector('button[type="submit"]');

    // get the button text
    var btnText = btnSubmit.innerText;
    // change the button text to loading
    btnSubmit.innerText = 'Loading...';
    // disable the button
    btnSubmit.disabled = true;
    var firstName = form.querySelector('input[id="firstName"]').value;
    var lastName = form.querySelector('input[id="lastName"]').value;
    var fullName = "".concat(firstName, " ").concat(lastName);
    var email = form.querySelector('input[id="email"]').value.trim();
    var password = form.querySelector('input[id="password"]').value.trim();
    var confirmPassword = form.querySelector('input[id="confirm-password"]').value.trim();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      btnSubmit.innerText = btnText;
      btnSubmit.disabled = false;
      return;
    }
    logIf.auth && console.log("about to create user with email and password", {
      email: email,
      password: password,
      auth: firebase.auth
    });
    return firebase.createUserWithEmailAndPassword(firebase.auth, email, password).then(function (result) {
      logIf.auth && console.log("result", result);
      return firebase.updateProfile(result.user, {
        displayName: fullName
      }).then(function () {
        logIf.auth && console.log("user profile updated");
        return result;
      });
    }).then(function (result) {
      // Update ghost-contracts/{userId} with user data
      firebase.setDoc(firebase.doc(firebase.collection(firebase.db, 'ghost-contracts'), result.user.uid), {
        userId: result.user.uid,
        artistDetails: {
          firstName: firstName,
          lastName: lastName,
          scholarshipApplied: false,
          membershipPaid: false
        },
        createdAt: firebase.serverTimestamp()
      }).then(function () {
        // redirect to members
        logIf.auth && console.log('redirecting to members page');
        window.location.href = '/members';
      });
    })["catch"](function (err) {
      // change the button text back to original
      btnSubmit.innerText = btnText;
      // enable the button
      btnSubmit.disabled = false;
      // show error message
      console.log('There was an error creating your account.', {
        err: err
      });
      alert('There was an error creating your account. Please try again');
    });
  });
}

/***/ }),

/***/ "./app/components/footer/index.js":
/*!****************************************!*\
  !*** ./app/components/footer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_html_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.html.txt */ "./app/components/footer/footer.html.txt");
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./app/components/footer/style.scss");



(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_1__.createCustomElement)('footer-component', function () {}, _footer_html_txt__WEBPACK_IMPORTED_MODULE_0__["default"], '');

/***/ }),

/***/ "./app/components/header/index.js":
/*!****************************************!*\
  !*** ./app/components/header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_html_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.html.txt */ "./app/components/header/header.html.txt");
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./app/components/header/style.scss");



(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_1__.createCustomElement)('header-component', function () {}, _header_html_txt__WEBPACK_IMPORTED_MODULE_0__["default"], '', {
  attributes: ['slotLinks']
});

/***/ }),

/***/ "./app/components/input/index.js":
/*!***************************************!*\
  !*** ./app/components/input/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveLabel: () => (/* binding */ moveLabel)
/* harmony export */ });
/* harmony import */ var _types_text_input_html_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/text-input.html.txt */ "./app/components/input/types/text-input.html.txt");
/* harmony import */ var _types_file_input_html_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/file-input.html.txt */ "./app/components/input/types/file-input.html.txt");
/* harmony import */ var _types_textarea_input_html_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/textarea-input.html.txt */ "./app/components/input/types/textarea-input.html.txt");
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./app/components/input/style.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var logIf = __webpack_require__(/*! ../../../utils/logIf.js */ "./utils/logIf.js");
var inputAttributes = ['waStateBusinessLicenseUbiNumber', 'subcaption', 'checked', 'placeholder', 'width', 'disabled',
// Why is this not working on the textarea?
'alias', 'labelClass', 'id', 'type', 'value', 'moveLabel', 'className', 'fieldName', 'required', 'multiple', 'accept', 'description', 'noTransform', 'fileName', 'instantUpload'];
(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_3__.createCustomElement)('input-component', function () {
  logIf.component && console.log('input-component loaded');
  // set slot

  if (!this.getAttribute('moveLabel')) {
    moveLabel.bind(this)();
  }
  if (this.getAttribute('type') === 'password') {
    setPasswordVisibilityListener.bind(this)();
  }
  function setPasswordVisibilityListener() {
    var _this = this;
    setTimeout(function () {
      // Ensure elements exist before adding event listeners
      var passwordToggles = _this.querySelectorAll('.password-toggle');
      if (passwordToggles.length > 0) {
        passwordToggles.forEach(function (el) {
          el.addEventListener('click', function (e) {
            var target = e.target;
            var label = target.closest('label');
            if (label) {
              var input = label.querySelector('input');
              var isShowingPassword = label.getAttribute('password-toggle') === 'hide';
              if (isShowingPassword) {
                input.type = 'text';
                label.setAttribute('password-toggle', 'show');
              } else {
                input.type = 'password';
                label.setAttribute('password-toggle', 'hide');
              }
            }
          });
        });
      } else {
        console.error('No elements with class "password-toggle" found.');
      }
    }, 100);
  }
}, _types_text_input_html_txt__WEBPACK_IMPORTED_MODULE_0__["default"], '', {
  attributes: inputAttributes
});
(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_3__.createCustomElement)('textarea-component', function () {
  moveLabel.bind(this)();

  // check for value
  var value = this.getAttribute('value');
  if (value) {
    this.querySelector('textarea').innerText = value;
  }

  // check for attribute 'disabled'
  var disabled = this.getAttribute('disabled');
  console.log({
    disabled: disabled
  });
  if (disabled) {
    this.querySelector('textarea').setAttribute('disabled', 'disabled');
  }
}, _types_textarea_input_html_txt__WEBPACK_IMPORTED_MODULE_2__["default"], '', {
  attributes: inputAttributes
});

/*
important note about using file-input-component
- When uploading the file, there may be an unexpected error needing to be handled

When catching error, use the query the html in the component to display an error.

*/

(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_3__.createCustomElement)('file-input-component', function () {
  var _this2 = this;
  var imagesContainer = this.querySelector('.images-container');
  var parentContainer = imagesContainer.closest('.file-input-component');
  var labelContainer = parentContainer.querySelector('.label-container');
  var isInstantUpload = this.getAttribute('instantUpload') == 'true';
  var component = this;
  this.setImage = function (src, file) {
    var fileNameEl = parentContainer.querySelector('.file-name');
    if (fileNameEl) {
      fileNameEl.remove();
    }
    var img = document.createElement('img');
    var rotateImageButton = document.createElement('button');
    var alertButton = document.createElement('i');
    alertButton.classList.add('fas', 'fa-exclamation-triangle', 'alert-icon');
    rotateImageButton.innerHTML = "Click here to replace image";
    rotateImageButton.classList.add('rotate-image-button');
    rotateImageButton.addEventListener('click', function (e) {
      img.remove();
      // rotateImageButton.remove()
      imagesContainer.classList.remove('has-images');
      parentContainer.querySelector('.file-name').remove();
      parentContainer.querySelectorAll('.error').forEach(function (error) {
        error.classList.remove('error');
        error.innerHTML = '';
      });
      // remove button from file input
      var fileInput = parentContainer.querySelector('input');
      fileInput.value = '';
      // empty .img-container

      // guarantee that the file input is required
      fileInput.setAttribute('required', 'required');

      // remove the error class
      parentContainer.classList.remove('hasError');

      // remove the exclamation icon
      var exclamations = parentContainer.querySelectorAll('.alert-icon');
      exclamations.forEach(function (exclamation) {
        return exclamation.remove();
      });

      // open the file input
      fileInput.click();

      // prevent bubbling event on delete image button
      e.stopPropagation();
      e.stopImmediatePropagation();
    });
    var imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.appendChild(img);
    parentContainer.appendChild(rotateImageButton);
    labelContainer.appendChild(alertButton);
    imagesContainer.appendChild(imgContainer);
    imagesContainer.classList.add('has-images');
    img.src = src;

    // Make sure the image fits within the container
    img.onload = function () {
      var width = img.width,
        height = img.height;
      if (width > height) {
        img.style.width = '100%';
        var aspectRatio = height / width;
        img.style.height = "".concat(aspectRatio * 100, "%");
        img.style.width = '100%';
      } else {
        img.style.height = '100%';
        var _aspectRatio = width / height;
        img.style.width = "".concat(_aspectRatio * 100, "%");
      }
    };
    img.style.display = 'block';
    img.style.margin = 'auto';

    // display the name of the file
    var fileName = document.createElement('p');
    fileName.textContent = file.name;
    fileName.classList.add('file-name');
    parentContainer.appendChild(fileName);

    // if there are no errors, display feedback

    return this;
  };
  this.querySelector('input').addEventListener('click', function (e) {
    // prevent bubbling event on delete image button
    if (e.target.classList.contains('rotate-image-button')) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  });

  // Set listeners to display images added to file input
  this.querySelector('input').addEventListener('change', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var savedImageFeedback, errorContainer, exclamations, deleteButtons, fileNameEl, imagesContainer, fileInput, fileInputUI;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // clear saved-image-feedback
            savedImageFeedback = component.querySelector('.saved-image-feedback');
            console.log("Input change", {
              savedImageFeedback: savedImageFeedback
            });
            if (savedImageFeedback) {
              savedImageFeedback.innerHTML = '';
            }

            // clear any errors
            errorContainer = document.querySelector("#".concat(_this2.getAttribute('fieldName'), "-error"));
            if (errorContainer) {
              errorContainer.innerHTML = '';
              // remove error class 
              errorContainer.classList.remove('error');
            }
            exclamations = parentContainer.querySelectorAll('.alert-icon');
            exclamations.forEach(function (exclamation) {
              return exclamation.remove();
            });

            // remove the clear button
            deleteButtons = parentContainer.querySelectorAll('.rotate-image-button');
            deleteButtons.forEach(function (button) {
              return button.remove();
            });

            // clear the name of the file displayed
            fileNameEl = parentContainer.querySelector('.file-name');
            if (fileNameEl) {
              parentContainer.querySelector('.file-name').remove();
            }

            // clear any previous images
            imagesContainer = _this2.querySelector('.img-container');
            if (imagesContainer) {
              imagesContainer.remove();
            }

            // let uniqueFileName = this.getAttribute('filename')
            // const userEmail = encodeURIComponent(firebase.auth.currentUser.email)
            // // evaluate fileNameTemplate
            // if (uniqueFileName) { 
            //   uniqueFileName = uniqueFileName.replace('{{userName}}', userEmail)
            // }
            // console.log({ uniqueFileName })

            // get the file input
            fileInput = e.target; // Disable the input while processing
            fileInput.disabled = true;
            // get the file input UI element
            fileInputUI = fileInput.closest('.file-input-component');
            fileInputUI.classList.add('loading');

            // Read the files
            Array.from(e.target.files).forEach(function (oldFile) {
              //  NOTE: The file name change doesn't really take effect here.... Only when saving...
              oldFile.nameTemplate = _this2.getAttribute('filename');

              // Create a new file with the updated name

              var reader = new FileReader();
              reader.onloadend = function () {
                _this2.setImage(reader.result, oldFile);
                _this2.querySelector('.file-input-component').classList.remove('hasError');

                // Display possible errors with this file
                // Requirements: Size must be no larger than 3 mb.
                // Must not be a thumbnail image.
                // One image must be a square

                logIf.component && console.log('file size check ', {
                  fileSize: oldFile.size,
                  fileName: oldFile.name,
                  fileType: oldFile.type
                });

                // Check if the file is a thumbnail image by checking the size (size must be greater than 20kB )
                if (oldFile.size < 400000) {
                  errorContainer.textContent = 'This image is too small. Please upload an image larger than 400 KB';
                  errorContainer.classList.add('error');
                  _this2.querySelector('.file-input-component').classList.add(
                  // set error class on container
                  'hasError');
                }
                // make sure the image isn't too big
                if (oldFile.size > 5000000) {
                  // 5 MB

                  errorContainer.textContent = 'File is too large. Please upload an image less than 5 mb.';
                  errorContainer.classList.add('error');
                  _this2.querySelector('.file-input-component').classList.add(
                  // set error class on container
                  'hasError');
                }

                // Get attribute "square" from component
                var squareRequirement = _this2.getAttribute('square-requirement');
                if (squareRequirement) {
                  // check for square size
                  var image = new Image();
                  image.src = reader.result;
                  image.onload = function () {
                    var width = image.width,
                      height = image.height;
                    logIf.component && console.log({
                      width: width,
                      height: height
                    });
                    var isWithinRange = function isWithinRange(value1, value2, range) {
                      // Roughly 10 percent of the range
                      var tenPercent = range * 0.1;
                      return value1 > value2 - tenPercent && value1 < value2 + tenPercent;
                    };
                    if (!isWithinRange(width, height, width)) {
                      errorContainer.textContent = 'Image is not square. Please upload a square image.';
                      errorContainer.classList.add('error');
                      _this2.querySelector('.file-input-component').classList.add(
                      // set error class on container
                      'hasError');
                    }
                  };
                }

                // Disable the input while processing
                fileInput.disabled = false;
                // get the file input UI element
                fileInputUI.classList.remove('loading');
                if (isInstantUpload) {
                  setTimeout(function () {
                    // check for error
                    if (_this2.querySelector('.file-input-component.hasError')) {
                      return;
                    }

                    // Save individual file to DB My contract
                    var file = oldFile;
                    var newFileWithTemplatedName = updateFileNameToTemplate(file);
                    console.log("Uploading file", {
                      oldFile: file,
                      newFileWithTemplatedName: newFileWithTemplatedName
                    });
                    handleIndividualImageUpload(newFileWithTemplatedName, _this2).then(function (url) {
                      var fieldName = _this2.getAttribute('fieldName');
                      saveIndividualImageToContract(url, fieldName, newFileWithTemplatedName.name);
                    });
                  }, 1);
                }
              };
              reader.readAsDataURL(oldFile);
            });
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}, _types_file_input_html_txt__WEBPACK_IMPORTED_MODULE_1__["default"], '', {
  attributes: inputAttributes
});
function moveLabel(element) {
  var target = this;
  if (element) {
    target = element;
  }
  target.querySelectorAll('input, textarea').forEach(function (el) {
    el.addEventListener('focus', function (e) {
      var target = e.target;
      target.closest('label').classList.add('moveLabel');
      target.closest('label').querySelector('[part]').setAttribute('part', 'labelText moveLabel');
    });
    el.addEventListener('blur', function (e) {
      var target = e.target;
      if (target.value === '') {
        if (noTransform !== 'true') {
          target.closest('label').classList.remove('moveLabel');
        }
        target.closest('label').querySelector('[part]').setAttribute('part', 'labelText');
      }
    });
    el.addEventListener('change', function (e) {
      var target = e.target;
      if (target.value === '') {
        target.closest('label').classList.remove('moveLabel');
        target.closest('label').querySelector('[part]').setAttribute('part', 'labelText');
      } else {
        target.closest('label').classList.add('moveLabel');
        target.closest('label').querySelector('[part]').setAttribute('part', 'labelText moveLabel');
      }
    });
  });
}

/***/ }),

/***/ "./app/components/markdown/index.js":
/*!******************************************!*\
  !*** ./app/components/markdown/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.esm.js");
/* harmony import */ var _index_html_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.html.txt */ "./app/components/markdown/index.html.txt");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./app/components/markdown/style.scss");




var logIf = __webpack_require__(/*! ../../../utils/logIf.js */ "./utils/logIf.js");
(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_0__.createCustomElement)('markdown-component', function () {
  // convert the inner markdown to html
  var markdown = this.querySelector('span[slot="markdown-content"]').innerHTML;
  logIf.component && console.log({
    marked: marked__WEBPACK_IMPORTED_MODULE_1__.marked,
    markdown: markdown,
    "this": this
  });
  // const html = marked(markdown);
  var html = marked__WEBPACK_IMPORTED_MODULE_1__.marked.parse("".concat(trimString(markdown)));
  this.innerHTML = html;
}, _index_html_txt__WEBPACK_IMPORTED_MODULE_2__["default"], "");
function trimString(a) {
  return a.split('\n').map(function (line) {
    return line.trim() + "   ";
  }).filter(function (line) {
    return Boolean(line);
  }).join('\n   ');
}

/***/ }),

/***/ "./app/components/scholarship-application/index.js":
/*!*********************************************************!*\
  !*** ./app/components/scholarship-application/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html.txt */ "./app/components/scholarship-application/index.html.txt");
/* harmony import */ var _utils_custom_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/custom-element */ "./utils/custom-element.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./app/components/scholarship-application/style.scss");



var logIf = __webpack_require__(/*! ../../../utils/logIf.js */ "./utils/logIf.js");
(0,_utils_custom_element__WEBPACK_IMPORTED_MODULE_1__.createCustomElement)('scholarship-application-component', function () {

  // Fot some reason whe nthe component is loaded via javascript, this call back doesnt fire.

  // events must be inline
}, _index_html_txt__WEBPACK_IMPORTED_MODULE_0__["default"], '', {
  attributes: ['createdAt', 'scholarshipGranted', 'hasBeenReviewed', 'approved', 'email', 'hasNotReceivedScholarshipPreviously', 'needForScholarship', 'fbId', 'name', 'disabled', 'firstName', 'lastName']
});
document.addEventListener('DOMContentLoaded', function () {
  window.updateScholarship = function (event, reviewAnswer) {
    logIf.component && console.log("updateScholarship", event);
    // update button to loading
    var button = event.target;
    var btnText = button.innerHTML;
    button.setAttribute('disabled', 'disabled');
    button.innerHTML = 'Loading...';

    // get the fbId
    var fbId = button.getAttribute('data-fb-id');
    CRUD.update('scholarship-applications', fbId, {
      hasBeenReviewed: true,
      scholarshipGranted: reviewAnswer
    }).then(function () {
      return CRUD.update('ghost-contracts', fbId, {
        artistDetails: {
          scholarshipApplied: reviewAnswer
        }
      });
    }).then(function () {
      // update the button text
      button.innerHTML = 'Review Submitted';
      setTimeout(function () {
        button.removeAttribute('disabled');
        button.innerHTML = btnText;

        // collapse the application
        var application = button.closest('.artist-application-review');
        application.classList.toggle('expanded');

        // update status text
        application.querySelector('.status').innerHTML = reviewAnswer ? 'Scholarship Granted' : 'Not Approved for Scholarship';

        // move to new spot?
      }, 3000);

      // move and collapse the application
    });
  };
});

/***/ }),

/***/ "./app/outbound-emails/approvedNewArtist.js":
/*!**************************************************!*\
  !*** ./app/outbound-emails/approvedNewArtist.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendApprovedNewArtistEmail: () => (/* binding */ sendApprovedNewArtistEmail)
/* harmony export */ });
/* harmony import */ var _getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEmailAddresses.js */ "./app/outbound-emails/getEmailAddresses.js");
/* harmony import */ var _sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendTestEmail.js */ "./app/outbound-emails/sendTestEmail.js");


function sendApprovedNewArtistEmail(newArtistEmail) {
  // no TESTING mode needed here

  console.log("Sending 'ApprovedNewArtistEmail' to " + newArtistEmail);
  window.sendMessageToParent({
    controller: 'gmailController',
    to: [_sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__.TESTING.approvedNewArtistEmail ? 'william.owen.dev@gmail.com' : newArtistEmail].filter(Boolean).join(','),
    subject: 'Your application to Gig Harbor Open Studio Tour was approved!',
    body: "\n         <div style=\"text-align:center; font-family:sans-serif;\">\n            <h1>Congratulations on behalf of the Gig Harbor Open Studio Tour!</h1>\n            <p>Your application to join the tour has been approved!</p>\n            <p>\n                <strong>The next step:</strong> Please fill out our online contract and submit your payment. You are not officially part of the tour until we receive both!\n            </p>\n            <p>\n                For the contract due date, check our website under the \u201CJoin\u201D button and look under FAQ's.<br>\n                Once accepted, you do not need to reapply, but <strong>you must submit an annual contract</strong>.\n            </p>\n            <fieldset style=\"width:fit-content; margin:auto; text-align:left;\">\n                <legend>How to Complete Your Contract & Payment</legend>\n                <ol>\n                    <li>Go to our website, Gig Harbor Open Studio Tour, and click the \"Members\" button.</li>\n                    <li>A password page will open. The password is <strong>openhand</strong> (write this down).</li>\n                    <li>On the login page, click \"Register New Account\" (pink button on the left). Enter your email and a password (save these).</li>\n                    <li>Access your Member page. Click \"My Contract\" on the left and fill out each section, saving as you go. You can exit and return later.</li>\n                    <li>Follow directions for uploading images (correct size and labeling required).</li>\n                    <li>Image saving may take a few minutes depending on your internet speed. Saved images will say \"Saved.\"</li>\n                    <li>Complete the payment section at the end of your contract. Once submitted, you'll receive a confirmation email.</li>\n                </ol>\n            </fieldset>\n            <p>\n                We hold three General Meetings each year: mid-March, mid-August, and early October.<br>\n                You'll receive email notifications (via MailChimp) about meetings and important info. Please check your spam or other folders if you don't see these emails.\n            </p>\n            <p>\n                If you have any questions, call or email me:<br>\n                Phone: 253-514-1865<br>\n                Email: <a href=\"mailto:ghopenstudiotour@gmail.com\">ghopenstudiotour@gmail.com</a>\n            </p>\n            <p>Thank you,<br>Beth Owen, President of GHOST (Gig Harbor Open Studio Tour)</p>\n        </div>\n        "
  });
}

/***/ }),

/***/ "./app/outbound-emails/getEmailAddresses.js":
/*!**************************************************!*\
  !*** ./app/outbound-emails/getEmailAddresses.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEmailAddresses: () => (/* binding */ getEmailAddresses)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function getEmailAddresses() {
  return _getEmailAddresses.apply(this, arguments);
}
function _getEmailAddresses() {
  _getEmailAddresses = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var options,
      committees,
      roles,
      committeeRoles,
      ghostContracts,
      roleIds,
      membersToEmail,
      emails,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {
            committees: [],
            roles: []
          };
          // Get all the emails listed in the committees and roles
          committees = options.committees, roles = options.roles;
          _context.next = 4;
          return CRUD.readAll('committee-roles').then(function (roles) {
            return roles.reduce(function (acc, next) {
              acc[next.fbId] = next;
              return acc;
            }, {});
          });
        case 4:
          committeeRoles = _context.sent;
          _context.next = 7;
          return CRUD.readAll('ghost-contracts').then(function (contracts) {
            return contracts.sort(function (a, b) {
              return Number(a.fbId) - Number(b.fbId);
            });
          });
        case 7:
          ghostContracts = _context.sent;
          // combine ghostContracts and committeeRoles at committeeRoles[key].members = []
          ghostContracts.forEach(function (contract) {
            if (contract.committeeRoleId) {
              contract.committeeRoleId.forEach(function (roleId) {
                if (committeeRoles[roleId]) {
                  if (!committeeRoles[roleId].members) {
                    committeeRoles[roleId].members = [];
                  }
                  // console.log({ roleId, contract })
                  committeeRoles[roleId].members.push(contract);
                }
              });
            }
          });

          // console.log({ committeeRoles, ghostContracts, committees, roles })

          // get all the ids of the roles that are in the committees
          roleIds = Object.entries(committeeRoles).filter(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              role = _ref2[1];
            return committees == role.committee;
          }).map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
              key = _ref4[0];
            return key;
          }); // combine roleIds and roles (passed in)
          roles = roles.concat(roleIds);

          // convert role to set
          roles = _toConsumableArray(new Set(roles));

          // convert roles to members 
          membersToEmail = roles.map(function (roleId) {
            return committeeRoles[roleId].members;
          }).flat(); // console.log({ membersToEmail })
          // get all the emails of the contracts that have the role ids
          emails = membersToEmail.map(function (contract) {
            if (!contract.artistDetails) return;
            return contract.artistDetails.personalEmail || contract.artistDetails.businessEmail;
          }).filter(Boolean);
          emails = _toConsumableArray(new Set(emails));

          // console.log({ roles, options, committeeRoles, roleIds, ghostContracts })
          return _context.abrupt("return", emails);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getEmailAddresses.apply(this, arguments);
}

/***/ }),

/***/ "./app/outbound-emails/newApplicationReceived.js":
/*!*******************************************************!*\
  !*** ./app/outbound-emails/newApplicationReceived.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendNewApplicationEmail: () => (/* binding */ sendNewApplicationEmail)
/* harmony export */ });
/* harmony import */ var _getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEmailAddresses.js */ "./app/outbound-emails/getEmailAddresses.js");
/* harmony import */ var _sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendTestEmail.js */ "./app/outbound-emails/sendTestEmail.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function sendNewApplicationEmail(_x) {
  return _sendNewApplicationEmail.apply(this, arguments);
}
function _sendNewApplicationEmail() {
  _sendNewApplicationEmail = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newArtist) {
    var newApplicationEventId, specialTimelineEvent, date, _specialTimelineEvent, _specialTimelineEvent2, year, month, day, emailAddresses;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // get all board members
          // plus new artist applications chair
          // new artist recruitment chair
          newApplicationEventId = '1Iig2hZFN7MgyFUpjG0q'; // A timeline event id for some date in the future
          _context.next = 3;
          return CRUD.read('ghost-timeline', newApplicationEventId);
        case 3:
          specialTimelineEvent = _context.sent;
          if (typeof specialTimelineEvent.date === 'string') {
            _specialTimelineEvent = specialTimelineEvent.date.split('-'), _specialTimelineEvent2 = _slicedToArray(_specialTimelineEvent, 3), year = _specialTimelineEvent2[0], month = _specialTimelineEvent2[1], day = _specialTimelineEvent2[2];
            date = new Date(year, month - 1, day);
            date = date.toLocaleDateString('en-us', {
              month: 'long',
              day: 'numeric'
            });
          } else {
            date = specialTimelineEvent.date.toDate().toLocaleDateString('en-us', {
              month: 'long',
              day: 'numeric'
            });
          }
          _context.next = 7;
          return (0,_getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__.getEmailAddresses)({
            roles: ["17", "15"],
            // artist applications chair, new artist recruitment chair
            committees: ['Board']
          }).then(function (emails) {
            return emails.join(',') + ',' + newArtist.email;
          });
        case 7:
          emailAddresses = _context.sent;
          if (_sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__.TESTING.newApplication) console.log("Would send email to", emailAddresses);
          window.sendMessageToParent({
            controller: 'gmailController',
            // every one on board, new artist applications chair, new artist recruitment chair and the person who applied
            to: _sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__.TESTING.newApplication ? 'william.owen.dev@gmail.com' : emailAddresses,
            subject: "GHOST New Artist Application sent from ".concat(newArtist.firstName, " ").concat(newArtist.lastName),
            body: "\n         <div style=\"text-align:center\">\n          <h1>A GHOST New Artist Application has been submitted!</h1>\n            <p>\n            The committee will be reviewing the application from <b>".concat(newArtist.firstName, " ").concat(newArtist.lastName, "</b>.<br>\n            The new artist applicant will receive a notification once the application has been reviewed. \n            </p>\n            <p>Application must be received no later than ").concat(date, ".\n            </p>\n\n\n            <p>Thank you for your membership.</p>\n            <p>Best Regards, <br>Gig Harbor Open Studio Tour</p>\n\n\n\n        </div>\n          ")
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _sendNewApplicationEmail.apply(this, arguments);
}

/***/ }),

/***/ "./app/outbound-emails/newContractSubmission.js":
/*!******************************************************!*\
  !*** ./app/outbound-emails/newContractSubmission.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendNewContractSubmissionBoardEmail: () => (/* binding */ sendNewContractSubmissionBoardEmail),
/* harmony export */   sendNewContractSubmissionEmail: () => (/* binding */ sendNewContractSubmissionEmail)
/* harmony export */ });
/* harmony import */ var _getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEmailAddresses.js */ "./app/outbound-emails/getEmailAddresses.js");
/* harmony import */ var _sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendTestEmail.js */ "./app/outbound-emails/sendTestEmail.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// import roles from "../my-contract/committee-roles.js"; // <--special import (see the server file)


function sendNewContractSubmissionEmail(user, transaction) {
  var personalEmail = user.artistDetails.personalEmail || "";
  var businessEmail = user.artistDetails.businessEmail || "";
  var email = firebase.auth.currentUser.email;

  // no TESTING mode needed here

  window.sendMessageToParent({
    controller: 'gmailController',
    to: [email, personalEmail, businessEmail].filter(Boolean).join(','),
    subject: 'GHOST Contract Invoice',
    body: "\n       <div style=\"text-align:center\">\n        <h1>Congratulations on joining the Gig Harbor Open Studio Tour</h1>\n        <p>Here is your invoice for the membership fee. \n        <br> Your contract has been submitted. \n        <br> You will be able to make changes to the contract up until March 2nd, 2025\n         </p>\n      \n        <fieldset style=\"width:fit-content; margin:auto;\">\n        \n        <legend>Invoice</legend>\n        \n        <p style=\"margin:0; text-align:start;\">Transaction ID: ".concat(transaction.id, "</p>\n        <p style=\"margin:0; text-align:start;\">Amount: ").concat(transaction.amount.value, "</p>\n        <p style=\"margin:0; text-align:start;\">Currency: ").concat(transaction.amount.currency_code, "</p>\n        <p style=\"margin:0; text-align:start;\">Status: ").concat(transaction.status, "</p>\n        <p style=\"margin:0; text-align:start;\">Created At: ").concat(new Date().toLocaleString(), "</p>\n        </fieldset>\n\n        <p>Thank you for your membership payment.</p>\n         <p>Best Regards, <br>Gig Harbor Open Studio Tour</p>\n      </div>\n        ")
  });
}
function sendNewContractSubmissionBoardEmail(_x, _x2) {
  return _sendNewContractSubmissionBoardEmail.apply(this, arguments);
}
function _sendNewContractSubmissionBoardEmail() {
  _sendNewContractSubmissionBoardEmail = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(user, transaction) {
    var contracts, email, roles, newArtist, emailAddresses;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return CRUD.readAll('ghost-contracts');
        case 2:
          contracts = _context.sent;
          email = user.artistDetails.personalEmail || user.artistDetails.businessEmail || firebase.auth.currentUser.email;
          _context.next = 6;
          return CRUD.readAll('committee-roles').then(function (roles) {
            return roles.reduce(function (acc, next) {
              acc[next.fbId] = next;
              return acc;
            }, {});
          });
        case 6:
          roles = _context.sent;
          console.log("sendNewContractSubmissionBoardEmail", {
            roles: roles
          });
          newArtist = {
            name: "".concat(user.artistDetails.firstName, " ").concat(user.artistDetails.lastName),
            email: email
          };
          _context.next = 11;
          return (0,_getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__.getEmailAddresses)({
            roles: ["12"],
            // artist images chair
            committees: ['Board']
          }).then(function (emails) {
            return emails.join(',');
          });
        case 11:
          emailAddresses = _context.sent;
          if (_sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__.TESTING.newContract) console.log("Would send email to", emailAddresses);
          window.sendMessageToParent({
            controller: 'gmailController',
            // To all the board member and artist images chair emails
            // to: welcomeEmailAddress,
            to: _sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__.TESTING.newContract ? 'william.owen.dev@gmail.com' : emailAddresses,
            subject: "GHOST Contract Payment Submitted by ".concat(newArtist.name),
            body: "\n         <div style=\"text-align:center\">\n          <h1>The Gig Harbor Open Studio Tour is Growing</h1>\n          <p>".concat(newArtist.name, " has submitted their membership payment.\n          <br> Reach out to them to welcome them to the tour.\n          <br> You can reach them at ").concat(newArtist.email, "\n           </p>\n        \n          <fieldset style=\"width:fit-content; margin:auto;\">\n          \n          <legend>Invoice</legend>\n          \n          <p style=\"margin:0; text-align:start;\">Transaction ID: ").concat(transaction.id, "</p>\n          <p style=\"margin:0; text-align:start;\">Amount: ").concat(transaction.amount.value, "</p>\n          <p style=\"margin:0; text-align:start;\">Currency: ").concat(transaction.amount.currency_code, "</p>\n          <p style=\"margin:0; text-align:start;\">Status: ").concat(transaction.status, "</p>\n          <p style=\"margin:0; text-align:start;\">Created At: ").concat(new Date().toLocaleString(), "</p>\n          </fieldset>\n\n          <p>Thank you for your membership.</p>\n           <p>Best Regards, <br>Gig Harbor Open Studio Tour</p>\n        </div>\n          ")
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _sendNewContractSubmissionBoardEmail.apply(this, arguments);
}

/***/ }),

/***/ "./app/outbound-emails/newScholarshipApplicant.js":
/*!********************************************************!*\
  !*** ./app/outbound-emails/newScholarshipApplicant.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendNewScholarshipEmail: () => (/* binding */ sendNewScholarshipEmail)
/* harmony export */ });
/* harmony import */ var _getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEmailAddresses.js */ "./app/outbound-emails/getEmailAddresses.js");
/* harmony import */ var _sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendTestEmail.js */ "./app/outbound-emails/sendTestEmail.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function sendNewScholarshipEmail(_x) {
  return _sendNewScholarshipEmail.apply(this, arguments);
}
function _sendNewScholarshipEmail() {
  _sendNewScholarshipEmail = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(user) {
    var artistName, newScholarshipEventId, specialTimelineEvent, date, _specialTimelineEvent, _specialTimelineEvent2, year, month, day, emailAddresses;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          artistName = user.name; // get all board members
          // plus new artist applications chair
          // new artist recruitment chair
          newScholarshipEventId = 'aQJKYbbkaNgK3sef3rIp'; // A timeline event id for some date in the future
          _context.next = 4;
          return CRUD.read('ghost-timeline', newScholarshipEventId);
        case 4:
          specialTimelineEvent = _context.sent;
          if (typeof specialTimelineEvent.date === 'string') {
            // parse date
            _specialTimelineEvent = specialTimelineEvent.date.split('-'), _specialTimelineEvent2 = _slicedToArray(_specialTimelineEvent, 3), year = _specialTimelineEvent2[0], month = _specialTimelineEvent2[1], day = _specialTimelineEvent2[2];
            date = new Date(year, month - 1, day);
            date = date.toLocaleDateString('en-us', {
              month: 'long',
              day: 'numeric'
            });
          } else {
            date = specialTimelineEvent.date.toDate().toLocaleDateString('en-us', {
              month: 'long',
              day: 'numeric'
            });
          }
          _context.next = 8;
          return (0,_getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__.getEmailAddresses)({
            roles: ["24", "15"],
            // new applications chair, new recruitment chair
            committees: ['Board']
          }).then(function (emails) {
            return emails.join(',') + ',' + user.email;
          });
        case 8:
          emailAddresses = _context.sent;
          if (_sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__.TESTING.newScholarship) console.log("Would send email to: ", emailAddresses);
          window.sendMessageToParent({
            controller: 'gmailController',
            to: _sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__.TESTING.newScholarship ? 'william.owen.dev@gmail.com' : emailAddresses,
            // every one on board, new artist applications chair, new artist recruitment chair and the person who applied
            //   to: ""
            subject: "GHOST New scholarship Application sent from ".concat(artistName),
            body: "\n         <div style=\"text-align:center\">\n          <h1>A GHOST New scholarship Application has been submitted!</h1>\n            <p>\n            The committee will be reviewing the application from <b>".concat(artistName, "</b>.<br>\n            The new artist applicant will receive a notification once the application has been reviewed. \n            </p>\n            <p>The scholarship must be received no later than ").concat(date, ".\n            </p>\n\n\n            <p>Thank you for your membership.</p>\n            <p>Best Regards, <br>Gig Harbor Open Studio Tour</p>\n        </div>\n          ")
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _sendNewScholarshipEmail.apply(this, arguments);
}

/***/ }),

/***/ "./app/outbound-emails/notApprovedNewArtist.js":
/*!*****************************************************!*\
  !*** ./app/outbound-emails/notApprovedNewArtist.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendNotApprovedNewArtistEmail: () => (/* binding */ sendNotApprovedNewArtistEmail)
/* harmony export */ });
/* harmony import */ var _getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEmailAddresses.js */ "./app/outbound-emails/getEmailAddresses.js");
/* harmony import */ var _sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendTestEmail.js */ "./app/outbound-emails/sendTestEmail.js");


function sendNotApprovedNewArtistEmail(newArtistEmail) {
  // no TESTING mode needed here

  console.log("Sending 'NotApprovedNewArtistEmail' to " + newArtistEmail);
  window.sendMessageToParent({
    controller: 'gmailController',
    to: [_sendTestEmail_js__WEBPACK_IMPORTED_MODULE_1__.TESTING.notApprovedNewArtistEmail ? 'william.owen.dev@gmail.com' : newArtistEmail].filter(Boolean).join(','),
    subject: 'Sorry, your application to Gig Harbor Open Studio Tour was not approved',
    body: "\n          <div style=\"text-align:center; font-family:sans-serif;\">\n          <h1>Thank you for your application to the Gig Harbor Open Studio Tour</h1>\n          <p style=\"max-width:575px; margin:auto\">\n            I am sorry to inform you that, at this time, your application to join the Gig Harbor Open Studio Tour has been declined because it does not meet our artistic standards for professional work. <br> If you would like any feedback about our decision, please contact me at <a href=\"mailto:degoede@aol.com\">degoede@aol.com</a>.\n          </p>\n          <p>\n            We appreciate your interest and would encourage you to continue to work on your art and to reapply in future years.\n          </p>\n          <p>\n            Thank you,<br>\n            Andrew Van DeGoede,<br>\n            Screening Chair of GHOST (Gig Harbor Open Studio Tour)\n          </p>\n        </div>\n        "
  });
}

/***/ }),

/***/ "./app/outbound-emails/sendTestEmail.js":
/*!**********************************************!*\
  !*** ./app/outbound-emails/sendTestEmail.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TESTING: () => (/* binding */ TESTING),
/* harmony export */   sendTestEmail: () => (/* binding */ sendTestEmail)
/* harmony export */ });
/* harmony import */ var _getEmailAddresses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEmailAddresses.js */ "./app/outbound-emails/getEmailAddresses.js");
/* harmony import */ var _newApplicationReceived_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newApplicationReceived.js */ "./app/outbound-emails/newApplicationReceived.js");
/* harmony import */ var _newContractSubmission_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newContractSubmission.js */ "./app/outbound-emails/newContractSubmission.js");
/* harmony import */ var _newScholarshipApplicant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newScholarshipApplicant.js */ "./app/outbound-emails/newScholarshipApplicant.js");
/* harmony import */ var _notApprovedNewArtist_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notApprovedNewArtist.js */ "./app/outbound-emails/notApprovedNewArtist.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var TESTING = {
  newApplication: false,
  newScholarship: false,
  newContract: false,
  approvedNewArtistEmail: false
};
function sendTestEmail() {
  return _sendTestEmail.apply(this, arguments);
}
function _sendTestEmail() {
  _sendTestEmail = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var user, transaction;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // TEST #1: send email to the artist
          user = {
            artistDetails: {
              firstName: 'William',
              lastName: 'Owen',
              email: 'william.owen.dev@gmail.com'
            }
          };
          transaction = {
            id: '12345',
            amount: {
              value: 100,
              currency_code: 'USD'
            },
            status: 'Completed'
          }; // sendNewContractSubmissionEmail(user, transaction)
          // 
          // // TEST #2: send email to the board members
          // sendNewContractSubmissionBoardEmail(user, transaction)
          (0,_notApprovedNewArtist_js__WEBPACK_IMPORTED_MODULE_4__.sendNotApprovedNewArtistEmail)(user.artistDetails.email);

          // sendNewScholarshipEmail({
          //     name: 'William Owen',
          //     email: 'william.owen.dev@gmail.com'
          // })
          // sendNewApplicationEmail({
          //     firstName: 'William',
          //     lastName: 'Owen',
          //     email: 'william.owen.dev@gmail.com'
          // })

          // getEmailAddresses({
          //     roles: ["12"], // artist images chair
          //     committees: ['Board'],
          // }).then(emails => {
          //     console.log("would send emails to",{emails})
          // })

          // getEmailAddresses({  
          //     roles: ["24", "15"], // new applications chair, new recruitment chair
          //     committees: ['Board'],
          //  }).then(emails => emails.join(', ')).then(emails => {
          //     console.log("would send email to: ", emails)
          //  })
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _sendTestEmail.apply(this, arguments);
}

/***/ }),

/***/ "./utils/custom-element.js":
/*!*********************************!*\
  !*** ./utils/custom-element.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCustomElement: () => (/* binding */ createCustomElement),
/* harmony export */   evaluateTemplate: () => (/* binding */ evaluateTemplate)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function createCustomElement(_x, _x2, _x3, _x4) {
  return _createCustomElement.apply(this, arguments);
}
function _createCustomElement() {
  _createCustomElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(name, onload, html, css) {
    var options,
      template,
      customElementType,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 4 && _args[4] !== undefined ? _args[4] : {
            attributes: []
          };
          // create an HTML template element
          template = document.createElement('template');
          template.innerHTML = "\n        <style>\n            ".concat(css, "\n        </style>\n        ").concat(html, "\n    ");
          customElementType = /*#__PURE__*/function (_HTMLElement) {
            function customElementType() {
              var _this;
              _classCallCheck(this, customElementType);
              _this = _callSuper(this, customElementType);
              if (_this.innerHTML) {
                _this.innerHTML = template.content.cloneNode(true).outerHTML;
              }
              return _this;
            }
            _inherits(customElementType, _HTMLElement);
            return _createClass(customElementType, [{
              key: "connectedCallback",
              value: function connectedCallback() {
                // console.log('connectedCallback');
                if (options.afterDomLoaded) {
                  onload.bind(this);
                } else {
                  document.addEventListener('DOMContentLoaded', onload.bind(this));
                }
                this.updateTemplate();
              }

              // You can call this if rendering the element after the DOM has loaded
            }, {
              key: "init",
              value: function init() {
                onload.bind(this)();
                this.updateTemplate();
              }
            }, {
              key: "updateTemplate",
              value: function updateTemplate() {
                var _this2 = this;
                // The random Id is to avoid conflicts with other instances of the same component
                // in the same page (if you use the id attribute in a component.)
                var randomId = Math.floor(Math.random() * 1000000);

                // Get all the attributes of the custom element and pass them to the template
                var context = _objectSpread(_objectSpread({}, options.attributes.reduce(function (acc, attr) {
                  acc[attr] = _this2.getAttribute(attr) || '';
                  return acc;
                }, {})), {}, {
                  randomId: randomId
                });
                var evaluatedTemplate = evaluateTemplate(html, context, name);
                this.innerHTML = "\n                <style>\n                ".concat(css, "\n                </style>\n                ").concat(evaluatedTemplate, "\n                ");
              }
            }]);
          }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
          customElements.define(name, customElementType);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _createCustomElement.apply(this, arguments);
}
function evaluateTemplate(template, context) {
  // console.log({ template, context });
  return _construct(Function, _toConsumableArray(Object.keys(context)).concat(["return `".concat(template, "`;")])).apply(void 0, _toConsumableArray(Object.values(context)));
}

/***/ }),

/***/ "./utils/logIf.js":
/*!************************!*\
  !*** ./utils/logIf.js ***!
  \************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * This module is used to control the logging of different parts of the application.
 * 
 * Because the application is a full-stack application, it can be difficult to debug the application
 * because the logs from the server and the client are mixed together.
 * 
 * Backend JS and Client js use different import styles, so we need to use a special export style to make this module work in both environments.
 * 
 * in files you'll see code like this:
 * const logIf = require('../../../utils/logIf.js'); <--- this is a node.js import
 * import '../../../utils/logIf.js'; <--- this is a client import and binds logIf to the window object
 * 
 */

var logIf = {
  server: false,
  client: false,
  archive: false,
  paypal: false,
  auth: false,
  component: false,
  crud: false,
  memberSidePanel: false
};

/**
 * This is a special way to export the module, it will work in both Node.js and the browser.
 */
if ( true && typeof module.exports !== 'undefined') {
  module.exports = logIf;
} else {
  // ES6 export
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return logIf;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/application/style.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/application/style.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.artist-application-review .app-contents {
  display: none;
}
.artist-application-review .app-contents, .artist-application-review .app-preview {
  padding: 10px;
  margin: 10px;
}
.artist-application-review .app-preview {
  top: 0;
  background-color: white;
  position: sticky;
  z-index: 10;
}
.artist-application-review .expandApplication.hide {
  display: none;
}
.artist-application-review.expanded {
  border: 1px solid black;
}
.artist-application-review.expanded .expandApplication.hide {
  display: block;
}
.artist-application-review.expanded .expandApplication.show {
  display: none;
}
.artist-application-review.expanded .app-contents {
  display: block;
}
.artist-application-review .app-preview {
  display: flex;
  justify-content: space-between;
}
.artist-application-review .app-preview button {
  height: fit-content;
}`, "",{"version":3,"sources":["webpack://./app/components/application/style.scss"],"names":[],"mappings":"AACI;EACI,aAAA;AAAR;AAEI;EACI,aAAA;EACA,YAAA;AAAR;AAEI;EACI,MAAA;EACA,uBAAA;EACA,gBAAA;EACA,WAAA;AAAR;AAGI;EACI,aAAA;AADR;AAII;EACI,uBAAA;AAFR;AAMY;EACI,cAAA;AAJhB;AAMY;EACI,aAAA;AAJhB;AASQ;EACI,cAAA;AAPZ;AAYI;EACI,aAAA;EACA,8BAAA;AAVR;AAYQ;EACI,mBAAA;AAVZ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/contract-received/style.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/contract-received/style.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.contract-received {
  position: relative;
}
.contract-received .preview {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  background: white;
  z-index: 100;
  top: 0;
}
.contract-received .preview .user-name {
  font-weight: bold;
}
.contract-received .content {
  display: none;
  padding: 10px;
}
.contract-received .content div {
  margin-bottom: 10px;
  white-space: pre-wrap;
}
.contract-received.reveal {
  border: 1px solid black;
}
.contract-received.reveal .content {
  display: block;
}
.contract-received .level-1 {
  padding-left: 50px;
}

.file-name {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./app/components/contract-received/style.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;AACI;EACI,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,MAAA;AACR;AAAQ;EACI,iBAAA;AAEZ;AAGI;EACI,aAAA;EACA,aAAA;AADR;AAEQ;EACI,mBAAA;EACA,qBAAA;AAAZ;AAGI;EACI,uBAAA;AADR;AAEQ;EACI,cAAA;AAAZ;AAII;EACI,kBAAA;AAFR;;AAMA;EAII,kBAAA;AANJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/dual-login-form/global.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/dual-login-form/global.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media only screen and (max-width: 767px) {
  .os-dual-form {
    margin-top: 22px;
    width: 100% !important;
    flex-direction: column;
  }
  .os-dual-form .row {
    flex-wrap: nowrap;
  }
  .os-dual-form[auth-mode=signup] .right {
    display: none;
  }
  .os-dual-form[auth-mode=signup] form#login {
    display: none;
  }
  .os-dual-form[auth-mode=login] .left {
    display: none;
  }
  .os-dual-form[auth-mode=login] form#signup {
    display: none;
  }
  .os-dual-form .cover {
    display: none;
  }
  .os-dual-form form {
    width: 100%;
    height: 80vh;
  }
  .os-dual-form form label {
    margin-top: 10px;
  }
  .mobile-view {
    display: block !important;
  }
  .password-strength {
    width: 91% !important;
  }
}`, "",{"version":3,"sources":["webpack://./app/components/dual-login-form/global.scss"],"names":[],"mappings":"AACA;EAEI;IACI,gBAAA;IACA,sBAAA;IACA,sBAAA;EADN;EAEK;IACC,iBAAA;EAAN;EAIU;IACI,aAAA;EAFd;EAIU;IACI,aAAA;EAFd;EAOU;IACI,aAAA;EALd;EAOU;IACI,aAAA;EALd;EASM;IACI,aAAA;EAPV;EAUM;IACI,WAAA;IACA,YAAA;EARV;EASU;IACI,gBAAA;EAPd;EAmBE;IACI,yBAAA;EAjBN;EAoBE;IACI,qBAAA;EAlBN;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/dual-login-form/style.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/dual-login-form/style.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h1 {
  text-align: center;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
}

.os-dual-form {
  /* Todo- Expose this class (with correct styles) */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  max-height: 455px;
  display: flex;
  justify-content: space-around;
  width: 800px;
  margin: auto;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  margin-top: 50px;
}
.os-dual-form form:not(#reCAPTCHAForm) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 400px;
}
.os-dual-form .cover {
  z-index: 1;
  width: 400px;
  height: 100%;
  position: absolute;
  background-color: lightgray;
  background-size: cover;
  transition: left 0.5s, translate 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  box-sizing: border-box;
  text-align: center;
}
.os-dual-form .cover.left {
  left: 0%;
}
.os-dual-form .cover.right {
  left: 100%;
  translate: -100% 0;
}
.os-dual-form label {
  font-size: 1.2rem;
  position: relative;
  margin-bottom: 5px;
  margin-top: 5px;
  display: inline-block;
}
.os-dual-form label .text {
  position: absolute;
  z-index: 1;
  transition: all 0.5s;
  transform: translate(8px, 14px);
  user-select: none;
  cursor: text;
}
.os-dual-form label.moveLabel .text {
  transform: translate(0px, -7px);
  font-size: 0.75rem;
  font-weight: bold;
}
.os-dual-form label .password-container {
  position: relative;
}
.os-dual-form label .password-container .password-toggle {
  width: 24px;
  position: absolute;
  top: 27px;
  translate: -100% -50%;
  right: 0;
  scale: 0.8;
  cursor: pointer;
  font-size: 12px;
}
.os-dual-form label .static-label-text {
  font-size: 0.75rem;
  white-space: nowrap;
  margin-top: 4px;
}
.os-dual-form label[for=remember-me] {
  translate: -44px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.os-dual-form label[for=remember-me] input {
  scale: 1.3;
  translate: 5px -5px;
  transform-origin: top left;
  cursor: pointer;
}
.os-dual-form label input {
  width: 100%;
  margin: 10px 0 0 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.os-dual-form label .hide-password {
  display: none;
}
.os-dual-form label .show-password {
  display: block;
}
.os-dual-form label[password-toggle=show] .hide-password {
  display: block;
}
.os-dual-form label[password-toggle=show] .show-password {
  display: none;
}
.os-dual-form label .error-message {
  font-size: 0.8rem;
  user-select: none;
  z-index: 1;
  line-height: 12px;
}

div[auth-mode=login] .cover.right {
  translate: 0;
}

div[auth-mode=signup] .cover.left {
  translate: -100%;
}

.mobile-view {
  display: none;
}

button {
  cursor: pointer;
  margin-inline: 5px;
}

.row {
  display: flex;
  justify-content: center;
}
.mobile-view {
  display: none;
}

.submitBtnsContainer {
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./app/components/dual-login-form/style.scss"],"names":[],"mappings":"AAMA;EACI,kBAAA;AALJ;;AAgBA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,8BAAA;AAbJ;;AAgBA;EACI,kDAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,6BAAA;EACA,YAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;AAbJ;AAeI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;AAbR;AAgBI;EACI,UAAA;EACA,YAAA;EAEA,YAAA;EACA,kBAAA;EACA,2BAAA;EACA,sBAAA;EACA,qCAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;AAfR;AAiBQ;EACI,QAAA;AAfZ;AAqBQ;EACI,UAAA;EACA,kBAAA;AAnBZ;AA4BI;EACI,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;AA1BR;AA4BQ;EACI,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,+BAAA;EACA,iBAAA;EACA,YAAA;AA1BZ;AA8BY;EACI,+BAAA;EACA,kBAAA;EACA,iBAAA;AA5BhB;AAgCQ;EACI,kBAAA;AA9BZ;AAiCY;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,qBAAA;EACA,QAAA;EACA,UAAA;EACA,eAAA;EACA,eAAA;AA/BhB;AAmCQ;EACI,kBAAA;EACA,mBAAA;EACA,eAAA;AAjCZ;AAoCQ;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAlCZ;AAoCY;EACI,UAAA;EACA,mBAAA;EACA,0BAAA;EACA,eAAA;AAlChB;AAsCQ;EACI,WAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;AApCZ;AAuCQ;EACI,aAAA;AArCZ;AAwCQ;EACI,cAAA;AAtCZ;AA0CY;EACI,cAAA;AAxChB;AA2CY;EACI,aAAA;AAzChB;AA6CQ;EACI,iBAAA;EACA,iBAAA;EACA,UAAA;EACA,iBAAA;AA3CZ;;AA4DI;EACI,YAAA;AAzDR;;AA8DI;EACI,gBAAA;AA3DR;;AAgEA;EACI,aAAA;AA7DJ;;AAuEA;EACI,eAAA;EACA,kBAAA;AApEJ;;AAuEA;EAEI,aAAA;EACA,uBAAA;AArEJ;AA0TA;EACI,aAAA;AAxTJ;;AA2TA;EACI,mBAAA;AAxTJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/footer/style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/footer/style.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `footer {
  margin: 100px 0 20px;
  display: flex;
  justify-content: center;
}
footer a {
  margin: 10px;
}
footer img {
  width: 100px;
  height: 100px;
  margin-left: 20px;
}
footer #footer-logo {
  display: flex;
  align-items: center;
  text-align: center;
}
footer #footer-logo h1 {
  margin: 0;
}
footer #footer-logo small {
  margin: 0;
}
footer nav#links {
  display: flex;
}
footer nav#links a {
  margin: 10px;
}`, "",{"version":3,"sources":["webpack://./app/components/footer/style.scss"],"names":[],"mappings":"AAAA;EACI,oBAAA;EACA,aAAA;EACA,uBAAA;AACJ;AAEI;EACI,YAAA;AAAR;AAEI;EACI,YAAA;EACA,aAAA;EACA,iBAAA;AAAR;AAEI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;AAAR;AACQ;EACI,SAAA;AACZ;AACQ;EACI,SAAA;AACZ;AAEI;EACI,aAAA;AAAR;AACQ;EACI,YAAA;AACZ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/header/style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/header/style.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
header a {
  margin: 10px;
}
header img {
  width: 100px;
  height: 100px;
  margin-left: 20px;
}
header #header-logo {
  display: flex;
  align-items: center;
  text-align: center;
}
header #header-logo h1 {
  margin: 0;
}
header #header-logo small {
  margin: 0;
}
header nav#links {
  display: flex;
}
header nav#links a {
  margin: 10px;
}
@media (max-width: 900px) {
  header {
    flex-direction: column;
    align-items: center;
  }
  header #header-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  header #header-logo img {
    width: 80px;
    height: 80px;
    margin-left: 0;
  }
  header #header-logo nav#links {
    flex-direction: column;
    align-items: center;
  }
  header #header-logo nav#links a {
    margin: 5px 0;
  }
}`, "",{"version":3,"sources":["webpack://./app/components/header/style.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,aAAA;EACA,8BAAA;AACJ;AAGI;EACI,YAAA;AADR;AAII;EACI,YAAA;EACA,aAAA;EACA,iBAAA;AAFR;AAKI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;AAHR;AAKQ;EACI,SAAA;AAHZ;AAMQ;EACI,SAAA;AAJZ;AAQI;EACI,aAAA;AANR;AAQQ;EACI,YAAA;AANZ;AAUI;EAvCJ;IAwCQ,sBAAA;IACA,mBAAA;EAPN;EASM;IACI,aAAA;IACA,sBAAA;IACA,mBAAA;EAPV;EASU;IACI,WAAA;IACA,YAAA;IACA,cAAA;EAPd;EAUU;IACI,sBAAA;IACA,mBAAA;EARd;EAUc;IACI,aAAA;EARlB;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/input/style.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/input/style.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `label {
  position: relative;
  margin-bottom: 5px;
  margin-top: 5px;
  display: inline-block;
  width: 100%;
}
label:not(:has(input[type=radio], input[type=checkbox])) {
  font-size: 1.2rem;
}
label input:not([type=radio], [type=checkbox]),
label textarea {
  width: 100%;
}
label .text {
  position: absolute;
  z-index: 1;
  transition: all 0.5s;
  transform: translate(8px, 14px);
  user-select: none;
  cursor: text;
}
label.moveLabel .text {
  transform: translate(0px, -7px);
  font-size: 0.75rem;
  font-weight: bold;
}
label .password-container {
  position: relative;
}
label .password-container .password-toggle {
  width: 24px;
  position: absolute;
  top: 27px;
  translate: -100% -50%;
  right: 0;
  scale: 0.8;
  cursor: pointer;
  font-size: 12px;
}
label .static-label-text {
  font-size: 0.75rem;
  white-space: nowrap;
  margin-top: 4px;
}
label[for=remember-me] {
  translate: -44px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
label[for=remember-me] input {
  scale: 1.3;
  translate: 5px -5px;
  transform-origin: top left;
  cursor: pointer;
}
label input,
label textarea {
  margin: 10px 0 0 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
label textarea {
  resize: vertical;
  min-height: 100px;
}
label .hide-password {
  display: none;
}
label .show-password {
  display: block;
}
label[password-toggle=show] .hide-password {
  display: block;
}
label[password-toggle=show] .show-password {
  display: none;
}
label .error-message {
  font-size: 0.8rem;
  user-select: none;
  z-index: 1;
  line-height: 12px;
}
label .images-container {
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
}
label .images-container img {
  width: 100%;
  height: 100%;
  -webkit-object-fit: contain;
  object-fit: contain;
}
label .images-container .img-container {
  overflow: hidden !important;
  position: relative;
}
label .images-container .img-container button.rotate-image-button {
  position: absolute;
  left: 0;
}
label .images-container.file-input-display {
  width: 200px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
}
label .images-container.file-input-display:not(.has-images) {
  border: 1px solid black;
}
label .images-container.file-input-display .alias {
  font-size: 12px;
  text-align: center;
  margin: 10px;
}
label .images-container.file-input-display .ifEmpty {
  margin: auto;
}
label .images-container.file-input-display.has-images .ifEmpty {
  display: none;
}

.file-input-component {
  width: 220px;
}
.file-input-component .img-container:not(:empty) {
  border: 1px solid black;
}
.file-input-component .label-container {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: visible;
  margin: auto;
}
.file-input-component .rotate-image-button {
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}
.file-input-component .file-name,
.file-input-component .error {
  text-align: center;
}
.file-input-component .error {
  border: 1px solid black;
  color: red;
  font-weight: bold;
  margin-top: 5px;
}

.file-input-component .saved-image-feedback:not(:empty) {
  position: absolute;
  z-index: 100;
  background: #82a70d;
  padding: 5px;
  border-radius: 5px;
  color: white;
  right: 48px;
  top: 3px;
}
.file-input-component .alert-icon {
  display: none;
}
.file-input-component .ifLoading {
  display: none;
}
.file-input-component.loading .ifLoading {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.file-input-component.loading .ifEmpty {
  display: none;
}
.file-input-component.hasError .alert-icon {
  position: absolute;
  top: -25px;
  left: -34px;
  font-size: 60px;
  color: #ff0000;
  display: block;
}

.password-toggle {
  position: absolute;
  top: 27px;
  translate: 0% -50%;
  right: 10px;
  scale: 0.8;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./app/components/input/style.scss"],"names":[],"mappings":"AAAA;EASI,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,WAAA;AAPJ;AAFI;EACI,iBAAA;AAIR;AAMI;;EAEI,WAAA;AAJR;AAOI;EACI,kBAAA;EACA,UAAA;EACA,oBAAA;EACA,+BAAA;EACA,iBAAA;EACA,YAAA;AALR;AASQ;EACI,+BAAA;EACA,kBAAA;EACA,iBAAA;AAPZ;AAWI;EACI,kBAAA;AATR;AAYQ;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,qBAAA;EACA,QAAA;EACA,UAAA;EACA,eAAA;EACA,eAAA;AAVZ;AAcI;EACI,kBAAA;EACA,mBAAA;EACA,eAAA;AAZR;AAeI;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAbR;AAeQ;EACI,UAAA;EACA,mBAAA;EACA,0BAAA;EACA,eAAA;AAbZ;AAiBI;;EAGI,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;AAhBR;AAmBI;EACI,gBAAA;EACA,iBAAA;AAjBR;AAoBI;EACI,aAAA;AAlBR;AAqBI;EACI,cAAA;AAnBR;AAuBQ;EACI,cAAA;AArBZ;AAwBQ;EACI,aAAA;AAtBZ;AA0BI;EACI,iBAAA;EACA,iBAAA;EACA,UAAA;EACA,iBAAA;AAxBR;AA2BI;EACI,aAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;AAzBR;AAiCQ;EACI,WAAA;EACA,YAAA;EACA,2BAAA;EACA,mBAAA;AA/BZ;AAoCQ;EAEI,2BAAA;EACA,kBAAA;AAnCZ;AAqCY;EACI,kBAAA;EACA,OAAA;AAnChB;AAuCQ;EACI,YAAA;EACA,aAAA;EAEA,gBAAA;EACA,eAAA;AAtCZ;AAwCY;EACI,uBAAA;AAtChB;AAyCY;EACI,eAAA;EACA,kBAAA;EACA,YAAA;AAvChB;AA2CY;EACI,YAAA;AAzChB;AA6CgB;EACI,aAAA;AA3CpB;;AAoDA;EAKI,YAAA;AArDJ;AAiDI;EACI,uBAAA;AA/CR;AAoDI;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;AAlDR;AAqDI;EAEI,MAAA;EACA,QAAA;EACA,qBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;AApDR;AAuDI;;EAGI,kBAAA;AAtDR;AAyDI;EACI,uBAAA;EACA,UAAA;EACA,iBAAA;EACA,eAAA;AAvDR;;AAgEI;EACI,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,QAAA;AA7DR;AAgEI;EACI,aAAA;AA9DR;AAkEI;EACI,aAAA;AAhER;AAoEQ;EACI,cAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAlEZ;AAqEQ;EACI,aAAA;AAnEZ;AAwEQ;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,cAAA;AAtEZ;;AA6EA;EACI,kBAAA;EACA,SAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;AA1EJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/markdown/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/markdown/style.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `markdown-component {
  width: fit-content;
  display: block;
  justify-self: center;
  margin: auto;
}
markdown-component p {
  width: fit-content;
}
markdown-component p ul {
  width: fit-content;
}`, "",{"version":3,"sources":["webpack://./app/components/markdown/style.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,cAAA;EACA,oBAAA;EACA,YAAA;AACJ;AAAI;EACI,kBAAA;AAER;AADQ;EACI,kBAAA;AAGZ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/scholarship-application/style.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/scholarship-application/style.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.artist-application-review .app-contents {
  display: none;
}
.artist-application-review .app-contents, .artist-application-review .app-preview {
  padding: 10px;
  margin: 10px;
}
.artist-application-review .app-preview {
  top: 0;
  background-color: white;
  position: sticky;
  z-index: 10;
}
.artist-application-review .expandApplication.hide {
  display: none;
}
.artist-application-review.expanded {
  border: 1px solid black;
}
.artist-application-review.expanded .expandApplication.hide {
  display: block;
}
.artist-application-review.expanded .expandApplication.show {
  display: none;
}
.artist-application-review.expanded .app-contents {
  display: block;
}
.artist-application-review .app-preview {
  display: flex;
  justify-content: space-between;
}
.artist-application-review .app-preview button {
  height: fit-content;
}`, "",{"version":3,"sources":["webpack://./app/components/scholarship-application/style.scss"],"names":[],"mappings":"AACI;EACI,aAAA;AAAR;AAEI;EACI,aAAA;EACA,YAAA;AAAR;AAEI;EACI,MAAA;EACA,uBAAA;EACA,gBAAA;EACA,WAAA;AAAR;AAGI;EACI,aAAA;AADR;AAII;EACI,uBAAA;AAFR;AAMY;EACI,cAAA;AAJhB;AAMY;EACI,aAAA;AAJhB;AASQ;EACI,cAAA;AAPZ;AAYI;EACI,aAAA;EACA,8BAAA;AAVR;AAYQ;EACI,mBAAA;AAVZ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
}
.column {
  display: flex;
  flex-direction: column;
}
.column button {
  width: fit-content;
}

hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  margin: 40px 0;
}

input,
label,
textarea {
  box-sizing: border-box;
}

.w-100 {
  width: 100% !important;
  width: -webkit-fill-available !important;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

#questionnaire {
  display: flex;
  flex-direction: column;
}
#questionnaire label {
  width: fit-content;
  display: flex;
  align-items: baseline;
  box-sizing: border-box;
}
#questionnaire label input {
  box-sizing: border-box;
  margin-right: 10px;
  translate: 0 3px;
}
#questionnaire label textarea-component {
  margin-top: 30px;
}
#questionnaire label textarea {
  width: 100%;
}
#questionnaire .level-1 {
  margin-left: 40px;
}
#questionnaire .level-2 {
  margin-left: 75px;
}
#questionnaire .level-3 {
  margin-left: 100px;
}

#studioElement {
  width: 100%;
}

button {
  background-color: #272727;
  color: white;
  border: none;
  padding: 13px 26px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button.small {
  padding: 5px 10px;
  font-size: 10px;
}

button:hover {
  background-color: #0056b3;
}

a {
  color: blue;
  text-decoration: underline;
}
a:hover {
  color: darkblue;
}

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 35px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

.modal.show {
  display: block;
  animation: fadeIn 0.5s;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  overflow-y: auto;
  width: 80%;
  max-height: 83vh;
}

#keyframes fadeIn from {
  opacity: 0;
}
#keyframes fadeIn to {
  opacity: 1;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
}`, "",{"version":3,"sources":["webpack://./app/styles.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,WAAA;EACA,8BAAA;EACA,eAAA;EACA,mBAAA;AACJ;AAMA;EACI,aAAA;EACA,sBAAA;AAJJ;AAMI;EACI,kBAAA;AAJR;;AAQA;EACI,SAAA;EACA,WAAA;EACA,gBAAA;EACA,6DAAA;EACA,cAAA;AALJ;;AAQA;;;EAGI,sBAAA;AALJ;;AAaA;EACI,sBAAA;EACA,wCAAA;AAVJ;;AAaA;EACI,iBAAA;EACA,cAAA;AAVJ;;AAaA;EACI,aAAA;EACA,sBAAA;AAVJ;AAYI;EACI,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,sBAAA;AAVR;AAYQ;EACI,sBAAA;EACA,kBAAA;EACA,gBAAA;AAVZ;AAaQ;EACI,gBAAA;AAXZ;AAcQ;EACI,WAAA;AAZZ;AAmBI;EACI,iBAAA;AAjBR;AAoBI;EACI,iBAAA;AAlBR;AAqBI;EACI,kBAAA;AAnBR;;AAuBA;EAEI,WAAA;AArBJ;;AA0BA;EACI,yBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,qBAAA;EACA,eAAA;EACA,eAAA;EACA,eAAA;EACA,sCAAA;AAvBJ;AAyBI;EACI,iBAAA;EACA,eAAA;AAvBR;;AA2BA;EACI,yBAAA;AAxBJ;;AA2BA;EACI,WAAA;EACA,0BAAA;AAxBJ;AA0BI;EACI,eAAA;AAxBR;;AA4BA;EACI,aAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;EAEA,UAAA;EACA,eAAA;EACA,iBAAA;EACA,wBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;EACA,4BAAA;EACA,8BAAA;EACA,mBAAA;EACA,oCAAA;EACA,qBAAA;AA1BJ;;AA6BA;EACI,cAAA;EACA,sBAAA;AA1BJ;;AA6BA;EACI,yBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,UAAA;EACA,gBAAA;AA1BJ;;AA8BI;EACI,UAAA;AA3BR;AA8BI;EACI,UAAA;AA5BR;;AAgCA;EACI,aAAA;EACA,8BAAA;EACA,WAAA;EACA,qBAAA;AA7BJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./app/components/3rdParty/paypal/index.html.txt":
/*!*******************************************************!*\
  !*** ./app/components/3rdParty/paypal/index.html.txt ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n<div class=\"payPalContainer\" style=\"width:fit-content; margin: auto \"></div>");

/***/ }),

/***/ "./app/components/application/index.html.txt":
/*!***************************************************!*\
  !*** ./app/components/application/index.html.txt ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<div class=\"artist-application-review\" >\r\n\r\n    <div class=\"app-preview\">\r\n        <div>\r\n\r\n           <h3> ${firstName} ${lastName}: ${medium}</h3>\r\n           \r\n            <p>Submitted on: ${createdAt}</p>\r\n        </div>\r\n        <div>\r\n           \r\n            <h4>Status: </h4>\r\n            <span class=\"status\">\r\n                <span>${status}</span>\r\n            </span>\r\n        </div>\r\n        <button class=\"expandApplication show\" onclick=\"event.target.closest('.artist-application-review').classList.toggle('expanded')\"\r\n        >${hasBeenReviewed =='true' ? \"Review Old Application\" : \"Review\"}</button>\r\n        <button class=\"expandApplication hide\" onclick=\"event.target.closest('.artist-application-review').classList.toggle('expanded')\"\r\n        >Minimize Application</button>\r\n        \r\n    </div>\r\n    <div class=\"app-contents\">\r\n\r\n\r\n        <h3>Artist Name</h3>\r\n        <div class=\"row\">\r\n            <input-component value=\"${firstName}\" disabled=\"true\" style=\"width: 48%\" required=\"true\"\r\n                fieldName=\"firstName\" alias=\"First Name\"></input-component>\r\n            <input-component value=\"${lastName}\" disabled=\"true\" style=\"width: 48%\" required=\"true\" fieldName=\"lastName\"\r\n                alias=\"Last Name\"></input-component>\r\n        </div>\r\n        <h3>Contact Info</h3>\r\n        <div class=\"row\">\r\n            <input-component value=\"${email}\" disabled=\"true\" style=\"width: 48%\" required=\"true\" type=\"email\"\r\n                fieldName=\"email\" alias=\"Email\"></input-component>\r\n            <input-component value=\"${phone}\" disabled=\"true\" style=\"width: 48%\" required=\"true\" fieldName=\"phone\"\r\n                alias=\"Phone\"></input-component>\r\n        </div>\r\n        <textarea-component value=\"${studioAddress}\" disabled=\"true\" required=\"true\" fieldName=\"studio-address\"\r\n            alias=\"Studio Address\"></textarea-component>\r\n        <textarea-component value=\"${mailingAddress}\" disabled=\"true\" required=\"true\" fieldName=\"mailing-address\"\r\n            alias=\"Mailing Address\"></textarea-component>\r\n\r\n\r\n        <h3>Medium(s)</h3>\r\n        <input-component value=\"${medium}\" disabled=\"true\" required=\"true\" fieldName=\"medium\"\r\n            placeholder=\"Comma separated list of mediums\"></input-component>\r\n\r\n        <h3>WA State Business License (UBI) Number *</h3>\r\n        <p>A Washington State Business License (UBI) Number is required to be in the tour. If you don't have one, apply:\r\n            https://bls.dor.wa.gov/. </p>\r\n        <input-component value=\"${waStateBusinessLicenseUbiNumber}\" disabled=\"true\" required=\"true\"\r\n            fieldName=\"wa-state-business-license-ubi-number\" placeholder=\"UBI Number\"></input-component>\r\n\r\n        <h3>Is your studio within the GHOST Tour Boundaries? (That map is available on the Join page) *</h3>\r\n        <label for=\"isWithinBoundaries-${randomId}\">\r\n            <input disabled=\"true\" ${isWithinBoundaries == \"Yes, my studio falls within the boundary\" ? \"checked\" : \"\"} type=\"radio\" name=\"isWithinBoundaries-${randomId}\" value=\"Yes, my studio falls within the boundary\"\r\n                id=\"isWithinBoundaries-${randomId}\"></input>\r\n            Yes, my studio falls within the boundary\r\n        </label>\r\n        <label for=\"isNotWithinBoundaries-${randomId}\">\r\n            <input  disabled=\"true\" ${isWithinBoundaries == \"Yes, my studio falls within the boundary\" ? \"\": \"checked\"} type=\"radio\" name=\"isWithinBoundaries-${randomId}\"\r\n                value=\"No, my studio is outside the boundary and I will need to share studio space with another artist\"\r\n                id=\"isNotWithinBoundaries-${randomId}\"></input>\r\n            No, my studio is outside the boundary and I will need to share studio space with another artist\r\n        </label>\r\n\r\n        <h3>Will you need to share a studio?</h3>\r\n        <style>\r\n            input,\r\n            textarea {\r\n                margin: 10px 0 0 0;\r\n                padding: 10px;\r\n                border: 1px solid #ccc;\r\n                border-radius: 5px;\r\n            }\r\n\r\n            textarea {\r\n                resize: vertical;\r\n                min-height: 100px;\r\n            }\r\n        </style>\r\n        <p style=\"margin: 0;\">If sharing a studio, have you made arrangements to do so? If so, please name the Tour\r\n            Artist who has invited you to share their studio. If not, we will match you with a Tour Artist who will host\r\n            you in their studio.</p>\r\n        <textarea disabled=\"true\" style=\"width: 100%; box-sizing: border-box; \">\r\n${studioSharingResponse}\r\n        </textarea>\r\n        <!-- <textarea-component description=\"If sharing a studio, have you made arrangements to do so? If so, please name the Tour Artist who has invited you to share their studio. If not, we will match you with a Tour Artist who will host you in their studio.\"></textarea-component> -->\r\n\r\n\r\n        <h3>I would like an artist mentor (an experienced artist who can talk to me about preparing for the tour,\r\n            marketing and answer my questions)</h3>\r\n        <label for=\"artistMentor-${randomId}\">\r\n            <input disabled ${artistMentor == \"Yes, I would like an artist mentor\" ? \"checked\": \"\"} required type=\"radio\" name=\"artistMentor-${randomId}\" value=\"Yes, I would like an artist mentor\"\r\n                id=\"artistMentor-${randomId}\"></input>\r\n            Yes, I would like an artist mentor\r\n        </label>\r\n        <label for=\"noArtistMentor-${randomId}\">\r\n            <input disabled ${artistMentor == \"No, I do not need an artist mentor\" ? \"checked\": \"\"}  required type=\"radio\" name=\"artistMentor-${randomId}\" value=\"No, I do not need an artist mentor\"\r\n                id=\"noArtistMentor-${randomId}\"></input>\r\n            No, I do not need an artist mentor\r\n        </label>\r\n\r\n        <h3>How did you hear about the GHOST Tour?</h3>\r\n        <textarea disabled style=\"width: 100%; box-sizing: border-box; \">\r\n${howDidYouHearAboutUs}\r\n        </textarea>\r\n\r\n        <h3>Three (3) digital images of your art</h3>\r\n        <p>Make sure that your images look professional and are jpgs that are a minimum of 150 KB (No thumbnails). 2D\r\n            art should only\r\n            be of your art image (no background or frame.) 3D art and jewelry should have a plain background (ex, black\r\n            or white) and have enough lighting to show good detail. Crop the image so that your art fills most of the\r\n            image and make sure the image is crisp and does justice to your art.</p>\r\n        <div style=\"display: flex; justify-content: center; flex-wrap: wrap;\">\r\n            <style>\r\n                file-input-component {\r\n                    margin: 10px;\r\n                }\r\n                img {\r\n                    width: 200px;\r\n                    height: 200px;\r\n                    object-fit: cover;\r\n                    margin: 10px;\r\n                }\r\n            </style>\r\n            <img src=\"${digitalImage1}\"></img>\r\n            <img src=\"${digitalImage2}\"></img>\r\n            <img src=\"${digitalImage3}\"></img>\r\n        </div>\r\n\r\n        <h3>One (1) digital image of your studio (if it is within the studio tour boundaries and you will be showing\r\n            there) or your booth (if you will be showing at another artist's studio)</h3>\r\n        <p>This should be a jpg image that is a minimum of 150 KB (No thumbnails). Make sure your display space looks\r\n            professional, has good lighting\r\n            and is represented well in your photo.</p>\r\n\r\n        <div style=\"display: flex; justify-content: center; flex-wrap: wrap;\">\r\n            <img src=\"${digitalImage3}\"></img>\r\n        </div>\r\n\r\n        <h3>Artist Statement</h3>\r\n        <textarea-component  disabled=\"true\" fieldName=\"artistStatement-${randomId}\" placeholder=\"Artist Statement\" required\r\n            description=\"This  is a short statement that describes what art you make, how you make it and why you make it.  (Limit 200 words)\"\r\n            value=\"${artistStatement}\"></textarea-component>\r\n        <h3>Your art website or social media sites</h3>\r\n        <textarea-component disabled=\"true\" placeholder=\"Website & Social media presence \" fieldName=\"website-social-media-${randomId}\" required\r\n            description=\"If you have an art website and/or social media sites, list them here.  If you don't have any of those, type in NONE\"\r\n            value=\"${websiteSocialMedia}\"></textarea-component>\r\n\r\n            <div style=\"text-align: center;\">\r\n                <button class=\"approve-btn\" data-fb-id=\"${fbId}\" onclick=\"window.updateReview(event,true)\">Approve Application</button>\r\n                <button class=\"reject-btn\" data-fb-id=\"${fbId}\" onclick=\"window.updateReview(event,false)\">Disapprove</button>\r\n\r\n            </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./app/components/contract-received/index.html.txt":
/*!*********************************************************!*\
  !*** ./app/components/contract-received/index.html.txt ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"contract-received \">\r\n  <div class=\"preview\">\r\n\r\n    <div>\r\n\r\n      <h2 class=\"user-name\" style=\"margin-bottom: 0\">\r\n        ${firstName}\r\n        ${lastName}\r\n      </h2>\r\n      <b><ul style=\"margin: 0; padding: 0; list-style: none;\">${committeeRoles}</ul></b>\r\n    </div>\r\n    <button onclick=\"event.target.closest('.contract-received').classList.toggle('reveal')\">View Details</button>\r\n  </div>\r\n  <div class=\"content \">\r\n    <div><b>Personal Email:</b> ${personalEmail ? personalEmail : 'N/A'}</div>\r\n    <div><b>Business Email:</b> ${businessEmail ? businessEmail : 'N/A'} </div>\r\n    <div><b>Phone:</b> ${phone ? phone : 'N/A'}</div>\r\n    <div><b>Mailing Address:</b> ${mailingAddress ? mailingAddress : 'N/A'}</div>\r\n    <div><b>Studio Address:</b> ${studioAddress ? studioAddress : 'N/A'}</div>\r\n    <div><b>Website:</b> ${website ? website : 'N/A'}</div>\r\n    <div><b>Facebook:</b> ${facebook ? facebook : 'N/A'}</div>\r\n    <div><b>Instagram:</b> ${instagram ? instagram : 'N/A'}</div>\r\n    <div><b>Medium:</b> ${medium ? medium : 'N/A'}</div>\r\n\r\n    <div><b>Scholarship Applied:</b> ${scholarshipApplied ? 'True' : 'False'}</div>\r\n    <div><b>Studio Sharing Answer:</b>\r\n      <div class=\"level-1\">${studioSharingAnswer ? studioSharingAnswer : 'N/A'}</div>\r\n    </div>\r\n    <div><b>Artistic Demonstration:</b> ${artisticDemonstration ? artisticDemonstration : 'N/A'}</div>\r\n    <div><b>Artist Statement:</b> \r\n    <div class=\"level-1\" style=\"translate: 0px -10px\">${artistStatement ? artistStatement : 'N/A' }</div></div>\r\n    <div><b>Artist Tagline:</b> ${artistTagline ? artistTagline : 'N/A'}</div>\r\n  \r\n    <div style=\"display: flex; justify-content: center; flex-wrap: wrap; align-items: end;\">\r\n      <style>\r\n        img {\r\n          width: 200px;\r\n          height: 200px;\r\n          object-fit: cover;\r\n          margin: 10px;\r\n        }\r\n      </style>\r\n      <div><b>Digital Image 1:</b>\r\n        <img src=\"${digitalImage1}\"></img>\r\n      </div>\r\n      <div><b>Digital Image 2:</b>\r\n        <img src=\"${digitalImage2}\"></img>\r\n      </div>\r\n      <div><b>Digital Image 3:</b>\r\n        <img src=\"${digitalImage3}\"></img>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div style=\"display: flex; justify-content: center; flex-wrap: wrap;\">\r\n      <div><b>Brochure Image:</b>\r\n        <img src=\"${brochureImage}\"></img>\r\n      </div>\r\n    </div>\r\n    <div style=\"display: flex; justify-content: center; flex-wrap: wrap;\">\r\n      <div><b>Artist in Studio Image:</b>\r\n        <img src=\"${artistInStudioImage}\"></img>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./app/components/dual-login-form/index.html.txt":
/*!*******************************************************!*\
  !*** ./app/components/dual-login-form/index.html.txt ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<script\r\n  src=\"https://kit.fontawesome.com/4550fec5ff.js\"\r\n  crossorigin=\"anonymous\"\r\n></script>\r\n\r\n<!-- I don't remember what data-primary meant -->\r\n<div class=\"os-dual-form\" data-primary=\"login\" auth-mode=\"login\">\r\n  <form id=\"signup\" class=\"left\" autocomplete=\"off\">\r\n    <h1>Sign up</h1>\r\n    <os-form-feedback feedbackName=\"success\"></os-form-feedback>\r\n\r\n    <small style=\"margin-inline: 30px; font-weight: bold;\">\r\n      Sign-up here if you need to set up your personal account. Otherwise, click on the \"Go To Log In\" button on the right.\r\n    </small>\r\n\r\n\r\n    <div class=\"row\">\r\n      <input-component\r\n        required=\"true\"\r\n        fieldName=\"firstName\"\r\n        alias=\"First Name\"\r\n      ></input-component>\r\n\r\n      <input-component\r\n        required=\"true\"\r\n        fieldName=\"lastName\"\r\n        alias=\"Last Name\"\r\n      ></input-component>\r\n    </div>\r\n    <div class=\"\" style=\"margin-right: auto; margin-left: 10px\">\r\n      <!-- <input-component\r\n        required=\"true\"\r\n        fieldName=\"username\"\r\n        alias=\"Username\"\r\n      ></input-component> -->\r\n      <input-component required=\"true\" fieldName=\"email\" alias=\"Email\">\r\n      </input-component>\r\n    </div>\r\n    <div class=\"row\">\r\n      <input-component\r\n        required=\"true\"\r\n        fieldName=\"password\"\r\n        type=\"password\"\r\n        alias=\"Password\"\r\n      ></input-component>\r\n      <input-component\r\n        required=\"true\"\r\n        fieldName=\"confirm-password\"\r\n        type=\"password\"\r\n        alias=\"Confirm Password\"\r\n      ></input-component>\r\n    </div>\r\n    <!-- <div id=\"reCAPTCHA\"></div>\r\n      <os-form-feedback feedbackName=\"reCAPTCHA\"></os-form-feedback> -->\r\n\r\n    <div class=\"column submitBtnsContainer\">\r\n      <button type=\"submit\">Submit</button>\r\n\r\n      <button type=\"button\" class=\"mobile-view toggleAuthType\">\r\n        Go to Log in\r\n      </button>\r\n    </div>\r\n    <os-form-feedback feedbackName=\"submit\"></os-form-feedback>\r\n  </form>\r\n  <form id=\"login\" class=\"right\" autocomplete=\"off\">\r\n    <h1>Login</h1>\r\n    <small style=\"margin-inline: 30px; font-weight: bold;\">Log In here if you have already set up your personal account. Otherwise, click on the \"Register New Account\" button on the left.</small>\r\n    <input-component\r\n      required=\"true\"\r\n      fieldName=\"email-login\"\r\n      alias=\"Email\"\r\n      type=\"email\"\r\n    ></input-component>\r\n    <input-component\r\n      required=\"true\"\r\n      fieldName=\"password-login\"\r\n      type=\"password\"\r\n      alias=\"Password\"\r\n    ></input-component>\r\n    <div class=\"column submitBtnsContainer\">\r\n      <button type=\"submit\">Submit</button>\r\n      <style>\r\n        .reset-password {\r\n          color: #007bff;\r\n          text-decoration: none;\r\n          cursor: pointer;\r\n          margin-top: 10px;\r\n          /* position: absolute; */\r\n          /* bottom: 0; */\r\n        }\r\n        .reset-password:hover {\r\n          text-decoration: underline;\r\n        }\r\n      </style>\r\n      <a type=\"button\" class=\"reset-password\">Forgot Password?</a>\r\n      <button type=\"button\" class=\"mobile-view toggleAuthType\">\r\n        Register new account\r\n      </button>\r\n    </div>\r\n    <os-form-feedback feedbackName=\"submit\"></os-form-feedback>\r\n  </form>\r\n\r\n  <div class=\"cover left login\" style=\"background-image: url(${loginImage})\">\r\n    <button type=\"button\" class=\"toggleAuthType secondary\" style=\"background-color: #ff0084;\">\r\n      Register new account\r\n    </button>\r\n  </div>\r\n  <div class=\"cover right signup\" style=\"background-image: url(${signupImage})\">\r\n    <button type=\"button\" class=\"toggleAuthType\" style=\"background-color: #ff0084;\">Go to Log in</button>\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n  #reset-password-modal form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  #reset-password-modal .modal-content {\r\n    width: fit-content;\r\n  }\r\n\r\n  .close-modal {\r\n    cursor: pointer;\r\n    font-size: 30px;\r\n    color: #007bff;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n</style>\r\n\r\n<div id=\"reset-password-modal\" class=\"modal\">\r\n  <div class=\"modal-content\" style=\"position: relative\">\r\n    <span class=\"close-modal\" style=\"\">&times;</span>\r\n    <h2>Reset Password</h2>\r\n    <form onsubmit=\"event.preventDefault()\" style=\"\">\r\n      <input-component\r\n        moveLabel=\"true\"\r\n        type=\"email\"\r\n        alias=\"Email\"\r\n        placeholder=\"Enter your email\"\r\n        fieldName=\"resetEmail\"\r\n      >\r\n      </input-component>\r\n      <button id=\"resetSubmit\" class=\"btn small\">Submit</button>\r\n      <div id=\"reset-password-modal-feedback\"></div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./app/components/footer/footer.html.txt":
/*!***********************************************!*\
  !*** ./app/components/footer/footer.html.txt ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<footer>\r\n  <div id=\"footer-logo\">\r\n    <div>\r\n      <h1>Gig Harbor <br>Open Studio Tour</h1>\r\n      <small>Artist Portal</small>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./app/components/header/header.html.txt":
/*!***********************************************!*\
  !*** ./app/components/header/header.html.txt ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<header>\r\n  <div id=\"header-logo\">\r\n    <div>\r\n      <h1>Gig Harbor <br>Open Studio Tour</h1>\r\n      <small>Artist Portal</small>\r\n    </div>\r\n    <img src=\"/dist/assets/ghost-logo-pink (1).jpg\" />\r\n  </div>\r\n\r\n  <nav id=\"links\" data-slotlinks=\"${slotLinks}\">\r\n     ${slotLinks.includes('members') ? `<a href=\"/members\"  onclick=\"navigateTo('/members')\" style=\"cursor: pointer;\">Go back to Members page</a>` : ''}\r\n    <a target=\"top\" href=\"https://gigharboropenstudiotour.org/\">Go back to GHOST Website</a>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./app/components/input/types/file-input.html.txt":
/*!********************************************************!*\
  !*** ./app/components/input/types/file-input.html.txt ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"file-input-component\" style=\"position: relative;\">\r\n    <div class=\"saved-image-feedback\" ></div>\r\n    <div class=\"label-container\">\r\n        <label for=\"${fieldName}\" style=\"\">\r\n            <input style=\"opacity: 0; height: 0; width: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);\" ${required ? \"required\" : \"\" } type=\"file\" id=\"${fieldName}\" name=\"${fieldName}\"\r\n            ${multiple ? \"multiple=true\" : \"\" } ${accept ? `accept=\"${accept}\" ` : \"\" } />\r\n            <div class=\"images-container file-input-display\">\r\n                <div class=\"ifEmpty\">\r\n                    <div class=\"alias\">${alias ? alias : \"\"}</div>\r\n                </div>\r\n                <div class=\"ifLoading\">\r\n                    Loading ...\r\n                </div>\r\n            </div>\r\n        </label>\r\n    </div>\r\n    <div id=\"${fieldName}-error\" class=\"error-message\"></div>\r\n</div>");

/***/ }),

/***/ "./app/components/input/types/text-input.html.txt":
/*!********************************************************!*\
  !*** ./app/components/input/types/text-input.html.txt ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n\r\n<span class=\"${className}\" id=\"${id}\">\r\n\r\n\r\n    <label for=\"${fieldName}\" class=\"${labelClass || \"\"} ${moveLabel ? \"moveLabel\": \"\"}  ${value ? \"moveLabel\" : \"\"}\" style=\"${width ? \"width:\"+ width + \";\" : \"\"}\">\r\n        <small class=\"text\" part=\"labelText\">${alias && required ? alias + \"*\" : alias ? alias : \"\"} </small>\r\n        <input  ${disabled ? \"disabled\" : \"\"} ${value ? `value=\"${value}\"` : \"\"}  placeholder=\"${placeholder}\" type=\"${type}\" id=\"${fieldName}\" name=\"${fieldName}\" class=\"${labelClass || \"\"}\" ${required ? \"required\" :\"\"} ${type === 'number' ? 'min=\"0\"' : ''} ${checked ? 'checked' :''} />\r\n        <div id=\"${fieldName}-error\" class=\"error-message\"></div>\r\n    ${type == 'password' ? `\r\n    <i class=\"password-toggle show-password fa fa-solid fa-eye-slash\"></i>\r\n    <i class=\"password-toggle hide-password fa fa-solid fa-eye\"></i>\r\n    ` : ''}\r\n</label>\r\n<small>${subcaption}</small>\r\n</span>\r\n\r\n</span>\r\n\r\n\r\n");

/***/ }),

/***/ "./app/components/input/types/textarea-input.html.txt":
/*!************************************************************!*\
  !*** ./app/components/input/types/textarea-input.html.txt ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>${description}</div>\r\n<label for=\"${fieldName}\" style=\"width: 100%; box-sizing: border-box; margin-top: 20px;\" class=\"${value ? \" moveLabel\"\r\n    : \"\" }\">\r\n    <small class=\"text\" part=\"labelText\">${alias && required ? alias + \"*\" : alias ? alias : \"\"} </small>\r\n    <textarea placeholder=\"${placeholder}\" id=\"${fieldName}\" name=\"${fieldName}\"\r\n        ${required ? \"required\" : \"\" }  ${disabled ? \"disabled\" : \"\"} >${value ? value : \"\"}</textarea>\r\n    <div id=\"${fieldName}-error\" class=\"error-message\"></div>\r\n</label>");

/***/ }),

/***/ "./app/components/markdown/index.html.txt":
/*!************************************************!*\
  !*** ./app/components/markdown/index.html.txt ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<slot name=\"markdown-content\"></slot>");

/***/ }),

/***/ "./app/components/scholarship-application/index.html.txt":
/*!***************************************************************!*\
  !*** ./app/components/scholarship-application/index.html.txt ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"artist-application-review\">\r\n\r\n    <div class=\"app-preview\">\r\n        <div>\r\n\r\n            <h3>${name}</h3>\r\n\r\n            <p>Submitted on: ${createdAt}</p>\r\n        </div>\r\n        <div>\r\n            <h4>Status: </h4>\r\n            <span class=\"status\">\r\n                <span>${scholarshipGranted=='true' ? \"Scholarship Granted\" : \"\"}</span>\r\n                <span>${hasBeenReviewed=='true' ? \"\" : \"Application needs review\"}</span>\r\n                <span>${(hasBeenReviewed && scholarshipGranted==\"false\") ? \"Not approved for scholarship\" : \"\"}</span>\r\n            </span>\r\n            <!-- <span>${approved  ? \"Approved\" :  hasBeenReviewed ?  \"Not Approved\": \"Has not been reviewed\" }</span> -->\r\n        </div>\r\n        <button class=\"expandApplication show\"\r\n            onclick=\"event.target.closest('.artist-application-review').classList.toggle('expanded')\">${hasBeenReviewed\r\n            =='true' ? \"Review Old Application\" : \"Review\"}</button>\r\n        <button class=\"expandApplication hide\"\r\n            onclick=\"event.target.closest('.artist-application-review').classList.toggle('expanded')\">Minimize\r\n            Application</button>\r\n\r\n    </div>\r\n    <div class=\"app-contents\">\r\n\r\n\r\n        <h3>Artist Name</h3>\r\n        <div class=\"row\">\r\n            <input-component value=\"${name}\" disabled=\"true\" style=\"width: 48%\" required=\"true\" fieldName=\"name\"\r\n                alias=\"Name\"></input-component>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <input-component value=\"${email}\" disabled=\"true\" style=\"width: 48%\" required=\"true\" type=\"email\"\r\n                fieldName=\"email\" alias=\"Email\"></input-component>\r\n        </div>\r\n\r\n\r\n        <label for=\"hasNotReceivedScholarshipPreviously\">\r\n            <input disabled ${hasNotReceivedScholarshipPreviously==\"true\" ? \"checked\" : \"\" } required type=\"checkbox\"\r\n                name=\"hasNotReceivedScholarshipPreviously\" value=\"true\"\r\n                id=\"hasNotReceivedScholarshipPreviously\"></input>\r\n            Click here to verify that you have not received a GHOST artist scholarship previously\r\n        </label>\r\n\r\n        <textarea-component disabled=\"disabled\" fieldName=\"needForScholarship-${randomId}\" required\r\n            alias=\" Please explain your need for a scholarship\" value=\"${needForScholarship}\"></textarea-component>\r\n\r\n        <div style=\"text-align: center;\">\r\n            <button data-fb-id=\"${fbId}\" onclick=\"window.updateScholarship(event,true)\">Approve Scholarship</button>\r\n            <button data-fb-id=\"${fbId}\" onclick=\"window.updateScholarship(event,false)\">Disapprove</button>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./app/components/application/style.scss":
/*!***********************************************!*\
  !*** ./app/components/application/style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/application/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/components/contract-received/style.scss":
/*!*****************************************************!*\
  !*** ./app/components/contract-received/style.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/contract-received/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/components/dual-login-form/global.scss":
/*!****************************************************!*\
  !*** ./app/components/dual-login-form/global.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./global.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/dual-login-form/global.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/components/dual-login-form/style.scss":
/*!***************************************************!*\
  !*** ./app/components/dual-login-form/style.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/dual-login-form/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/components/footer/style.scss":
/*!******************************************!*\
  !*** ./app/components/footer/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/footer/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/components/header/style.scss":
/*!******************************************!*\
  !*** ./app/components/header/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/header/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/components/input/style.scss":
/*!*****************************************!*\
  !*** ./app/components/input/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/input/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/components/markdown/style.scss":
/*!********************************************!*\
  !*** ./app/components/markdown/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/markdown/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/components/scholarship-application/style.scss":
/*!***********************************************************!*\
  !*** ./app/components/scholarship-application/style.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/components/scholarship-application/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/styles.scss":
/*!*************************!*\
  !*** ./app/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/marked/lib/marked.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/marked/lib/marked.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hooks: () => (/* binding */ _Hooks),
/* harmony export */   Lexer: () => (/* binding */ _Lexer),
/* harmony export */   Marked: () => (/* binding */ Marked),
/* harmony export */   Parser: () => (/* binding */ _Parser),
/* harmony export */   Renderer: () => (/* binding */ _Renderer),
/* harmony export */   TextRenderer: () => (/* binding */ _TextRenderer),
/* harmony export */   Tokenizer: () => (/* binding */ _Tokenizer),
/* harmony export */   defaults: () => (/* binding */ _defaults),
/* harmony export */   getDefaults: () => (/* binding */ _getDefaults),
/* harmony export */   lexer: () => (/* binding */ lexer),
/* harmony export */   marked: () => (/* binding */ marked),
/* harmony export */   options: () => (/* binding */ options),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseInline: () => (/* binding */ parseInline),
/* harmony export */   parser: () => (/* binding */ parser),
/* harmony export */   setOptions: () => (/* binding */ setOptions),
/* harmony export */   use: () => (/* binding */ use),
/* harmony export */   walkTokens: () => (/* binding */ walkTokens)
/* harmony export */ });
/**
 * marked v15.0.3 - a markdown parser
 * Copyright (c) 2011-2024, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

/**
 * Gets the original marked default options.
 */
function _getDefaults() {
    return {
        async: false,
        breaks: false,
        extensions: null,
        gfm: true,
        hooks: null,
        pedantic: false,
        renderer: null,
        silent: false,
        tokenizer: null,
        walkTokens: null,
    };
}
let _defaults = _getDefaults();
function changeDefaults(newDefaults) {
    _defaults = newDefaults;
}

const noopTest = { exec: () => null };
function edit(regex, opt = '') {
    let source = typeof regex === 'string' ? regex : regex.source;
    const obj = {
        replace: (name, val) => {
            let valSource = typeof val === 'string' ? val : val.source;
            valSource = valSource.replace(other.caret, '$1');
            source = source.replace(name, valSource);
            return obj;
        },
        getRegex: () => {
            return new RegExp(source, opt);
        },
    };
    return obj;
}
const other = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (bull) => new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),
    hrRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
    htmlBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, 'i'),
};
/**
 * Block-Level Grammar
 */
const newline = /^(?:[ \t]*(?:\n|$))+/;
const blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
const hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
const bullet = /(?:[*+-]|\d{1,9}[.)])/;
const lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/)
    .replace(/bull/g, bullet) // lists can interrupt
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/) // indented code blocks can interrupt
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/) // fenced code blocks can interrupt
    .replace(/blockquote/g, / {0,3}>/) // blockquote can interrupt
    .replace(/heading/g, / {0,3}#{1,6}/) // ATX heading can interrupt
    .replace(/html/g, / {0,3}<[^\n>]+>\n/) // block html can interrupt
    .getRegex();
const _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
const blockText = /^[^\n]+/;
const _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
const def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/)
    .replace('label', _blockLabel)
    .replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
    .getRegex();
const list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, bullet)
    .getRegex();
const _tag = 'address|article|aside|base|basefont|blockquote|body|caption'
    + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
    + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
    + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
    + '|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title'
    + '|tr|track|ul';
const _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
const html = edit('^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)' // (7) closing tag
    + ')', 'i')
    .replace('comment', _comment)
    .replace('tag', _tag)
    .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
    .getRegex();
const paragraph = edit(_paragraph)
    .replace('hr', hr)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('|lheading', '') // setext headings don't interrupt commonmark paragraphs
    .replace('|table', '')
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', _tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
const blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
    .replace('paragraph', paragraph)
    .getRegex();
/**
 * Normal Block Grammar
 */
const blockNormal = {
    blockquote,
    code: blockCode,
    def,
    fences,
    heading,
    hr,
    html,
    lheading,
    list,
    newline,
    paragraph,
    table: noopTest,
    text: blockText,
};
/**
 * GFM Block Grammar
 */
const gfmTable = edit('^ *([^\\n ].*)\\n' // Header
    + ' {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)') // Cells
    .replace('hr', hr)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('blockquote', ' {0,3}>')
    .replace('code', '(?: {4}| {0,3}\t)[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', _tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
const blockGfm = {
    ...blockNormal,
    table: gfmTable,
    paragraph: edit(_paragraph)
        .replace('hr', hr)
        .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
        .replace('|lheading', '') // setext headings don't interrupt commonmark paragraphs
        .replace('table', gfmTable) // interrupt paragraphs with table
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
        .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
        .replace('tag', _tag) // pars can be interrupted by type (6) html blocks
        .getRegex(),
};
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */
const blockPedantic = {
    ...blockNormal,
    html: edit('^ *(?:comment *(?:\\n|\\s*$)'
        + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
        + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
        .replace('comment', _comment)
        .replace(/tag/g, '(?!(?:'
        + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
        + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
        + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
        .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest, // fences not supported
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: edit(_paragraph)
        .replace('hr', hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', lheading)
        .replace('|table', '')
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .replace('|tag', '')
        .getRegex(),
};
/**
 * Inline-Level Grammar
 */
const escape$1 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
const inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
const br = /^( {2,}|\\)\n(?!\s*$)/;
const inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
// list of unicode punctuation marks, plus any missing characters from CommonMark spec
const _punctuation = /[\p{P}\p{S}]/u;
const _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
const _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
const punctuation = edit(/^((?![*_])punctSpace)/, 'u')
    .replace(/punctSpace/g, _punctuationOrSpace).getRegex();
// sequences em should skip over [title](link), `code`, <html>
const blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
const emStrongLDelim = edit(/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, 'u')
    .replace(/punct/g, _punctuation)
    .getRegex();
const emStrongRDelimAst = edit('^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)' // Skip orphan inside strong
    + '|[^*]+(?=[^*])' // Consume to delim
    + '|(?!\\*)punct(\\*+)(?=[\\s]|$)' // (1) #*** can only be a Right Delimiter
    + '|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)' // (2) a***#, a*** can only be a Right Delimiter
    + '|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)' // (3) #***a, ***a can only be Left Delimiter
    + '|[\\s](\\*+)(?!\\*)(?=punct)' // (4) ***# can only be Left Delimiter
    + '|(?!\\*)punct(\\*+)(?!\\*)(?=punct)' // (5) #***# can be either Left or Right Delimiter
    + '|notPunctSpace(\\*+)(?=notPunctSpace)', 'gu') // (6) a***a can be either Left or Right Delimiter
    .replace(/notPunctSpace/g, _notPunctuationOrSpace)
    .replace(/punctSpace/g, _punctuationOrSpace)
    .replace(/punct/g, _punctuation)
    .getRegex();
// (6) Not allowed for _
const emStrongRDelimUnd = edit('^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)' // Skip orphan inside strong
    + '|[^_]+(?=[^_])' // Consume to delim
    + '|(?!_)punct(_+)(?=[\\s]|$)' // (1) #___ can only be a Right Delimiter
    + '|notPunctSpace(_+)(?!_)(?=punctSpace|$)' // (2) a___#, a___ can only be a Right Delimiter
    + '|(?!_)punctSpace(_+)(?=notPunctSpace)' // (3) #___a, ___a can only be Left Delimiter
    + '|[\\s](_+)(?!_)(?=punct)' // (4) ___# can only be Left Delimiter
    + '|(?!_)punct(_+)(?!_)(?=punct)', 'gu') // (5) #___# can be either Left or Right Delimiter
    .replace(/notPunctSpace/g, _notPunctuationOrSpace)
    .replace(/punctSpace/g, _punctuationOrSpace)
    .replace(/punct/g, _punctuation)
    .getRegex();
const anyPunctuation = edit(/\\(punct)/, 'gu')
    .replace(/punct/g, _punctuation)
    .getRegex();
const autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace('email', /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/)
    .getRegex();
const _inlineComment = edit(_comment).replace('(?:-->|$)', '-->').getRegex();
const tag = edit('^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>') // CDATA section
    .replace('comment', _inlineComment)
    .replace('attribute', /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
    .getRegex();
const _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
const link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
    .replace('label', _inlineLabel)
    .replace('href', /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
    .replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
    .getRegex();
const reflink = edit(/^!?\[(label)\]\[(ref)\]/)
    .replace('label', _inlineLabel)
    .replace('ref', _blockLabel)
    .getRegex();
const nolink = edit(/^!?\[(ref)\](?:\[\])?/)
    .replace('ref', _blockLabel)
    .getRegex();
const reflinkSearch = edit('reflink|nolink(?!\\()', 'g')
    .replace('reflink', reflink)
    .replace('nolink', nolink)
    .getRegex();
/**
 * Normal Inline Grammar
 */
const inlineNormal = {
    _backpedal: noopTest, // only used for GFM url
    anyPunctuation,
    autolink,
    blockSkip,
    br,
    code: inlineCode,
    del: noopTest,
    emStrongLDelim,
    emStrongRDelimAst,
    emStrongRDelimUnd,
    escape: escape$1,
    link,
    nolink,
    punctuation,
    reflink,
    reflinkSearch,
    tag,
    text: inlineText,
    url: noopTest,
};
/**
 * Pedantic Inline Grammar
 */
const inlinePedantic = {
    ...inlineNormal,
    link: edit(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', _inlineLabel)
        .getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', _inlineLabel)
        .getRegex(),
};
/**
 * GFM Inline Grammar
 */
const inlineGfm = {
    ...inlineNormal,
    escape: edit(escape$1).replace('])', '~|])').getRegex(),
    url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i')
        .replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
        .getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
};
/**
 * GFM + Line Breaks Inline Grammar
 */
const inlineBreaks = {
    ...inlineGfm,
    br: edit(br).replace('{2,}', '*').getRegex(),
    text: edit(inlineGfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
};
/**
 * exports
 */
const block = {
    normal: blockNormal,
    gfm: blockGfm,
    pedantic: blockPedantic,
};
const inline = {
    normal: inlineNormal,
    gfm: inlineGfm,
    breaks: inlineBreaks,
    pedantic: inlinePedantic,
};

/**
 * Helpers
 */
const escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
    if (encode) {
        if (other.escapeTest.test(html)) {
            return html.replace(other.escapeReplace, getEscapeReplacement);
        }
    }
    else {
        if (other.escapeTestNoEncode.test(html)) {
            return html.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
        }
    }
    return html;
}
function cleanUrl(href) {
    try {
        href = encodeURI(href).replace(other.percentDecode, '%');
    }
    catch {
        return null;
    }
    return href;
}
function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    const row = tableRow.replace(other.findPipe, (match, offset, str) => {
        let escaped = false;
        let curr = offset;
        while (--curr >= 0 && str[curr] === '\\')
            escaped = !escaped;
        if (escaped) {
            // odd number of slashes means | is escaped
            // so we leave it alone
            return '|';
        }
        else {
            // add space before unescaped |
            return ' |';
        }
    }), cells = row.split(other.splitPipe);
    let i = 0;
    // First/last cell in a row cannot be empty if it has no leading/trailing pipe
    if (!cells[0].trim()) {
        cells.shift();
    }
    if (cells.length > 0 && !cells.at(-1)?.trim()) {
        cells.pop();
    }
    if (count) {
        if (cells.length > count) {
            cells.splice(count);
        }
        else {
            while (cells.length < count)
                cells.push('');
        }
    }
    for (; i < cells.length; i++) {
        // leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(other.slashPipe, '|');
    }
    return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param str
 * @param c
 * @param invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
    const l = str.length;
    if (l === 0) {
        return '';
    }
    // Length of suffix matching the invert condition.
    let suffLen = 0;
    // Step left until we fail to match the invert condition.
    while (suffLen < l) {
        const currChar = str.charAt(l - suffLen - 1);
        if (currChar === c && !invert) {
            suffLen++;
        }
        else if (currChar !== c && invert) {
            suffLen++;
        }
        else {
            break;
        }
    }
    return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
        return -1;
    }
    let level = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '\\') {
            i++;
        }
        else if (str[i] === b[0]) {
            level++;
        }
        else if (str[i] === b[1]) {
            level--;
            if (level < 0) {
                return i;
            }
        }
    }
    return -1;
}

function outputLink(cap, link, raw, lexer, rules) {
    const href = link.href;
    const title = link.title || null;
    const text = cap[1].replace(rules.other.outputLinkReplace, '$1');
    if (cap[0].charAt(0) !== '!') {
        lexer.state.inLink = true;
        const token = {
            type: 'link',
            raw,
            href,
            title,
            text,
            tokens: lexer.inlineTokens(text),
        };
        lexer.state.inLink = false;
        return token;
    }
    return {
        type: 'image',
        raw,
        href,
        title,
        text,
    };
}
function indentCodeCompensation(raw, text, rules) {
    const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
    if (matchIndentToCode === null) {
        return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text
        .split('\n')
        .map(node => {
        const matchIndentInNode = node.match(rules.other.beginningSpace);
        if (matchIndentInNode === null) {
            return node;
        }
        const [indentInNode] = matchIndentInNode;
        if (indentInNode.length >= indentToCode.length) {
            return node.slice(indentToCode.length);
        }
        return node;
    })
        .join('\n');
}
/**
 * Tokenizer
 */
class _Tokenizer {
    options;
    rules; // set by the lexer
    lexer; // set by the lexer
    constructor(options) {
        this.options = options || _defaults;
    }
    space(src) {
        const cap = this.rules.block.newline.exec(src);
        if (cap && cap[0].length > 0) {
            return {
                type: 'space',
                raw: cap[0],
            };
        }
    }
    code(src) {
        const cap = this.rules.block.code.exec(src);
        if (cap) {
            const text = cap[0].replace(this.rules.other.codeRemoveIndent, '');
            return {
                type: 'code',
                raw: cap[0],
                codeBlockStyle: 'indented',
                text: !this.options.pedantic
                    ? rtrim(text, '\n')
                    : text,
            };
        }
    }
    fences(src) {
        const cap = this.rules.block.fences.exec(src);
        if (cap) {
            const raw = cap[0];
            const text = indentCodeCompensation(raw, cap[3] || '', this.rules);
            return {
                type: 'code',
                raw,
                lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : cap[2],
                text,
            };
        }
    }
    heading(src) {
        const cap = this.rules.block.heading.exec(src);
        if (cap) {
            let text = cap[2].trim();
            // remove trailing #s
            if (this.rules.other.endingHash.test(text)) {
                const trimmed = rtrim(text, '#');
                if (this.options.pedantic) {
                    text = trimmed.trim();
                }
                else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
                    // CommonMark requires space before trailing #s
                    text = trimmed.trim();
                }
            }
            return {
                type: 'heading',
                raw: cap[0],
                depth: cap[1].length,
                text,
                tokens: this.lexer.inline(text),
            };
        }
    }
    hr(src) {
        const cap = this.rules.block.hr.exec(src);
        if (cap) {
            return {
                type: 'hr',
                raw: rtrim(cap[0], '\n'),
            };
        }
    }
    blockquote(src) {
        const cap = this.rules.block.blockquote.exec(src);
        if (cap) {
            let lines = rtrim(cap[0], '\n').split('\n');
            let raw = '';
            let text = '';
            const tokens = [];
            while (lines.length > 0) {
                let inBlockquote = false;
                const currentLines = [];
                let i;
                for (i = 0; i < lines.length; i++) {
                    // get lines up to a continuation
                    if (this.rules.other.blockquoteStart.test(lines[i])) {
                        currentLines.push(lines[i]);
                        inBlockquote = true;
                    }
                    else if (!inBlockquote) {
                        currentLines.push(lines[i]);
                    }
                    else {
                        break;
                    }
                }
                lines = lines.slice(i);
                const currentRaw = currentLines.join('\n');
                const currentText = currentRaw
                    // precede setext continuation with 4 spaces so it isn't a setext
                    .replace(this.rules.other.blockquoteSetextReplace, '\n    $1')
                    .replace(this.rules.other.blockquoteSetextReplace2, '');
                raw = raw ? `${raw}\n${currentRaw}` : currentRaw;
                text = text ? `${text}\n${currentText}` : currentText;
                // parse blockquote lines as top level tokens
                // merge paragraphs if this is a continuation
                const top = this.lexer.state.top;
                this.lexer.state.top = true;
                this.lexer.blockTokens(currentText, tokens, true);
                this.lexer.state.top = top;
                // if there is no continuation then we are done
                if (lines.length === 0) {
                    break;
                }
                const lastToken = tokens.at(-1);
                if (lastToken?.type === 'code') {
                    // blockquote continuation cannot be preceded by a code block
                    break;
                }
                else if (lastToken?.type === 'blockquote') {
                    // include continuation in nested blockquote
                    const oldToken = lastToken;
                    const newText = oldToken.raw + '\n' + lines.join('\n');
                    const newToken = this.blockquote(newText);
                    tokens[tokens.length - 1] = newToken;
                    raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
                    text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
                    break;
                }
                else if (lastToken?.type === 'list') {
                    // include continuation in nested list
                    const oldToken = lastToken;
                    const newText = oldToken.raw + '\n' + lines.join('\n');
                    const newToken = this.list(newText);
                    tokens[tokens.length - 1] = newToken;
                    raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
                    text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
                    lines = newText.substring(tokens.at(-1).raw.length).split('\n');
                    continue;
                }
            }
            return {
                type: 'blockquote',
                raw,
                tokens,
                text,
            };
        }
    }
    list(src) {
        let cap = this.rules.block.list.exec(src);
        if (cap) {
            let bull = cap[1].trim();
            const isordered = bull.length > 1;
            const list = {
                type: 'list',
                raw: '',
                ordered: isordered,
                start: isordered ? +bull.slice(0, -1) : '',
                loose: false,
                items: [],
            };
            bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
            if (this.options.pedantic) {
                bull = isordered ? bull : '[*+-]';
            }
            // Get next list item
            const itemRegex = this.rules.other.listItemRegex(bull);
            let endsWithBlankLine = false;
            // Check if current bullet point can start a new List Item
            while (src) {
                let endEarly = false;
                let raw = '';
                let itemContents = '';
                if (!(cap = itemRegex.exec(src))) {
                    break;
                }
                if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
                    break;
                }
                raw = cap[0];
                src = src.substring(raw.length);
                let line = cap[2].split('\n', 1)[0].replace(this.rules.other.listReplaceTabs, (t) => ' '.repeat(3 * t.length));
                let nextLine = src.split('\n', 1)[0];
                let blankLine = !line.trim();
                let indent = 0;
                if (this.options.pedantic) {
                    indent = 2;
                    itemContents = line.trimStart();
                }
                else if (blankLine) {
                    indent = cap[1].length + 1;
                }
                else {
                    indent = cap[2].search(this.rules.other.nonSpaceChar); // Find first non-space char
                    indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
                    itemContents = line.slice(indent);
                    indent += cap[1].length;
                }
                if (blankLine && this.rules.other.blankLine.test(nextLine)) { // Items begin with at most one blank line
                    raw += nextLine + '\n';
                    src = src.substring(nextLine.length + 1);
                    endEarly = true;
                }
                if (!endEarly) {
                    const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
                    const hrRegex = this.rules.other.hrRegex(indent);
                    const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
                    const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
                    const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
                    // Check if following lines should be included in List Item
                    while (src) {
                        const rawLine = src.split('\n', 1)[0];
                        let nextLineWithoutTabs;
                        nextLine = rawLine;
                        // Re-align to follow commonmark nesting rules
                        if (this.options.pedantic) {
                            nextLine = nextLine.replace(this.rules.other.listReplaceNesting, '  ');
                            nextLineWithoutTabs = nextLine;
                        }
                        else {
                            nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, '    ');
                        }
                        // End list item if found code fences
                        if (fencesBeginRegex.test(nextLine)) {
                            break;
                        }
                        // End list item if found start of new heading
                        if (headingBeginRegex.test(nextLine)) {
                            break;
                        }
                        // End list item if found start of html block
                        if (htmlBeginRegex.test(nextLine)) {
                            break;
                        }
                        // End list item if found start of new bullet
                        if (nextBulletRegex.test(nextLine)) {
                            break;
                        }
                        // Horizontal rule found
                        if (hrRegex.test(nextLine)) {
                            break;
                        }
                        if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) { // Dedent if possible
                            itemContents += '\n' + nextLineWithoutTabs.slice(indent);
                        }
                        else {
                            // not enough indentation
                            if (blankLine) {
                                break;
                            }
                            // paragraph continuation unless last line was a different block level element
                            if (line.replace(this.rules.other.tabCharGlobal, '    ').search(this.rules.other.nonSpaceChar) >= 4) { // indented code block
                                break;
                            }
                            if (fencesBeginRegex.test(line)) {
                                break;
                            }
                            if (headingBeginRegex.test(line)) {
                                break;
                            }
                            if (hrRegex.test(line)) {
                                break;
                            }
                            itemContents += '\n' + nextLine;
                        }
                        if (!blankLine && !nextLine.trim()) { // Check if current line is blank
                            blankLine = true;
                        }
                        raw += rawLine + '\n';
                        src = src.substring(rawLine.length + 1);
                        line = nextLineWithoutTabs.slice(indent);
                    }
                }
                if (!list.loose) {
                    // If the previous item ended with a blank line, the list is loose
                    if (endsWithBlankLine) {
                        list.loose = true;
                    }
                    else if (this.rules.other.doubleBlankLine.test(raw)) {
                        endsWithBlankLine = true;
                    }
                }
                let istask = null;
                let ischecked;
                // Check for task list items
                if (this.options.gfm) {
                    istask = this.rules.other.listIsTask.exec(itemContents);
                    if (istask) {
                        ischecked = istask[0] !== '[ ] ';
                        itemContents = itemContents.replace(this.rules.other.listReplaceTask, '');
                    }
                }
                list.items.push({
                    type: 'list_item',
                    raw,
                    task: !!istask,
                    checked: ischecked,
                    loose: false,
                    text: itemContents,
                    tokens: [],
                });
                list.raw += raw;
            }
            // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
            const lastItem = list.items.at(-1);
            if (lastItem) {
                lastItem.raw = lastItem.raw.trimEnd();
                lastItem.text = lastItem.text.trimEnd();
            }
            list.raw = list.raw.trimEnd();
            // Item child tokens handled here at end because we needed to have the final item to trim it first
            for (let i = 0; i < list.items.length; i++) {
                this.lexer.state.top = false;
                list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
                if (!list.loose) {
                    // Check if list should be loose
                    const spacers = list.items[i].tokens.filter(t => t.type === 'space');
                    const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => this.rules.other.anyLine.test(t.raw));
                    list.loose = hasMultipleLineBreaks;
                }
            }
            // Set all items to loose if list is loose
            if (list.loose) {
                for (let i = 0; i < list.items.length; i++) {
                    list.items[i].loose = true;
                }
            }
            return list;
        }
    }
    html(src) {
        const cap = this.rules.block.html.exec(src);
        if (cap) {
            const token = {
                type: 'html',
                block: true,
                raw: cap[0],
                pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
                text: cap[0],
            };
            return token;
        }
    }
    def(src) {
        const cap = this.rules.block.def.exec(src);
        if (cap) {
            const tag = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, ' ');
            const href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, '$1').replace(this.rules.inline.anyPunctuation, '$1') : '';
            const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1') : cap[3];
            return {
                type: 'def',
                tag,
                raw: cap[0],
                href,
                title,
            };
        }
    }
    table(src) {
        const cap = this.rules.block.table.exec(src);
        if (!cap) {
            return;
        }
        if (!this.rules.other.tableDelimiter.test(cap[2])) {
            // delimiter row must have a pipe (|) or colon (:) otherwise it is a setext heading
            return;
        }
        const headers = splitCells(cap[1]);
        const aligns = cap[2].replace(this.rules.other.tableAlignChars, '').split('|');
        const rows = cap[3]?.trim() ? cap[3].replace(this.rules.other.tableRowBlankLine, '').split('\n') : [];
        const item = {
            type: 'table',
            raw: cap[0],
            header: [],
            align: [],
            rows: [],
        };
        if (headers.length !== aligns.length) {
            // header and align columns must be equal, rows can be different.
            return;
        }
        for (const align of aligns) {
            if (this.rules.other.tableAlignRight.test(align)) {
                item.align.push('right');
            }
            else if (this.rules.other.tableAlignCenter.test(align)) {
                item.align.push('center');
            }
            else if (this.rules.other.tableAlignLeft.test(align)) {
                item.align.push('left');
            }
            else {
                item.align.push(null);
            }
        }
        for (let i = 0; i < headers.length; i++) {
            item.header.push({
                text: headers[i],
                tokens: this.lexer.inline(headers[i]),
                header: true,
                align: item.align[i],
            });
        }
        for (const row of rows) {
            item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
                return {
                    text: cell,
                    tokens: this.lexer.inline(cell),
                    header: false,
                    align: item.align[i],
                };
            }));
        }
        return item;
    }
    lheading(src) {
        const cap = this.rules.block.lheading.exec(src);
        if (cap) {
            return {
                type: 'heading',
                raw: cap[0],
                depth: cap[2].charAt(0) === '=' ? 1 : 2,
                text: cap[1],
                tokens: this.lexer.inline(cap[1]),
            };
        }
    }
    paragraph(src) {
        const cap = this.rules.block.paragraph.exec(src);
        if (cap) {
            const text = cap[1].charAt(cap[1].length - 1) === '\n'
                ? cap[1].slice(0, -1)
                : cap[1];
            return {
                type: 'paragraph',
                raw: cap[0],
                text,
                tokens: this.lexer.inline(text),
            };
        }
    }
    text(src) {
        const cap = this.rules.block.text.exec(src);
        if (cap) {
            return {
                type: 'text',
                raw: cap[0],
                text: cap[0],
                tokens: this.lexer.inline(cap[0]),
            };
        }
    }
    escape(src) {
        const cap = this.rules.inline.escape.exec(src);
        if (cap) {
            return {
                type: 'escape',
                raw: cap[0],
                text: cap[1],
            };
        }
    }
    tag(src) {
        const cap = this.rules.inline.tag.exec(src);
        if (cap) {
            if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
                this.lexer.state.inLink = true;
            }
            else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
                this.lexer.state.inLink = false;
            }
            if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
                this.lexer.state.inRawBlock = true;
            }
            else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
                this.lexer.state.inRawBlock = false;
            }
            return {
                type: 'html',
                raw: cap[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: false,
                text: cap[0],
            };
        }
    }
    link(src) {
        const cap = this.rules.inline.link.exec(src);
        if (cap) {
            const trimmedUrl = cap[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
                // commonmark requires matching angle brackets
                if (!(this.rules.other.endAngleBracket.test(trimmedUrl))) {
                    return;
                }
                // ending angle bracket cannot be escaped
                const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
                if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
                    return;
                }
            }
            else {
                // find closing parenthesis
                const lastParenIndex = findClosingBracket(cap[2], '()');
                if (lastParenIndex > -1) {
                    const start = cap[0].indexOf('!') === 0 ? 5 : 4;
                    const linkLen = start + cap[1].length + lastParenIndex;
                    cap[2] = cap[2].substring(0, lastParenIndex);
                    cap[0] = cap[0].substring(0, linkLen).trim();
                    cap[3] = '';
                }
            }
            let href = cap[2];
            let title = '';
            if (this.options.pedantic) {
                // split pedantic href and title
                const link = this.rules.other.pedanticHrefTitle.exec(href);
                if (link) {
                    href = link[1];
                    title = link[3];
                }
            }
            else {
                title = cap[3] ? cap[3].slice(1, -1) : '';
            }
            href = href.trim();
            if (this.rules.other.startAngleBracket.test(href)) {
                if (this.options.pedantic && !(this.rules.other.endAngleBracket.test(trimmedUrl))) {
                    // pedantic allows starting angle bracket without ending angle bracket
                    href = href.slice(1);
                }
                else {
                    href = href.slice(1, -1);
                }
            }
            return outputLink(cap, {
                href: href ? href.replace(this.rules.inline.anyPunctuation, '$1') : href,
                title: title ? title.replace(this.rules.inline.anyPunctuation, '$1') : title,
            }, cap[0], this.lexer, this.rules);
        }
    }
    reflink(src, links) {
        let cap;
        if ((cap = this.rules.inline.reflink.exec(src))
            || (cap = this.rules.inline.nolink.exec(src))) {
            const linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, ' ');
            const link = links[linkString.toLowerCase()];
            if (!link) {
                const text = cap[0].charAt(0);
                return {
                    type: 'text',
                    raw: text,
                    text,
                };
            }
            return outputLink(cap, link, cap[0], this.lexer, this.rules);
        }
    }
    emStrong(src, maskedSrc, prevChar = '') {
        let match = this.rules.inline.emStrongLDelim.exec(src);
        if (!match)
            return;
        // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
        if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric))
            return;
        const nextChar = match[1] || match[2] || '';
        if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
            // unicode Regex counts emoji as 1 char; spread into array for proper count (used multiple times below)
            const lLength = [...match[0]].length - 1;
            let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
            const endReg = match[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            endReg.lastIndex = 0;
            // Clip maskedSrc to same section of string as src (move to lexer?)
            maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
            while ((match = endReg.exec(maskedSrc)) != null) {
                rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
                if (!rDelim)
                    continue; // skip single * in __abc*abc__
                rLength = [...rDelim].length;
                if (match[3] || match[4]) { // found another Left Delim
                    delimTotal += rLength;
                    continue;
                }
                else if (match[5] || match[6]) { // either Left or Right Delim
                    if (lLength % 3 && !((lLength + rLength) % 3)) {
                        midDelimTotal += rLength;
                        continue; // CommonMark Emphasis Rules 9-10
                    }
                }
                delimTotal -= rLength;
                if (delimTotal > 0)
                    continue; // Haven't found enough closing delimiters
                // Remove extra characters. *a*** -> *a*
                rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
                // char length can be >1 for unicode characters;
                const lastCharLength = [...match[0]][0].length;
                const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
                // Create `em` if smallest delimiter has odd char count. *a***
                if (Math.min(lLength, rLength) % 2) {
                    const text = raw.slice(1, -1);
                    return {
                        type: 'em',
                        raw,
                        text,
                        tokens: this.lexer.inlineTokens(text),
                    };
                }
                // Create 'strong' if smallest delimiter has even char count. **a***
                const text = raw.slice(2, -2);
                return {
                    type: 'strong',
                    raw,
                    text,
                    tokens: this.lexer.inlineTokens(text),
                };
            }
        }
    }
    codespan(src) {
        const cap = this.rules.inline.code.exec(src);
        if (cap) {
            let text = cap[2].replace(this.rules.other.newLineCharGlobal, ' ');
            const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text);
            const hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
            if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
                text = text.substring(1, text.length - 1);
            }
            return {
                type: 'codespan',
                raw: cap[0],
                text,
            };
        }
    }
    br(src) {
        const cap = this.rules.inline.br.exec(src);
        if (cap) {
            return {
                type: 'br',
                raw: cap[0],
            };
        }
    }
    del(src) {
        const cap = this.rules.inline.del.exec(src);
        if (cap) {
            return {
                type: 'del',
                raw: cap[0],
                text: cap[2],
                tokens: this.lexer.inlineTokens(cap[2]),
            };
        }
    }
    autolink(src) {
        const cap = this.rules.inline.autolink.exec(src);
        if (cap) {
            let text, href;
            if (cap[2] === '@') {
                text = cap[1];
                href = 'mailto:' + text;
            }
            else {
                text = cap[1];
                href = text;
            }
            return {
                type: 'link',
                raw: cap[0],
                text,
                href,
                tokens: [
                    {
                        type: 'text',
                        raw: text,
                        text,
                    },
                ],
            };
        }
    }
    url(src) {
        let cap;
        if (cap = this.rules.inline.url.exec(src)) {
            let text, href;
            if (cap[2] === '@') {
                text = cap[0];
                href = 'mailto:' + text;
            }
            else {
                // do extended autolink path validation
                let prevCapZero;
                do {
                    prevCapZero = cap[0];
                    cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? '';
                } while (prevCapZero !== cap[0]);
                text = cap[0];
                if (cap[1] === 'www.') {
                    href = 'http://' + cap[0];
                }
                else {
                    href = cap[0];
                }
            }
            return {
                type: 'link',
                raw: cap[0],
                text,
                href,
                tokens: [
                    {
                        type: 'text',
                        raw: text,
                        text,
                    },
                ],
            };
        }
    }
    inlineText(src) {
        const cap = this.rules.inline.text.exec(src);
        if (cap) {
            const escaped = this.lexer.state.inRawBlock;
            return {
                type: 'text',
                raw: cap[0],
                text: cap[0],
                escaped,
            };
        }
    }
}

/**
 * Block Lexer
 */
class _Lexer {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(options) {
        // TokenList cannot be created in one go
        this.tokens = [];
        this.tokens.links = Object.create(null);
        this.options = options || _defaults;
        this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        this.tokenizer.lexer = this;
        this.inlineQueue = [];
        this.state = {
            inLink: false,
            inRawBlock: false,
            top: true,
        };
        const rules = {
            other,
            block: block.normal,
            inline: inline.normal,
        };
        if (this.options.pedantic) {
            rules.block = block.pedantic;
            rules.inline = inline.pedantic;
        }
        else if (this.options.gfm) {
            rules.block = block.gfm;
            if (this.options.breaks) {
                rules.inline = inline.breaks;
            }
            else {
                rules.inline = inline.gfm;
            }
        }
        this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */
    static get rules() {
        return {
            block,
            inline,
        };
    }
    /**
     * Static Lex Method
     */
    static lex(src, options) {
        const lexer = new _Lexer(options);
        return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
    static lexInline(src, options) {
        const lexer = new _Lexer(options);
        return lexer.inlineTokens(src);
    }
    /**
     * Preprocessing
     */
    lex(src) {
        src = src.replace(other.carriageReturn, '\n');
        this.blockTokens(src, this.tokens);
        for (let i = 0; i < this.inlineQueue.length; i++) {
            const next = this.inlineQueue[i];
            this.inlineTokens(next.src, next.tokens);
        }
        this.inlineQueue = [];
        return this.tokens;
    }
    blockTokens(src, tokens = [], lastParagraphClipped = false) {
        if (this.options.pedantic) {
            src = src.replace(other.tabCharGlobal, '    ').replace(other.spaceLine, '');
        }
        while (src) {
            let token;
            if (this.options.extensions?.block?.some((extTokenizer) => {
                if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return true;
                }
                return false;
            })) {
                continue;
            }
            // newline
            if (token = this.tokenizer.space(src)) {
                src = src.substring(token.raw.length);
                const lastToken = tokens.at(-1);
                if (token.raw.length === 1 && lastToken !== undefined) {
                    // if there's a single \n as a spacer, it's terminating the last line,
                    // so move it there so that we don't get unnecessary paragraph tags
                    lastToken.raw += '\n';
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            // code
            if (token = this.tokenizer.code(src)) {
                src = src.substring(token.raw.length);
                const lastToken = tokens.at(-1);
                // An indented code block cannot interrupt a paragraph.
                if (lastToken?.type === 'paragraph' || lastToken?.type === 'text') {
                    lastToken.raw += '\n' + token.raw;
                    lastToken.text += '\n' + token.text;
                    this.inlineQueue.at(-1).src = lastToken.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            // fences
            if (token = this.tokenizer.fences(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // heading
            if (token = this.tokenizer.heading(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // hr
            if (token = this.tokenizer.hr(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // blockquote
            if (token = this.tokenizer.blockquote(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // list
            if (token = this.tokenizer.list(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // html
            if (token = this.tokenizer.html(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // def
            if (token = this.tokenizer.def(src)) {
                src = src.substring(token.raw.length);
                const lastToken = tokens.at(-1);
                if (lastToken?.type === 'paragraph' || lastToken?.type === 'text') {
                    lastToken.raw += '\n' + token.raw;
                    lastToken.text += '\n' + token.raw;
                    this.inlineQueue.at(-1).src = lastToken.text;
                }
                else if (!this.tokens.links[token.tag]) {
                    this.tokens.links[token.tag] = {
                        href: token.href,
                        title: token.title,
                    };
                }
                continue;
            }
            // table (gfm)
            if (token = this.tokenizer.table(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // lheading
            if (token = this.tokenizer.lheading(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // top-level paragraph
            // prevent paragraph consuming extensions by clipping 'src' to extension start
            let cutSrc = src;
            if (this.options.extensions?.startBlock) {
                let startIndex = Infinity;
                const tempSrc = src.slice(1);
                let tempStart;
                this.options.extensions.startBlock.forEach((getStartIndex) => {
                    tempStart = getStartIndex.call({ lexer: this }, tempSrc);
                    if (typeof tempStart === 'number' && tempStart >= 0) {
                        startIndex = Math.min(startIndex, tempStart);
                    }
                });
                if (startIndex < Infinity && startIndex >= 0) {
                    cutSrc = src.substring(0, startIndex + 1);
                }
            }
            if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
                const lastToken = tokens.at(-1);
                if (lastParagraphClipped && lastToken?.type === 'paragraph') {
                    lastToken.raw += '\n' + token.raw;
                    lastToken.text += '\n' + token.text;
                    this.inlineQueue.pop();
                    this.inlineQueue.at(-1).src = lastToken.text;
                }
                else {
                    tokens.push(token);
                }
                lastParagraphClipped = cutSrc.length !== src.length;
                src = src.substring(token.raw.length);
                continue;
            }
            // text
            if (token = this.tokenizer.text(src)) {
                src = src.substring(token.raw.length);
                const lastToken = tokens.at(-1);
                if (lastToken?.type === 'text') {
                    lastToken.raw += '\n' + token.raw;
                    lastToken.text += '\n' + token.text;
                    this.inlineQueue.pop();
                    this.inlineQueue.at(-1).src = lastToken.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            if (src) {
                const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                if (this.options.silent) {
                    console.error(errMsg);
                    break;
                }
                else {
                    throw new Error(errMsg);
                }
            }
        }
        this.state.top = true;
        return tokens;
    }
    inline(src, tokens = []) {
        this.inlineQueue.push({ src, tokens });
        return tokens;
    }
    /**
     * Lexing/Compiling
     */
    inlineTokens(src, tokens = []) {
        // String with links masked to avoid interference with em and strong
        let maskedSrc = src;
        let match = null;
        // Mask out reflinks
        if (this.tokens.links) {
            const links = Object.keys(this.tokens.links);
            if (links.length > 0) {
                while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
                    if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
                        maskedSrc = maskedSrc.slice(0, match.index)
                            + '[' + 'a'.repeat(match[0].length - 2) + ']'
                            + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                    }
                }
            }
        }
        // Mask out other blocks
        while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        }
        // Mask out escaped characters
        while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
            maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        }
        let keepPrevChar = false;
        let prevChar = '';
        while (src) {
            if (!keepPrevChar) {
                prevChar = '';
            }
            keepPrevChar = false;
            let token;
            // extensions
            if (this.options.extensions?.inline?.some((extTokenizer) => {
                if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
                    src = src.substring(token.raw.length);
                    tokens.push(token);
                    return true;
                }
                return false;
            })) {
                continue;
            }
            // escape
            if (token = this.tokenizer.escape(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // tag
            if (token = this.tokenizer.tag(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // link
            if (token = this.tokenizer.link(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // reflink, nolink
            if (token = this.tokenizer.reflink(src, this.tokens.links)) {
                src = src.substring(token.raw.length);
                const lastToken = tokens.at(-1);
                if (token.type === 'text' && lastToken?.type === 'text') {
                    lastToken.raw += token.raw;
                    lastToken.text += token.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            // em & strong
            if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // code
            if (token = this.tokenizer.codespan(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // br
            if (token = this.tokenizer.br(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // del (gfm)
            if (token = this.tokenizer.del(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // autolink
            if (token = this.tokenizer.autolink(src)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // url (gfm)
            if (!this.state.inLink && (token = this.tokenizer.url(src))) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                continue;
            }
            // text
            // prevent inlineText consuming extensions by clipping 'src' to extension start
            let cutSrc = src;
            if (this.options.extensions?.startInline) {
                let startIndex = Infinity;
                const tempSrc = src.slice(1);
                let tempStart;
                this.options.extensions.startInline.forEach((getStartIndex) => {
                    tempStart = getStartIndex.call({ lexer: this }, tempSrc);
                    if (typeof tempStart === 'number' && tempStart >= 0) {
                        startIndex = Math.min(startIndex, tempStart);
                    }
                });
                if (startIndex < Infinity && startIndex >= 0) {
                    cutSrc = src.substring(0, startIndex + 1);
                }
            }
            if (token = this.tokenizer.inlineText(cutSrc)) {
                src = src.substring(token.raw.length);
                if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
                    prevChar = token.raw.slice(-1);
                }
                keepPrevChar = true;
                const lastToken = tokens.at(-1);
                if (lastToken?.type === 'text') {
                    lastToken.raw += token.raw;
                    lastToken.text += token.text;
                }
                else {
                    tokens.push(token);
                }
                continue;
            }
            if (src) {
                const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
                if (this.options.silent) {
                    console.error(errMsg);
                    break;
                }
                else {
                    throw new Error(errMsg);
                }
            }
        }
        return tokens;
    }
}

/**
 * Renderer
 */
class _Renderer {
    options;
    parser; // set by the parser
    constructor(options) {
        this.options = options || _defaults;
    }
    space(token) {
        return '';
    }
    code({ text, lang, escaped }) {
        const langString = (lang || '').match(other.notSpaceStart)?.[0];
        const code = text.replace(other.endingNewline, '') + '\n';
        if (!langString) {
            return '<pre><code>'
                + (escaped ? code : escape(code, true))
                + '</code></pre>\n';
        }
        return '<pre><code class="language-'
            + escape(langString)
            + '">'
            + (escaped ? code : escape(code, true))
            + '</code></pre>\n';
    }
    blockquote({ tokens }) {
        const body = this.parser.parse(tokens);
        return `<blockquote>\n${body}</blockquote>\n`;
    }
    html({ text }) {
        return text;
    }
    heading({ tokens, depth }) {
        return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>\n`;
    }
    hr(token) {
        return '<hr>\n';
    }
    list(token) {
        const ordered = token.ordered;
        const start = token.start;
        let body = '';
        for (let j = 0; j < token.items.length; j++) {
            const item = token.items[j];
            body += this.listitem(item);
        }
        const type = ordered ? 'ol' : 'ul';
        const startAttr = (ordered && start !== 1) ? (' start="' + start + '"') : '';
        return '<' + type + startAttr + '>\n' + body + '</' + type + '>\n';
    }
    listitem(item) {
        let itemBody = '';
        if (item.task) {
            const checkbox = this.checkbox({ checked: !!item.checked });
            if (item.loose) {
                if (item.tokens[0]?.type === 'paragraph') {
                    item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + escape(item.tokens[0].tokens[0].text);
                        item.tokens[0].tokens[0].escaped = true;
                    }
                }
                else {
                    item.tokens.unshift({
                        type: 'text',
                        raw: checkbox + ' ',
                        text: checkbox + ' ',
                        escaped: true,
                    });
                }
            }
            else {
                itemBody += checkbox + ' ';
            }
        }
        itemBody += this.parser.parse(item.tokens, !!item.loose);
        return `<li>${itemBody}</li>\n`;
    }
    checkbox({ checked }) {
        return '<input '
            + (checked ? 'checked="" ' : '')
            + 'disabled="" type="checkbox">';
    }
    paragraph({ tokens }) {
        return `<p>${this.parser.parseInline(tokens)}</p>\n`;
    }
    table(token) {
        let header = '';
        // header
        let cell = '';
        for (let j = 0; j < token.header.length; j++) {
            cell += this.tablecell(token.header[j]);
        }
        header += this.tablerow({ text: cell });
        let body = '';
        for (let j = 0; j < token.rows.length; j++) {
            const row = token.rows[j];
            cell = '';
            for (let k = 0; k < row.length; k++) {
                cell += this.tablecell(row[k]);
            }
            body += this.tablerow({ text: cell });
        }
        if (body)
            body = `<tbody>${body}</tbody>`;
        return '<table>\n'
            + '<thead>\n'
            + header
            + '</thead>\n'
            + body
            + '</table>\n';
    }
    tablerow({ text }) {
        return `<tr>\n${text}</tr>\n`;
    }
    tablecell(token) {
        const content = this.parser.parseInline(token.tokens);
        const type = token.header ? 'th' : 'td';
        const tag = token.align
            ? `<${type} align="${token.align}">`
            : `<${type}>`;
        return tag + content + `</${type}>\n`;
    }
    /**
     * span level renderer
     */
    strong({ tokens }) {
        return `<strong>${this.parser.parseInline(tokens)}</strong>`;
    }
    em({ tokens }) {
        return `<em>${this.parser.parseInline(tokens)}</em>`;
    }
    codespan({ text }) {
        return `<code>${escape(text, true)}</code>`;
    }
    br(token) {
        return '<br>';
    }
    del({ tokens }) {
        return `<del>${this.parser.parseInline(tokens)}</del>`;
    }
    link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const cleanHref = cleanUrl(href);
        if (cleanHref === null) {
            return text;
        }
        href = cleanHref;
        let out = '<a href="' + href + '"';
        if (title) {
            out += ' title="' + (escape(title)) + '"';
        }
        out += '>' + text + '</a>';
        return out;
    }
    image({ href, title, text }) {
        const cleanHref = cleanUrl(href);
        if (cleanHref === null) {
            return escape(text);
        }
        href = cleanHref;
        let out = `<img src="${href}" alt="${text}"`;
        if (title) {
            out += ` title="${escape(title)}"`;
        }
        out += '>';
        return out;
    }
    text(token) {
        return 'tokens' in token && token.tokens
            ? this.parser.parseInline(token.tokens)
            : ('escaped' in token && token.escaped ? token.text : escape(token.text));
    }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class _TextRenderer {
    // no need for block level renderers
    strong({ text }) {
        return text;
    }
    em({ text }) {
        return text;
    }
    codespan({ text }) {
        return text;
    }
    del({ text }) {
        return text;
    }
    html({ text }) {
        return text;
    }
    text({ text }) {
        return text;
    }
    link({ text }) {
        return '' + text;
    }
    image({ text }) {
        return '' + text;
    }
    br() {
        return '';
    }
}

/**
 * Parsing & Compiling
 */
class _Parser {
    options;
    renderer;
    textRenderer;
    constructor(options) {
        this.options = options || _defaults;
        this.options.renderer = this.options.renderer || new _Renderer();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.renderer.parser = this;
        this.textRenderer = new _TextRenderer();
    }
    /**
     * Static Parse Method
     */
    static parse(tokens, options) {
        const parser = new _Parser(options);
        return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
    static parseInline(tokens, options) {
        const parser = new _Parser(options);
        return parser.parseInline(tokens);
    }
    /**
     * Parse Loop
     */
    parse(tokens, top = true) {
        let out = '';
        for (let i = 0; i < tokens.length; i++) {
            const anyToken = tokens[i];
            // Run any renderer extensions
            if (this.options.extensions?.renderers?.[anyToken.type]) {
                const genericToken = anyToken;
                const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
                if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(genericToken.type)) {
                    out += ret || '';
                    continue;
                }
            }
            const token = anyToken;
            switch (token.type) {
                case 'space': {
                    out += this.renderer.space(token);
                    continue;
                }
                case 'hr': {
                    out += this.renderer.hr(token);
                    continue;
                }
                case 'heading': {
                    out += this.renderer.heading(token);
                    continue;
                }
                case 'code': {
                    out += this.renderer.code(token);
                    continue;
                }
                case 'table': {
                    out += this.renderer.table(token);
                    continue;
                }
                case 'blockquote': {
                    out += this.renderer.blockquote(token);
                    continue;
                }
                case 'list': {
                    out += this.renderer.list(token);
                    continue;
                }
                case 'html': {
                    out += this.renderer.html(token);
                    continue;
                }
                case 'paragraph': {
                    out += this.renderer.paragraph(token);
                    continue;
                }
                case 'text': {
                    let textToken = token;
                    let body = this.renderer.text(textToken);
                    while (i + 1 < tokens.length && tokens[i + 1].type === 'text') {
                        textToken = tokens[++i];
                        body += '\n' + this.renderer.text(textToken);
                    }
                    if (top) {
                        out += this.renderer.paragraph({
                            type: 'paragraph',
                            raw: body,
                            text: body,
                            tokens: [{ type: 'text', raw: body, text: body, escaped: true }],
                        });
                    }
                    else {
                        out += body;
                    }
                    continue;
                }
                default: {
                    const errMsg = 'Token with "' + token.type + '" type was not found.';
                    if (this.options.silent) {
                        console.error(errMsg);
                        return '';
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
            }
        }
        return out;
    }
    /**
     * Parse Inline Tokens
     */
    parseInline(tokens, renderer = this.renderer) {
        let out = '';
        for (let i = 0; i < tokens.length; i++) {
            const anyToken = tokens[i];
            // Run any renderer extensions
            if (this.options.extensions?.renderers?.[anyToken.type]) {
                const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
                if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(anyToken.type)) {
                    out += ret || '';
                    continue;
                }
            }
            const token = anyToken;
            switch (token.type) {
                case 'escape': {
                    out += renderer.text(token);
                    break;
                }
                case 'html': {
                    out += renderer.html(token);
                    break;
                }
                case 'link': {
                    out += renderer.link(token);
                    break;
                }
                case 'image': {
                    out += renderer.image(token);
                    break;
                }
                case 'strong': {
                    out += renderer.strong(token);
                    break;
                }
                case 'em': {
                    out += renderer.em(token);
                    break;
                }
                case 'codespan': {
                    out += renderer.codespan(token);
                    break;
                }
                case 'br': {
                    out += renderer.br(token);
                    break;
                }
                case 'del': {
                    out += renderer.del(token);
                    break;
                }
                case 'text': {
                    out += renderer.text(token);
                    break;
                }
                default: {
                    const errMsg = 'Token with "' + token.type + '" type was not found.';
                    if (this.options.silent) {
                        console.error(errMsg);
                        return '';
                    }
                    else {
                        throw new Error(errMsg);
                    }
                }
            }
        }
        return out;
    }
}

class _Hooks {
    options;
    block;
    constructor(options) {
        this.options = options || _defaults;
    }
    static passThroughHooks = new Set([
        'preprocess',
        'postprocess',
        'processAllTokens',
    ]);
    /**
     * Process markdown before marked
     */
    preprocess(markdown) {
        return markdown;
    }
    /**
     * Process HTML after marked is finished
     */
    postprocess(html) {
        return html;
    }
    /**
     * Process all tokens before walk tokens
     */
    processAllTokens(tokens) {
        return tokens;
    }
    /**
     * Provide function to tokenize markdown
     */
    provideLexer() {
        return this.block ? _Lexer.lex : _Lexer.lexInline;
    }
    /**
     * Provide function to parse tokens
     */
    provideParser() {
        return this.block ? _Parser.parse : _Parser.parseInline;
    }
}

class Marked {
    defaults = _getDefaults();
    options = this.setOptions;
    parse = this.parseMarkdown(true);
    parseInline = this.parseMarkdown(false);
    Parser = _Parser;
    Renderer = _Renderer;
    TextRenderer = _TextRenderer;
    Lexer = _Lexer;
    Tokenizer = _Tokenizer;
    Hooks = _Hooks;
    constructor(...args) {
        this.use(...args);
    }
    /**
     * Run callback for every token
     */
    walkTokens(tokens, callback) {
        let values = [];
        for (const token of tokens) {
            values = values.concat(callback.call(this, token));
            switch (token.type) {
                case 'table': {
                    const tableToken = token;
                    for (const cell of tableToken.header) {
                        values = values.concat(this.walkTokens(cell.tokens, callback));
                    }
                    for (const row of tableToken.rows) {
                        for (const cell of row) {
                            values = values.concat(this.walkTokens(cell.tokens, callback));
                        }
                    }
                    break;
                }
                case 'list': {
                    const listToken = token;
                    values = values.concat(this.walkTokens(listToken.items, callback));
                    break;
                }
                default: {
                    const genericToken = token;
                    if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
                        this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
                            const tokens = genericToken[childTokens].flat(Infinity);
                            values = values.concat(this.walkTokens(tokens, callback));
                        });
                    }
                    else if (genericToken.tokens) {
                        values = values.concat(this.walkTokens(genericToken.tokens, callback));
                    }
                }
            }
        }
        return values;
    }
    use(...args) {
        const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
        args.forEach((pack) => {
            // copy options to new object
            const opts = { ...pack };
            // set async to true if it was set to true before
            opts.async = this.defaults.async || opts.async || false;
            // ==-- Parse "addon" extensions --== //
            if (pack.extensions) {
                pack.extensions.forEach((ext) => {
                    if (!ext.name) {
                        throw new Error('extension name required');
                    }
                    if ('renderer' in ext) { // Renderer extensions
                        const prevRenderer = extensions.renderers[ext.name];
                        if (prevRenderer) {
                            // Replace extension with func to run new extension but fall back if false
                            extensions.renderers[ext.name] = function (...args) {
                                let ret = ext.renderer.apply(this, args);
                                if (ret === false) {
                                    ret = prevRenderer.apply(this, args);
                                }
                                return ret;
                            };
                        }
                        else {
                            extensions.renderers[ext.name] = ext.renderer;
                        }
                    }
                    if ('tokenizer' in ext) { // Tokenizer Extensions
                        if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
                            throw new Error("extension level must be 'block' or 'inline'");
                        }
                        const extLevel = extensions[ext.level];
                        if (extLevel) {
                            extLevel.unshift(ext.tokenizer);
                        }
                        else {
                            extensions[ext.level] = [ext.tokenizer];
                        }
                        if (ext.start) { // Function to check for start of token
                            if (ext.level === 'block') {
                                if (extensions.startBlock) {
                                    extensions.startBlock.push(ext.start);
                                }
                                else {
                                    extensions.startBlock = [ext.start];
                                }
                            }
                            else if (ext.level === 'inline') {
                                if (extensions.startInline) {
                                    extensions.startInline.push(ext.start);
                                }
                                else {
                                    extensions.startInline = [ext.start];
                                }
                            }
                        }
                    }
                    if ('childTokens' in ext && ext.childTokens) { // Child tokens to be visited by walkTokens
                        extensions.childTokens[ext.name] = ext.childTokens;
                    }
                });
                opts.extensions = extensions;
            }
            // ==-- Parse "overwrite" extensions --== //
            if (pack.renderer) {
                const renderer = this.defaults.renderer || new _Renderer(this.defaults);
                for (const prop in pack.renderer) {
                    if (!(prop in renderer)) {
                        throw new Error(`renderer '${prop}' does not exist`);
                    }
                    if (['options', 'parser'].includes(prop)) {
                        // ignore options property
                        continue;
                    }
                    const rendererProp = prop;
                    const rendererFunc = pack.renderer[rendererProp];
                    const prevRenderer = renderer[rendererProp];
                    // Replace renderer with func to run extension, but fall back if false
                    renderer[rendererProp] = (...args) => {
                        let ret = rendererFunc.apply(renderer, args);
                        if (ret === false) {
                            ret = prevRenderer.apply(renderer, args);
                        }
                        return ret || '';
                    };
                }
                opts.renderer = renderer;
            }
            if (pack.tokenizer) {
                const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
                for (const prop in pack.tokenizer) {
                    if (!(prop in tokenizer)) {
                        throw new Error(`tokenizer '${prop}' does not exist`);
                    }
                    if (['options', 'rules', 'lexer'].includes(prop)) {
                        // ignore options, rules, and lexer properties
                        continue;
                    }
                    const tokenizerProp = prop;
                    const tokenizerFunc = pack.tokenizer[tokenizerProp];
                    const prevTokenizer = tokenizer[tokenizerProp];
                    // Replace tokenizer with func to run extension, but fall back if false
                    // @ts-expect-error cannot type tokenizer function dynamically
                    tokenizer[tokenizerProp] = (...args) => {
                        let ret = tokenizerFunc.apply(tokenizer, args);
                        if (ret === false) {
                            ret = prevTokenizer.apply(tokenizer, args);
                        }
                        return ret;
                    };
                }
                opts.tokenizer = tokenizer;
            }
            // ==-- Parse Hooks extensions --== //
            if (pack.hooks) {
                const hooks = this.defaults.hooks || new _Hooks();
                for (const prop in pack.hooks) {
                    if (!(prop in hooks)) {
                        throw new Error(`hook '${prop}' does not exist`);
                    }
                    if (['options', 'block'].includes(prop)) {
                        // ignore options and block properties
                        continue;
                    }
                    const hooksProp = prop;
                    const hooksFunc = pack.hooks[hooksProp];
                    const prevHook = hooks[hooksProp];
                    if (_Hooks.passThroughHooks.has(prop)) {
                        // @ts-expect-error cannot type hook function dynamically
                        hooks[hooksProp] = (arg) => {
                            if (this.defaults.async) {
                                return Promise.resolve(hooksFunc.call(hooks, arg)).then(ret => {
                                    return prevHook.call(hooks, ret);
                                });
                            }
                            const ret = hooksFunc.call(hooks, arg);
                            return prevHook.call(hooks, ret);
                        };
                    }
                    else {
                        // @ts-expect-error cannot type hook function dynamically
                        hooks[hooksProp] = (...args) => {
                            let ret = hooksFunc.apply(hooks, args);
                            if (ret === false) {
                                ret = prevHook.apply(hooks, args);
                            }
                            return ret;
                        };
                    }
                }
                opts.hooks = hooks;
            }
            // ==-- Parse WalkTokens extensions --== //
            if (pack.walkTokens) {
                const walkTokens = this.defaults.walkTokens;
                const packWalktokens = pack.walkTokens;
                opts.walkTokens = function (token) {
                    let values = [];
                    values.push(packWalktokens.call(this, token));
                    if (walkTokens) {
                        values = values.concat(walkTokens.call(this, token));
                    }
                    return values;
                };
            }
            this.defaults = { ...this.defaults, ...opts };
        });
        return this;
    }
    setOptions(opt) {
        this.defaults = { ...this.defaults, ...opt };
        return this;
    }
    lexer(src, options) {
        return _Lexer.lex(src, options ?? this.defaults);
    }
    parser(tokens, options) {
        return _Parser.parse(tokens, options ?? this.defaults);
    }
    parseMarkdown(blockType) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parse = (src, options) => {
            const origOpt = { ...options };
            const opt = { ...this.defaults, ...origOpt };
            const throwError = this.onError(!!opt.silent, !!opt.async);
            // throw error if an extension set async to true but parse was called with async: false
            if (this.defaults.async === true && origOpt.async === false) {
                return throwError(new Error('marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.'));
            }
            // throw error in case of non string input
            if (typeof src === 'undefined' || src === null) {
                return throwError(new Error('marked(): input parameter is undefined or null'));
            }
            if (typeof src !== 'string') {
                return throwError(new Error('marked(): input parameter is of type '
                    + Object.prototype.toString.call(src) + ', string expected'));
            }
            if (opt.hooks) {
                opt.hooks.options = opt;
                opt.hooks.block = blockType;
            }
            const lexer = opt.hooks ? opt.hooks.provideLexer() : (blockType ? _Lexer.lex : _Lexer.lexInline);
            const parser = opt.hooks ? opt.hooks.provideParser() : (blockType ? _Parser.parse : _Parser.parseInline);
            if (opt.async) {
                return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src)
                    .then(src => lexer(src, opt))
                    .then(tokens => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens)
                    .then(tokens => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens)
                    .then(tokens => parser(tokens, opt))
                    .then(html => opt.hooks ? opt.hooks.postprocess(html) : html)
                    .catch(throwError);
            }
            try {
                if (opt.hooks) {
                    src = opt.hooks.preprocess(src);
                }
                let tokens = lexer(src, opt);
                if (opt.hooks) {
                    tokens = opt.hooks.processAllTokens(tokens);
                }
                if (opt.walkTokens) {
                    this.walkTokens(tokens, opt.walkTokens);
                }
                let html = parser(tokens, opt);
                if (opt.hooks) {
                    html = opt.hooks.postprocess(html);
                }
                return html;
            }
            catch (e) {
                return throwError(e);
            }
        };
        return parse;
    }
    onError(silent, async) {
        return (e) => {
            e.message += '\nPlease report this to https://github.com/markedjs/marked.';
            if (silent) {
                const msg = '<p>An error occurred:</p><pre>'
                    + escape(e.message + '', true)
                    + '</pre>';
                if (async) {
                    return Promise.resolve(msg);
                }
                return msg;
            }
            if (async) {
                return Promise.reject(e);
            }
            throw e;
        };
    }
}

const markedInstance = new Marked();
function marked(src, opt) {
    return markedInstance.parse(src, opt);
}
/**
 * Sets the default options.
 *
 * @param options Hash of options
 */
marked.options =
    marked.setOptions = function (options) {
        markedInstance.setOptions(options);
        marked.defaults = markedInstance.defaults;
        changeDefaults(marked.defaults);
        return marked;
    };
/**
 * Gets the original marked default options.
 */
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
/**
 * Use Extension
 */
marked.use = function (...args) {
    markedInstance.use(...args);
    marked.defaults = markedInstance.defaults;
    changeDefaults(marked.defaults);
    return marked;
};
/**
 * Run callback for every token
 */
marked.walkTokens = function (tokens, callback) {
    return markedInstance.walkTokens(tokens, callback);
};
/**
 * Compiles markdown to HTML without enclosing `p` tag.
 *
 * @param src String of markdown source to be compiled
 * @param options Hash of options
 * @return String of compiled HTML
 */
marked.parseInline = markedInstance.parseInline;
/**
 * Expose
 */
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = marked;
const parser = _Parser.parse;
const lexer = _Lexer.lex;


//# sourceMappingURL=marked.esm.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./app/components/component-build.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./app/styles.scss");
/* harmony import */ var _input_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/index.js */ "./app/components/input/index.js");
/* harmony import */ var _header_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/index.js */ "./app/components/header/index.js");
/* harmony import */ var _markdown_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown/index.js */ "./app/components/markdown/index.js");
/* harmony import */ var _dual_login_form_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dual-login-form/index.js */ "./app/components/dual-login-form/index.js");
/* harmony import */ var _dual_login_form_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dual-login-form/global.scss */ "./app/components/dual-login-form/global.scss");
/* harmony import */ var _footer_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/index.js */ "./app/components/footer/index.js");
/* harmony import */ var _3rdParty_paypal_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./3rdParty/paypal/index.js */ "./app/components/3rdParty/paypal/index.js");
/* harmony import */ var _application_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./application/index.js */ "./app/components/application/index.js");
/* harmony import */ var _scholarship_application_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scholarship-application/index.js */ "./app/components/scholarship-application/index.js");
/* harmony import */ var _utils_logIf_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/logIf.js */ "./utils/logIf.js");
/* harmony import */ var _utils_logIf_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_logIf_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _contract_received_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contract-received/index.js */ "./app/components/contract-received/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 // Import the styles (These are really the global styles for the app -- They could have their own web pack config)













// global google services api
// import "../../lib/google.js";

window.moveLabel = function (element) {
  return (0,_input_index_js__WEBPACK_IMPORTED_MODULE_1__.moveLabel)(element);
};

// Globals file
// Helper function to get form values
window.getFormValues = function (formSelector) {
  (_utils_logIf_js__WEBPACK_IMPORTED_MODULE_10___default().client) && console.log("Getting form values and about to set loading");
  var form = document.querySelector(formSelector);
  var formData = new FormData(form);
  setLoading(form, true);
  return {
    form: form,
    values: Object.fromEntries(formData.entries())
  };
};

// global function to set loading state
window.setLoading = function (form, isLoading) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    success: true,
    cbText: "Your changes have been saved"
  };
  if (!config.success) return; // Don't set loading if there was an error
  (_utils_logIf_js__WEBPACK_IMPORTED_MODULE_10___default().client) && console.log("Setting loading", {
    form: form,
    isLoading: isLoading,
    config: config
  });
  var submitButton = form.querySelector('button[type="submit"]');
  if (isLoading) {
    // get submit button text 
    var text = submitButton.innerHTML;
    submitButton.setAttribute('disabled', 'disabled');
    submitButton.innerHTML = 'Loading...';
    submitButton.setAttribute('data-text', text);
  } else {
    submitButton.innerHTML = config.cbText;
    setTimeout(function () {
      submitButton.removeAttribute('disabled');
      var text = submitButton.getAttribute('data-text');
      submitButton.innerHTML = text;
    }, 3000);
  }
};

/**
 * navigateTo is a method for changing the main url from a nested iframe
 * But in development, it will just change the url of the current window since there is not iframe
 * @param {*} path 
 */
window.navigateTo = function (path) {
  var isDevEnv = window.location.origin.includes('localhost');
  if (isDevEnv) {
    // go to the new path
    window.location.href = window.location.origin + path;
  } else {
    var message = {
      dispatch: 'navigate',
      path: path
    };
    // This line update the main window with the new path
    window.top.postMessage(message, '*');
  }
};
window.openUrl = function (url) {
  var isDevEnv = window.location.origin.includes('localhost');
  if (isDevEnv) {
    // go to the new path
    window.location.href = url;
  } else {
    var message = {
      dispatch: 'openUrl',
      path: url
    };
    // This line update the main window with the new path
    window.top.postMessage(message, '*');
  }
};
document.addEventListener('click', function (e) {
  // using event delegation to handle click events
  var target = e.target;
  if (target.matches('.close-modal')) {
    // close modal
    target.closest('.modal').classList.remove('show');

    // emit event to the target modal 
    target.closest('.modal').dispatchEvent(new Event('modal-closing'));
  }
});
window.mapId = function (object) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key';
  return Object.entries(object).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      id = _ref2[0],
      value = _ref2[1];
    return _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, key, id));
  });
};
window.isBootStrapConfirmResponse = function (event) {
  // Workaround.... this prop was the only way to know if the event was triggered by the bootstrap confirm
  return !event.isTrusted;
};
window.toTitleCase = function (str) {
  // replace spaces with '' and capitalize the first letter of each word
  return str.split(" ").reduce(function (acc, word, i) {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    acc += word;
    return acc;
  }, "");
};

// helper
window.byLastName = function (a, b) {
  if (a.artistDetails.lastName < b.artistDetails.lastName) {
    return -1;
  }
  if (a.artistDetails.lastName > b.artistDetails.lastName) {
    return 1;
  }
  return 0;
};
})();

/******/ })()
;
//# sourceMappingURL=components.js.map