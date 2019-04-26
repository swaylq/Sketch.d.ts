/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableAssociation<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    dealloc<R = void>(): R;
    column<R = number>(): R;
    setColumn<R = void, P0 = number>(_v: P0): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSTableAssociation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSTableAssociation>(): R;
      new: <R = NSTableAssociation>() => R;
    }
  }
}

declare const NSTableAssociation: cocoa.NSTableAssociation.CLASS;
