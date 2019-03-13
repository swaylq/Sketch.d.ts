/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLogicalTest<T = any> extends NSScriptWhoseTest {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initNotTestWithTest<R = unknown, P0 = unknown>(_initNotTestWithTest: P0): R;
    initOrTestWithTests<R = unknown, P0 = unknown>(_initOrTestWithTests: P0): R;
    initAndTestWithTests<R = unknown, P0 = unknown>(_initAndTestWithTests: P0): R;
    _initFromRecord<R = unknown, P0 = unknown>(__initFromRecord: P0): R;
  }
  namespace classes {
    export interface NSLogicalTest<T = any> extends NSScriptWhoseTest {
      alloc<R = NSLogicalTest>(): R;
      new: <R = NSLogicalTest>() => R;
      _logicalTestFromDescriptor<R = unknown, P0 = unknown>(__logicalTestFromDescriptor: P0): R;
    }
  }
}

declare const NSLogicalTest: cocoa.classes.NSLogicalTest;
