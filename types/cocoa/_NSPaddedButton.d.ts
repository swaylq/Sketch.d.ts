/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPaddedButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    stringsForLength<R = NSArray>(): R;
    setStringsForLength<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace _NSPaddedButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = _NSPaddedButton>(): R;
      new: <R = _NSPaddedButton>() => R;
    }
  }
}
