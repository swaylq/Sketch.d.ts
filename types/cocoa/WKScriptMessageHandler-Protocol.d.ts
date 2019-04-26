/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WKScriptMessageHandlerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    userContentController_didReceiveScriptMessage<R = void, P0 = WKUserContentController, P1 = WKScriptMessage>(_userContentController: P0, _didReceiveScriptMessage: P1): R;
  }
  namespace WKScriptMessageHandlerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
