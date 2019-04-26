/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAKSerializerStream<T0 = void, T1 = void, T2 = void> extends NSObject, NSSerializerStreamProtocol {}
  namespace NSAKSerializerStream {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSerializerStreamProtocol {
      alloc<R = NSAKSerializerStream>(): R;
      new: <R = NSAKSerializerStream>() => R;
    }
  }
}

declare const NSAKSerializerStream: cocoa.NSAKSerializerStream.CLASS;
