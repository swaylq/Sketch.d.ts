/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WKNavigationDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    webViewWebContentProcessDidTerminate<R = void, P0 = WKWebView>(_webViewWebContentProcessDidTerminate: P0): R;
    webView_didReceiveAuthenticationChallenge_completionHandler<R = void, P0 = WKWebView, P1 = NSURLAuthenticationChallenge, P2 = CDUnknownBlockType>(_webView: P0, _didReceiveAuthenticationChallenge: P1, _completionHandler: P2): R;
    webView_didFailNavigation_withError<R = void, P0 = WKWebView, P1 = WKNavigation, P2 = NSError>(_webView: P0, _didFailNavigation: P1, _withError: P2): R;
    webView_didFinishNavigation<R = void, P0 = WKWebView, P1 = WKNavigation>(_webView: P0, _didFinishNavigation: P1): R;
    webView_didCommitNavigation<R = void, P0 = WKWebView, P1 = WKNavigation>(_webView: P0, _didCommitNavigation: P1): R;
    webView_didFailProvisionalNavigation_withError<R = void, P0 = WKWebView, P1 = WKNavigation, P2 = NSError>(_webView: P0, _didFailProvisionalNavigation: P1, _withError: P2): R;
    webView_didReceiveServerRedirectForProvisionalNavigation<R = void, P0 = WKWebView, P1 = WKNavigation>(_webView: P0, _didReceiveServerRedirectForProvisionalNavigation: P1): R;
    webView_didStartProvisionalNavigation<R = void, P0 = WKWebView, P1 = WKNavigation>(_webView: P0, _didStartProvisionalNavigation: P1): R;
    webView_decidePolicyForNavigationResponse_decisionHandler<R = void, P0 = WKWebView, P1 = WKNavigationResponse, P2 = CDUnknownBlockType>(_webView: P0, _decidePolicyForNavigationResponse: P1, _decisionHandler: P2): R;
    webView_decidePolicyForNavigationAction_decisionHandler<R = void, P0 = WKWebView, P1 = WKNavigationAction, P2 = CDUnknownBlockType>(_webView: P0, _decidePolicyForNavigationAction: P1, _decisionHandler: P2): R;
  }
  namespace WKNavigationDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
