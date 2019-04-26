/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLDirectoryEnumerator<T0 = void, T1 = void, T2 = void> extends NSDirectoryEnumerator {
    dealloc<R = void>(): R;
    directoryAttributes<R = unknown>(): R;
    fileAttributes<R = unknown>(): R;
    level<R = number>(): R;
    initWithURL_includingPropertiesForKeys_options_errorHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_initWithURL: P0, _includingPropertiesForKeys: P1, _options: P2, _errorHandler: P3): R;
    errorHandler<R = CDUnknownBlockType>(): R;
    setErrorHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace NSURLDirectoryEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDirectoryEnumerator {}
  }
}

declare const NSURLDirectoryEnumerator: cocoa.NSURLDirectoryEnumerator.CLASS;
