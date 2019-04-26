/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpecifierTest<T0 = void, T1 = void, T2 = void> extends NSScriptWhoseTest {
    description<R = unknown>(): R;
    _testWithComparisonOperator_object1_object2<R = boolean, P0 = number, P1 = unknown, P2 = unknown>(__testWithComparisonOperator: P0, _object1: P1, _object2: P2): R;
    dealloc<R = void>(): R;
    initWithObjectSpecifier_comparisonOperator_testObject<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithObjectSpecifier: P0, _comparisonOperator: P1, _testObject: P2): R;
    _initFromRecord<R = unknown, P0 = unknown>(__initFromRecord: P0): R;
  }
  namespace NSSpecifierTest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptWhoseTest {
      alloc<R = NSSpecifierTest>(): R;
      new: <R = NSSpecifierTest>() => R;
      _specifierTestFromDescriptor<R = unknown, P0 = unknown>(__specifierTestFromDescriptor: P0): R;
    }
  }
}

declare const NSSpecifierTest: cocoa.NSSpecifierTest.CLASS;
