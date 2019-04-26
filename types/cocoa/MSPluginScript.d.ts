/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginScript<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    reload<R = void>(): R;
    loadWithError<R = boolean, P0 = unknown>(_loadWithError: P0): R;
    initWithString_filename<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _filename: P1): R;
    initWithURL_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithURL: P0, _error: P1): R;
    script<R = NSString>(): R;
    filename<R = NSString>(): R;
    URL<R = NSURL>(): R;
  }
  namespace MSPluginScript {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPluginScript>(): R;
      new: <R = MSPluginScript>() => R;
    }
  }
}

declare const MSPluginScript: cocoa.MSPluginScript.CLASS;
