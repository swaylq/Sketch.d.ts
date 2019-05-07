/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideManagementController<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    items<R = NSMutableArray>(): R;
    setItems<R = void, P0 = NSMutableArray>(_v: P0): R;
    master<R = MSSymbolMaster>(): R;
    setMaster<R = void, P0 = MSSymbolMaster>(_v: P0): R;
  }
  namespace MSOverrideManagementController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSOverrideManagementController>(): R;
      new: <R = MSOverrideManagementController>() => R;
    }
  }
}

declare const MSOverrideManagementController: cocoa.MSOverrideManagementController.CLASS;
