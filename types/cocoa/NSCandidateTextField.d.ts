/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    setSelected<R = void, P0 = boolean>(_setSelected: P0): R;
    setAttributedCorrection<R = void, P0 = unknown>(_setAttributedCorrection: P0): R;
    trimOnRight<R = boolean>(): R;
    setTrimOnRight<R = void, P0 = boolean>(_v: P0): R;
    trimOnLeft<R = boolean>(): R;
    setTrimOnLeft<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSCandidateTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSCandidateTextField>(): R;
      new: <R = NSCandidateTextField>() => R;
    }
  }
}

declare const NSCandidateTextField: cocoa.NSCandidateTextField.CLASS;
