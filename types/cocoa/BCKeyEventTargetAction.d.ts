/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCKeyEventTargetAction<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_initWithTarget: P0, _action: P1): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = NSObject>(): R;
    setTarget<R = void, P0 = NSObject>(_v: P0): R;
  }
  namespace BCKeyEventTargetAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCKeyEventTargetAction>(): R;
      new: <R = BCKeyEventTargetAction>() => R;
    }
  }
}

declare const BCKeyEventTargetAction: cocoa.BCKeyEventTargetAction.CLASS;
