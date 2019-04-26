/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface Mocha<T0 = void, T1 = void, T2 = void> extends NSObject {
    evalString<R = unknown, P0 = NSString>(_evalString: P0): R;
    callFunctionWithName<R = unknown, P0 = NSString>(_callFunctionWithName: P0): R;
    callFunctionWithName_withArguments<R = unknown, P0 = NSString, P1 = unknown>(_callFunctionWithName: P0, _withArguments: P1): R;
    callFunctionWithName_withArgumentsInArray<R = unknown, P0 = NSString, P1 = NSArray>(_callFunctionWithName: P0, _withArgumentsInArray: P1): R;
    isSyntaxValidForString<R = boolean, P0 = NSString>(_isSyntaxValidForString: P0): R;
    loadFrameworkWithName<R = boolean, P0 = NSString>(_loadFrameworkWithName: P0): R;
    loadFrameworkWithName_inDirectory<R = boolean, P0 = NSString, P1 = NSString>(_loadFrameworkWithName: P0, _inDirectory: P1): R;
    loadBridgeSupportFilesAtPath<R = boolean, P0 = NSString>(_loadBridgeSupportFilesAtPath: P0): R;
    addFrameworkSearchPath<R = void, P0 = NSString>(_addFrameworkSearchPath: P0): R;
    insertFrameworkSearchPath_atIndex<R = void, P0 = NSString, P1 = NSUInteger>(_insertFrameworkSearchPath: P0, _atIndex: P1): R;
    removeFrameworkSearchPathAtIndex<R = void, P0 = NSUInteger>(_removeFrameworkSearchPathAtIndex: P0): R;
    garbageCollect<R = void>(): R;
    delegate<R = MochaDelegate>(): R;
    setDelegate<R = void, P0 = MochaDelegate>(_v: P0): R;
    frameworkSearchPaths<R = NSArray>(): R;
    setFrameworkSearchPaths<R = void, P0 = NSArray>(_v: P0): R;
    globalSymbolNames<R = NSArray>(): R;
  }
  namespace Mocha {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = Mocha>(): R;
      new: <R = Mocha>() => R;
      sharedRuntime<R = Mocha>(): R;
    }
  }
}

declare const Mocha: cocoa.Mocha.CLASS;
