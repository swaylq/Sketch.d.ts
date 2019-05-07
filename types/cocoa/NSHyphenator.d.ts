/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHyphenator<T0 = void, T1 = void, T2 = void> extends NSObject {
    getHyphenLocations_inString_wordAtIndex<R = number, P0 = number, P1 = unknown, P2 = number>(_getHyphenLocations: P0, _inString: P1, _wordAtIndex: P2): R;
    getHyphenLocations_inString<R = number, P0 = number, P1 = unknown>(_getHyphenLocations: P0, _inString: P1): R;
    dealloc<R = void>(): R;
  }
  namespace NSHyphenator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSHyphenator>(): R;
      new: <R = NSHyphenator>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSHyphenator: cocoa.NSHyphenator.CLASS;
