/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathStore2<T0 = void, T1 = void, T2 = void> extends NSString {
    hash<R = number>(): R;
    length<R = number>(): R;
  }
  namespace NSPathStore2 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSPathStore2>(): R;
      new: <R = NSPathStore2>() => R;
      pathStoreWithCharacters_length<R = unknown, P0 = number, P1 = number>(_pathStoreWithCharacters: P0, _length: P1): R;
    }
  }
}

declare const NSPathStore2: cocoa.NSPathStore2.CLASS;
