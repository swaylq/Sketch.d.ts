/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModalInputSheet<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    runPanelWithNibName_ofType_initialString_label<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_runPanelWithNibName: P0, _ofType: P1, _initialString: P2, _label: P3): R;
    dealloc<R = void>(): R;
    numberFieldBinding<R = number>(): R;
    setNumberFieldBinding<R = void, P0 = number>(_v: P0): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSModalInputSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol {
      alloc<R = MSModalInputSheet>(): R;
      new: <R = MSModalInputSheet>() => R;
    }
  }
}

declare const MSModalInputSheet: cocoa.MSModalInputSheet.CLASS;
