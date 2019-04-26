/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteScanner<T0 = void, T1 = void, T2 = void> extends NSScanner {
    dealloc<R = void>(): R;
    locale<R = unknown>(): R;
    setLocale<R = void, P0 = unknown>(_setLocale: P0): R;
    caseSensitive<R = boolean>(): R;
    setCaseSensitive<R = void, P0 = boolean>(_setCaseSensitive: P0): R;
    charactersToBeSkipped<R = unknown>(): R;
    setCharactersToBeSkipped<R = void, P0 = unknown>(_setCharactersToBeSkipped: P0): R;
    scanLocation<R = number>(): R;
    setScanLocation<R = void, P0 = number>(_setScanLocation: P0): R;
    string<R = unknown>(): R;
  }
  namespace NSConcreteScanner {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScanner {
      alloc<R = NSConcreteScanner>(): R;
      new: <R = NSConcreteScanner>() => R;
    }
  }
}

declare const NSConcreteScanner: cocoa.NSConcreteScanner.CLASS;
