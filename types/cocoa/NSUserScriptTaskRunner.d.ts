/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTaskRunner<T0 = void, T1 = void, T2 = void> extends NSObject, NSUserScriptTaskRunnerProtocol {
    isSanitaryArgumentList_forInterpreter<R = boolean, P0 = unknown, P1 = unknown>(_isSanitaryArgumentList: P0, _forInterpreter: P1): R;
    isValidScriptPath<R = boolean, P0 = unknown>(_isValidScriptPath: P0): R;
    dealloc<R = void>(): R;
    initWithConnection<R = unknown, P0 = unknown>(_initWithConnection: P0): R;
  }
  namespace NSUserScriptTaskRunner {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSUserScriptTaskRunnerProtocol {
      alloc<R = NSUserScriptTaskRunner>(): R;
      new: <R = NSUserScriptTaskRunner>() => R;
    }
  }
}

declare const NSUserScriptTaskRunner: cocoa.NSUserScriptTaskRunner.CLASS;
