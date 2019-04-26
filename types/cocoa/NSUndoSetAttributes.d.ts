/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoSetAttributes<T0 = void, T1 = void, T2 = void> extends NSUndoTextOperation {}
  namespace NSUndoSetAttributes {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUndoTextOperation {
      alloc<R = NSUndoSetAttributes>(): R;
      new: <R = NSUndoSetAttributes>() => R;
    }
  }
}

declare const NSUndoSetAttributes: cocoa.NSUndoSetAttributes.CLASS;
