/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTask<T0 = void, T1 = void, T2 = void> extends NSObject {
    executeWithInterpreter_arguments<R = void, P0 = unknown, P1 = unknown>(_executeWithInterpreter: P0, _arguments: P1): R;
    interpretErrorStatus_withOutput<R = unknown, P0 = number, P1 = unknown>(_interpretErrorStatus: P0, _withOutput: P1): R;
    executeWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_executeWithCompletionHandler: P0): R;
    dealloc<R = void>(): R;
    initWithURL_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithURL: P0, _error: P1): R;
    standardError<R = NSFileHandle>(): R;
    setStandardError<R = void, P0 = NSFileHandle>(_v: P0): R;
    standardOutput<R = NSFileHandle>(): R;
    setStandardOutput<R = void, P0 = NSFileHandle>(_v: P0): R;
    standardInput<R = NSFileHandle>(): R;
    setStandardInput<R = void, P0 = NSFileHandle>(_v: P0): R;
    showsProgressInMenuBar<R = boolean>(): R;
    setShowsProgressInMenuBar<R = void, P0 = boolean>(_v: P0): R;
    scriptURL<R = NSURL>(): R;
  }
  namespace NSUserScriptTask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUserScriptTask>(): R;
      new: <R = NSUserScriptTask>() => R;
      badFileError<R = unknown, P0 = unknown>(_badFileError: P0): R;
      isValidScriptFile_error<R = boolean, P0 = unknown, P1 = unknown>(_isValidScriptFile: P0, _error: P1): R;
    }
  }
}

declare const NSUserScriptTask: cocoa.NSUserScriptTask.CLASS;
