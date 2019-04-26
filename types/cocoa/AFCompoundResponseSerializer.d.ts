/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFCompoundResponseSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
    responseSerializers<R = NSArray>(): R;
    setResponseSerializers<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace AFCompoundResponseSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
      alloc<R = AFCompoundResponseSerializer>(): R;
      new: <R = AFCompoundResponseSerializer>() => R;
      compoundSerializerWithResponseSerializers<R = unknown, P0 = unknown>(_compoundSerializerWithResponseSerializers: P0): R;
    }
  }
}

declare const AFCompoundResponseSerializer: cocoa.AFCompoundResponseSerializer.CLASS;
