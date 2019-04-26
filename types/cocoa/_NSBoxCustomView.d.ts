/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxCustomView<T0 = void, T1 = void, T2 = void> extends NSView, _NSBoxCustomViewProtocol {
    mouseDownCanMoveWindow<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    allowsVibrancy<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
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
  namespace _NSBoxCustomView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, _NSBoxCustomViewProtocol {
      alloc<R = _NSBoxCustomView>(): R;
      new: <R = _NSBoxCustomView>() => R;
    }
  }
}
