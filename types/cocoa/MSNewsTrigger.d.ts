/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewsTrigger<T0 = void, T1 = void, T2 = void> extends BCSingleton {
    cxx_destruct<R = void>(): R;
    showURL_newsID<R = void, P0 = unknown, P1 = unknown>(_showURL: P0, _newsID: P1): R;
    shouldShowNewsWithID<R = boolean, P0 = unknown>(_shouldShowNewsWithID: P0): R;
    validateResult<R = void, P0 = unknown>(_validateResult: P0): R;
    checkForNews<R = void>(): R;
    url<R = unknown>(): R;
    init<R = unknown>(): R;
    windowController<R = NSWindowController>(): R;
    setWindowController<R = void, P0 = NSWindowController>(_v: P0): R;
    urlSession<R = NSURLSession>(): R;
    setUrlSession<R = void, P0 = NSURLSession>(_v: P0): R;
  }
  namespace MSNewsTrigger {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCSingleton {}
  }
}

declare const MSNewsTrigger: cocoa.MSNewsTrigger.CLASS;
