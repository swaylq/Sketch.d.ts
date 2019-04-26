/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHProgressSheet<T0 = void, T1 = void, T2 = void> extends CHSheetController {
    setIndeterminate<R = void, P0 = boolean>(_setIndeterminate: P0): R;
    setShowsCancelButton<R = void, P0 = boolean>(_setShowsCancelButton: P0): R;
    setSubtitle<R = void, P0 = unknown>(_setSubtitle: P0): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    isMaximum<R = boolean>(): R;
    setMessage<R = void, P0 = unknown>(_setMessage: P0): R;
    incrementProgressBy<R = void, P0 = number>(_incrementProgressBy: P0): R;
    incrementProgress<R = void>(): R;
    setProgressMaximum<R = void, P0 = number>(_setProgressMaximum: P0): R;
    awakeFromNib<R = void>(): R;
    value<R = number>(): R;
    setValue<R = void, P0 = number>(_v: P0): R;
    maximum<R = number>(): R;
    setMaximum<R = void, P0 = number>(_v: P0): R;
  }
  namespace CHProgressSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController {
      alloc<R = CHProgressSheet>(): R;
      new: <R = CHProgressSheet>() => R;
    }
  }
}

declare const CHProgressSheet: cocoa.CHProgressSheet.CLASS;
