/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptWhoseTest<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    isTrue<R = boolean>(): R;
  }
  namespace NSScriptWhoseTest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSScriptWhoseTest>(): R;
      new: <R = NSScriptWhoseTest>() => R;
    }
  }
}

declare const NSScriptWhoseTest: cocoa.NSScriptWhoseTest.CLASS;
