/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArchivedColor<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
  }
  namespace MSArchivedColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = MSArchivedColor>(): R;
      new: <R = MSArchivedColor>() => R;
    }
  }
}

declare const MSArchivedColor: cocoa.MSArchivedColor.CLASS;
