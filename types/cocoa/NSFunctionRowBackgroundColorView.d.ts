/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowBackgroundColorView<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
    _systemColorsDidChange<R = void, P0 = unknown>(__systemColorsDidChange: P0): R;
    ignoresTouchEvents<R = boolean>(): R;
    setIgnoresTouchEvents<R = void, P0 = boolean>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFunctionRowBackgroundColorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol {
      alloc<R = NSFunctionRowBackgroundColorView>(): R;
      new: <R = NSFunctionRowBackgroundColorView>() => R;
    }
  }
}

declare const NSFunctionRowBackgroundColorView: cocoa.NSFunctionRowBackgroundColorView.CLASS;
