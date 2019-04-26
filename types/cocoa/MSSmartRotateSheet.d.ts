/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmartRotateSheet<T0 = void, T1 = void, T2 = void> extends CHSheetController {
    doc<R = unknown>(): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    awakeFromNib<R = void>(): R;
    numberOfCopies<R = number>(): R;
    setNumberOfCopies<R = void, P0 = number>(_v: P0): R;
    explanationLabel<R = NSTextField>(): R;
    setExplanationLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSSmartRotateSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController {
      alloc<R = MSSmartRotateSheet>(): R;
      new: <R = MSSmartRotateSheet>() => R;
    }
  }
}

declare const MSSmartRotateSheet: cocoa.MSSmartRotateSheet.CLASS;
