/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGoogleAnalyticsWrapper<T0 = void, T1 = void, T2 = void> extends NSObject, WebFrameLoadDelegateProtocol, WebResourceLoadDelegateProtocol, WebUIDelegateProtocol {
    cxx_destruct<R = void>(): R;
    webView_addMessageToConsole<R = void, P0 = unknown, P1 = unknown>(_webView: P0, _addMessageToConsole: P1): R;
    callMethod_arguments<R = void, P0 = unknown, P1 = unknown>(_callMethod: P0, _arguments: P1): R;
    sendAction_arguments<R = void, P0 = unknown, P1 = unknown>(_sendAction: P0, _arguments: P1): R;
    stop<R = void>(): R;
    start<R = void>(): R;
    queue<R = NSMutableArray>(): R;
    setQueue<R = void, P0 = NSMutableArray>(_v: P0): R;
    webViewReady<R = boolean>(): R;
    setWebViewReady<R = void, P0 = boolean>(_v: P0): R;
    siteID<R = NSString>(): R;
    setSiteID<R = void, P0 = NSString>(_v: P0): R;
    webView<R = WebView>(): R;
    setWebView<R = void, P0 = WebView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSGoogleAnalyticsWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, WebFrameLoadDelegateProtocol, WebResourceLoadDelegateProtocol, WebUIDelegateProtocol {
      alloc<R = MSGoogleAnalyticsWrapper>(): R;
      new: <R = MSGoogleAnalyticsWrapper>() => R;
    }
  }
}

declare const MSGoogleAnalyticsWrapper: cocoa.MSGoogleAnalyticsWrapper.CLASS;
