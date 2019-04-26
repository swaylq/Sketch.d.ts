/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTypePopoverProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    dismissPopover<R = void, P0 = unknown>(_dismissPopover: P0): R;
    showPopover<R = void, P0 = unknown>(_showPopover: P0): R;
    isPresented<R = boolean>(): R;
  }
  namespace NSTouchBarItemTypePopoverProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
