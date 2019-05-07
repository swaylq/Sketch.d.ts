/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWhoseTest<T0 = void, T1 = void, T2 = void> extends NSScriptWhoseTest {}
  namespace NSWhoseTest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptWhoseTest {
      alloc<R = NSWhoseTest>(): R;
      new: <R = NSWhoseTest>() => R;
    }
  }
}

declare const NSWhoseTest: cocoa.NSWhoseTest.CLASS;
