/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictionaryEntry<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace NSDictionaryEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDictionaryEntry>(): R;
      new: <R = NSDictionaryEntry>() => R;
    }
  }
}

declare const NSDictionaryEntry: cocoa.NSDictionaryEntry.CLASS;
