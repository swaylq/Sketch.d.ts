/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileLocator<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    url<R = unknown>(): R;
    standardizedPath<R = unknown>(): R;
    specifier<R = unknown>(): R;
    properties<R = unknown>(): R;
    bestLocationRep<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    initWithSpecifier<R = unknown, P0 = unknown>(_initWithSpecifier: P0): R;
    initWithProperties<R = unknown, P0 = unknown>(_initWithProperties: P0): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    initWithBestLocationRep<R = unknown, P0 = unknown>(_initWithBestLocationRep: P0): R;
  }
  namespace NSFileLocator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSFileLocator>(): R;
      new: <R = NSFileLocator>() => R;
      bestLocationRep_matchesBestLocationRep<R = boolean, P0 = unknown, P1 = unknown>(_bestLocationRep: P0, _matchesBestLocationRep: P1): R;
      bestLocationRepFromURL<R = unknown, P0 = unknown>(_bestLocationRepFromURL: P0): R;
      bestLocationRepFromPath<R = unknown, P0 = unknown>(_bestLocationRepFromPath: P0): R;
      _stringByReplacingChar_withChar_inString<R = unknown, P0 = number, P1 = number, P2 = unknown>(__stringByReplacingChar: P0, _withChar: P1, _inString: P2): R;
      _shouldUseAliasToLocate<R = boolean, P0 = FSRef>(__shouldUseAliasToLocate: P0): R;
    }
  }
}

declare const NSFileLocator: cocoa.NSFileLocator.CLASS;
