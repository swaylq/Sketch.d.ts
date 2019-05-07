/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSActionCell<T0 = void, T1 = void, T2 = void> extends NSCell {
    controlView<R = unknown>(): R;
    setControlView<R = void, P0 = unknown>(_setControlView: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSActionCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCell {
      alloc<R = NSActionCell>(): R;
      new: <R = NSActionCell>() => R;
    }
  }
}

declare const NSActionCell: cocoa.NSActionCell.CLASS;
