/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorArchivingFactory<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSColorArchivingFactory {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSColorArchivingFactory>(): R;
      new: <R = MSColorArchivingFactory>() => R;
      colorForEncodingColor<R = unknown, P0 = unknown>(_colorForEncodingColor: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSColorArchivingFactory: cocoa.MSColorArchivingFactory.CLASS;
