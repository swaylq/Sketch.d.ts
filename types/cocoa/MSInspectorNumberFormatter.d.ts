/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorNumberFormatter<T0 = void, T1 = void, T2 = void> extends NSNumberFormatter {}
  namespace MSInspectorNumberFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNumberFormatter {
      alloc<R = MSInspectorNumberFormatter>(): R;
      new: <R = MSInspectorNumberFormatter>() => R;
      standardPercentFormatterWithoutPercentSign<R = unknown>(): R;
      standardPercentFormatter<R = unknown>(): R;
      standardIntegerFormatter<R = unknown>(): R;
      standardFloatFormatter<R = unknown>(): R;
    }
  }
}

declare const MSInspectorNumberFormatter: cocoa.MSInspectorNumberFormatter.CLASS;
