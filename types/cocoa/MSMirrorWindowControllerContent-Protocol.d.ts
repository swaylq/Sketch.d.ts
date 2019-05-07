/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorWindowControllerContentProtocol<T0 = void, T1 = void, T2 = void> {
    webView<R = WKWebView>(): R;
    setWebView<R = void, P0 = WKWebView>(_v: P0): R;
  }
  namespace MSMirrorWindowControllerContentProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
