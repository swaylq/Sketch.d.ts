/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxMaterialCapableCustomView<T0 = void, T1 = void, T2 = void> extends NSView, _NSBoxCustomViewProtocol {
    _updateSubviews<R = void>(): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
    borderWidth<R = number>(): R;
    setBorderWidth<R = void, P0 = number>(_v: P0): R;
    borderColor<R = NSColor>(): R;
    setBorderColor<R = void, P0 = NSColor>(_v: P0): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSBoxMaterialCapableCustomView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, _NSBoxCustomViewProtocol {
      alloc<R = _NSBoxMaterialCapableCustomView>(): R;
      new: <R = _NSBoxMaterialCapableCustomView>() => R;
    }
  }
}
