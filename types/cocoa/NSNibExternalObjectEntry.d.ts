/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibExternalObjectEntry<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSNibExternalObjectEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSNibExternalObjectEntry>(): R;
      new: <R = NSNibExternalObjectEntry>() => R;
      entryWithKey_forObject<R = unknown, P0 = unknown, P1 = unknown>(_entryWithKey: P0, _forObject: P1): R;
    }
  }
}

declare const NSNibExternalObjectEntry: cocoa.NSNibExternalObjectEntry.CLASS;
