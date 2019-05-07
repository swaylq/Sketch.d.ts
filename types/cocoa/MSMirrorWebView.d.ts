/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorWebView<T0 = void, T1 = void, T2 = void> extends WKWebView {
    hitTest<R = unknown, P0 = CGPoint>(_hitTest: P0): R;
    acceptsFirstResponder<R = boolean>(): R;
  }
  namespace MSMirrorWebView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends WKWebView {
      developerToolsEnabled<R = boolean>(): R;
    }
  }
}

declare const MSMirrorWebView: cocoa.MSMirrorWebView.CLASS;
