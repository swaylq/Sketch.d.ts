/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCKeyEventActionTableView<T0 = void, T1 = void, T2 = void> extends NSTableView {
    cxx_destruct<R = void>(): R;
    setTarget_action_forKeyDownEventWithCharacters<R = void, P0 = unknown, P1 = string, P2 = unknown>(_setTarget: P0, _action: P1, _forKeyDownEventWithCharacters: P2): R;
    keyEvents<R = NSMutableDictionary>(): R;
    setKeyEvents<R = void, P0 = NSMutableDictionary>(_v: P0): R;
  }
  namespace BCKeyEventActionTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView {
      alloc<R = BCKeyEventActionTableView>(): R;
      new: <R = BCKeyEventActionTableView>() => R;
    }
  }
}

declare const BCKeyEventActionTableView: cocoa.BCKeyEventActionTableView.CLASS;
