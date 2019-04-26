/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAKDeserializerStream<T0 = void, T1 = void, T2 = void> extends NSObject, NSDeserializerStreamProtocol {
    initFromPath<R = unknown, P0 = unknown>(_initFromPath: P0): R;
    dealloc<R = void>(): R;
  }
  namespace NSAKDeserializerStream {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDeserializerStreamProtocol {
      alloc<R = NSAKDeserializerStream>(): R;
      new: <R = NSAKDeserializerStream>() => R;
    }
  }
}

declare const NSAKDeserializerStream: cocoa.NSAKDeserializerStream.CLASS;
