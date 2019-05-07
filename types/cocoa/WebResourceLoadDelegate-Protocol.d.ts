/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface WebResourceLoadDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    webView_plugInFailedWithError_dataSource<R = void, P0 = WebView, P1 = NSError, P2 = WebDataSource>(_webView: P0, _plugInFailedWithError: P1, _dataSource: P2): R;
    webView_resource_didFailLoadingWithError_fromDataSource<R = void, P0 = WebView, P1 = unknown, P2 = NSError, P3 = WebDataSource>(_webView: P0, _resource: P1, _didFailLoadingWithError: P2, _fromDataSource: P3): R;
    webView_resource_didFinishLoadingFromDataSource<R = void, P0 = WebView, P1 = unknown, P2 = WebDataSource>(_webView: P0, _resource: P1, _didFinishLoadingFromDataSource: P2): R;
    webView_resource_didReceiveContentLength_fromDataSource<R = void, P0 = WebView, P1 = unknown, P2 = number, P3 = WebDataSource>(_webView: P0, _resource: P1, _didReceiveContentLength: P2, _fromDataSource: P3): R;
    webView_resource_didReceiveResponse_fromDataSource<R = void, P0 = WebView, P1 = unknown, P2 = NSURLResponse, P3 = WebDataSource>(_webView: P0, _resource: P1, _didReceiveResponse: P2, _fromDataSource: P3): R;
    webView_resource_didCancelAuthenticationChallenge_fromDataSource<R = void, P0 = WebView, P1 = unknown, P2 = NSURLAuthenticationChallenge, P3 = WebDataSource>(_webView: P0, _resource: P1, _didCancelAuthenticationChallenge: P2, _fromDataSource: P3): R;
    webView_resource_didReceiveAuthenticationChallenge_fromDataSource<R = void, P0 = WebView, P1 = unknown, P2 = NSURLAuthenticationChallenge, P3 = WebDataSource>(_webView: P0, _resource: P1, _didReceiveAuthenticationChallenge: P2, _fromDataSource: P3): R;
    webView_resource_willSendRequest_redirectResponse_fromDataSource<R = NSURLRequest, P0 = WebView, P1 = unknown, P2 = NSURLRequest, P3 = NSURLResponse, P4 = WebDataSource>(_webView: P0, _resource: P1, _willSendRequest: P2, _redirectResponse: P3, _fromDataSource: P4): R;
    webView_identifierForInitialRequest_fromDataSource<R = unknown, P0 = WebView, P1 = NSURLRequest, P2 = WebDataSource>(_webView: P0, _identifierForInitialRequest: P1, _fromDataSource: P2): R;
  }
  namespace WebResourceLoadDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
