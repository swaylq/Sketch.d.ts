/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDataDetector<T0 = void, T1 = void, T2 = void> extends NSRegularExpression {
    numberOfCaptureGroups<R = number>(): R;
    options<R = number>(): R;
    pattern<R = unknown>(): R;
    initWithTypes_error<R = unknown, P0 = number, P1 = unknown>(_initWithTypes: P0, _error: P1): R;
    checkingTypes<R = number>(): R;
  }
  namespace NSDataDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRegularExpression {
      alloc<R = NSDataDetector>(): R;
      new: <R = NSDataDetector>() => R;
      dataDetectorWithTypes_error<R = unknown, P0 = number, P1 = unknown>(_dataDetectorWithTypes: P0, _error: P1): R;
    }
  }
}

declare const NSDataDetector: cocoa.NSDataDetector.CLASS;
