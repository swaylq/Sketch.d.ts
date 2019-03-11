/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlAuxiliary<T = any> extends cocoa.NSObject {
    removeTouchingTooLongTimer<R = void>(): R;
    dealloc<R = void>(): R;
    touchingTooLongTimer<R = cocoa.NSTimer>(): R;
    setTouchingTooLongTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    touchBarRestingMitigation<R = number>(): R;
    setTouchBarRestingMitigation<R = void, P0 = number>(_v: P0): R;
    touchBarInsetMitigation<R = number>(): R;
    setTouchBarInsetMitigation<R = void, P0 = number>(_v: P0): R;
    guardEnabled<R = boolean>(): R;
    setGuardEnabled<R = void, P0 = boolean>(_v: P0): R;
    guardLocked<R = boolean>(): R;
    setGuardLocked<R = void, P0 = boolean>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSControlAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSControlAuxiliary>(): R;
      new: <R = NSControlAuxiliary>() => R;
    }
  }
}

declare const NSControlAuxiliary: cocoa.classes.NSControlAuxiliary;
