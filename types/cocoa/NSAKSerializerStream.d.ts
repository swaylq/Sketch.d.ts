/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAKSerializerStream<T = any> extends cocoa.NSObject, cocoa.NSSerializerStreamProtocol {
    writeToPath_safely<R = boolean, P0 = unknown, P1 = boolean>(_writeToPath: P0, _safely: P1): R;
  }
  namespace classes {
    export interface NSAKSerializerStream<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSerializerStreamProtocol {
      alloc<R = NSAKSerializerStream>(): R;
      new: <R = NSAKSerializerStream>() => R;
    }
  }
}

declare const NSAKSerializerStream: cocoa.classes.NSAKSerializerStream;
