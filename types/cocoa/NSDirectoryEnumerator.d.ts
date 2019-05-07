/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirectoryEnumerator<T0 = void, T1 = void, T2 = void> extends NSEnumerator {
    skipDescendants<R = void>(): R;
    skipDescendents<R = void>(): R;
    nextObject<R = unknown>(): R;
    level<R = number>(): R;
    directoryAttributes<R = NSDictionary>(): R;
    fileAttributes<R = NSDictionary>(): R;
  }
  namespace NSDirectoryEnumerator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEnumerator {}
  }
}

declare const NSDirectoryEnumerator: cocoa.NSDirectoryEnumerator.CLASS;
