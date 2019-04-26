/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteTask<T0 = void, T1 = void, T2 = void> extends NSTask {
    setStartsNewProcessGroup<R = void, P0 = boolean>(_setStartsNewProcessGroup: P0): R;
    processIdentifier<R = number>(): R;
    _procid<R = number>(): R;
    dealloc<R = void>(): R;
    terminateTask<R = void>(): R;
    taskDictionary<R = unknown>(): R;
    setTaskDictionary<R = void, P0 = unknown>(_setTaskDictionary: P0): R;
    setStandardError<R = void, P0 = unknown>(_setStandardError: P0): R;
    setStandardOutput<R = void, P0 = unknown>(_setStandardOutput: P0): R;
    setStandardInput<R = void, P0 = unknown>(_setStandardInput: P0): R;
    standardError<R = unknown>(): R;
    standardOutput<R = unknown>(): R;
    standardInput<R = unknown>(): R;
    preferredArchitectures<R = unknown>(): R;
    arguments<R = unknown>(): R;
    environment<R = unknown>(): R;
    setEnvironment<R = void, P0 = unknown>(_setEnvironment: P0): R;
    setPreferredArchitectures<R = void, P0 = unknown>(_setPreferredArchitectures: P0): R;
    setArguments<R = void, P0 = unknown>(_setArguments: P0): R;
    _withTaskDictionary<R = void, P0 = CDUnknownBlockType>(__withTaskDictionary: P0): R;
    waitUntilExit<R = void>(): R;
    launchWithDictionary_error<R = boolean, P0 = unknown, P1 = unknown>(_launchWithDictionary: P0, _error: P1): R;
    isRunning<R = boolean>(): R;
    terminationReason<R = number>(): R;
    _platformExitInformation<R = number>(): R;
    terminationStatus<R = number>(): R;
    setTerminationHandler<R = void, P0 = CDUnknownBlockType>(_setTerminationHandler: P0): R;
    _setTerminationHandler<R = void, P0 = CDUnknownBlockType>(__setTerminationHandler: P0): R;
    terminationHandler<R = CDUnknownBlockType>(): R;
    setQualityOfService<R = void, P0 = number>(_setQualityOfService: P0): R;
    qualityOfService<R = number>(): R;
  }
  namespace NSConcreteTask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTask {
      alloc<R = NSConcreteTask>(): R;
      new: <R = NSConcreteTask>() => R;
    }
  }
}

declare const NSConcreteTask: cocoa.NSConcreteTask.CLASS;
