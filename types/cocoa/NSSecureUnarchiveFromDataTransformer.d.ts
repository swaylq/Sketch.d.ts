/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureUnarchiveFromDataTransformer<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
    description<R = unknown>(): R;
  }
  namespace NSSecureUnarchiveFromDataTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = NSSecureUnarchiveFromDataTransformer>(): R;
      new: <R = NSSecureUnarchiveFromDataTransformer>() => R;
      allowedTopLevelClasses<R = unknown>(): R;
    }
  }
}

declare const NSSecureUnarchiveFromDataTransformer: cocoa.NSSecureUnarchiveFromDataTransformer.CLASS;
