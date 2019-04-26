/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGenericButtonController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    initWithNibName_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_initWithNibName: P0, _target: P1, _action: P2): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    button<R = NSButton>(): R;
  }
  namespace MSGenericButtonController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSGenericButtonController>(): R;
      new: <R = MSGenericButtonController>() => R;
      buttonWithNibName_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_buttonWithNibName: P0, _target: P1, _action: P2): R;
    }
  }
}

declare const MSGenericButtonController: cocoa.MSGenericButtonController.CLASS;
