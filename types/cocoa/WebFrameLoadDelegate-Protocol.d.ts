/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WebFrameLoadDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    webView_didCreateJavaScriptContext_forFrame<R = void, P0 = WebView, P1 = JSContext, P2 = WebFrame>(_webView: P0, _didCreateJavaScriptContext: P1, _forFrame: P2): R;
    webView_windowScriptObjectAvailable<R = void, P0 = WebView, P1 = WebScriptObject>(_webView: P0, _windowScriptObjectAvailable: P1): R;
    webView_didClearWindowObject_forFrame<R = void, P0 = WebView, P1 = WebScriptObject, P2 = WebFrame>(_webView: P0, _didClearWindowObject: P1, _forFrame: P2): R;
    webView_willCloseFrame<R = void, P0 = WebView, P1 = WebFrame>(_webView: P0, _willCloseFrame: P1): R;
    webView_didCancelClientRedirectForFrame<R = void, P0 = WebView, P1 = WebFrame>(_webView: P0, _didCancelClientRedirectForFrame: P1): R;
    webView_willPerformClientRedirectToURL_delay_fireDate_forFrame<R = void, P0 = WebView, P1 = NSURL, P2 = number, P3 = NSDate, P4 = WebFrame>(_webView: P0, _willPerformClientRedirectToURL: P1, _delay: P2, _fireDate: P3, _forFrame: P4): R;
    webView_didChangeLocationWithinPageForFrame<R = void, P0 = WebView, P1 = WebFrame>(_webView: P0, _didChangeLocationWithinPageForFrame: P1): R;
    webView_didFailLoadWithError_forFrame<R = void, P0 = WebView, P1 = NSError, P2 = WebFrame>(_webView: P0, _didFailLoadWithError: P1, _forFrame: P2): R;
    webView_didFinishLoadForFrame<R = void, P0 = WebView, P1 = WebFrame>(_webView: P0, _didFinishLoadForFrame: P1): R;
    webView_didReceiveIcon_forFrame<R = void, P0 = WebView, P1 = NSImage, P2 = WebFrame>(_webView: P0, _didReceiveIcon: P1, _forFrame: P2): R;
    webView_didReceiveTitle_forFrame<R = void, P0 = WebView, P1 = NSString, P2 = WebFrame>(_webView: P0, _didReceiveTitle: P1, _forFrame: P2): R;
    webView_didCommitLoadForFrame<R = void, P0 = WebView, P1 = WebFrame>(_webView: P0, _didCommitLoadForFrame: P1): R;
    webView_didFailProvisionalLoadWithError_forFrame<R = void, P0 = WebView, P1 = NSError, P2 = WebFrame>(_webView: P0, _didFailProvisionalLoadWithError: P1, _forFrame: P2): R;
    webView_didReceiveServerRedirectForProvisionalLoadForFrame<R = void, P0 = WebView, P1 = WebFrame>(_webView: P0, _didReceiveServerRedirectForProvisionalLoadForFrame: P1): R;
    webView_didStartProvisionalLoadForFrame<R = void, P0 = WebView, P1 = WebFrame>(_webView: P0, _didStartProvisionalLoadForFrame: P1): R;
  }
  namespace WebFrameLoadDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
