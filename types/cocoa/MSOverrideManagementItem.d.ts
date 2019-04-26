/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideManagementItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithAvailableOverride_onMaster<R = unknown, P0 = unknown, P1 = unknown>(_initWithAvailableOverride: P0, _onMaster: P1): R;
    availableOverride<R = MSAvailableOverride>(): R;
    setAvailableOverride<R = void, P0 = MSAvailableOverride>(_v: P0): R;
    symbolMaster<R = MSSymbolMaster>(): R;
    setSymbolMaster<R = void, P0 = MSSymbolMaster>(_v: P0): R;
    indentationLevel<R = number>(): R;
    setIndentationLevel<R = void, P0 = number>(_v: P0): R;
    title<R = NSString>(): R;
  }
  namespace MSOverrideManagementItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSOverrideManagementItem>(): R;
      new: <R = MSOverrideManagementItem>() => R;
    }
  }
}

declare const MSOverrideManagementItem: cocoa.MSOverrideManagementItem.CLASS;
