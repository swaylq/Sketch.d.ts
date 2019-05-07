/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTask<T0 = void, T1 = void, T2 = void> extends NSObject {
    currentDirectoryPath<R = unknown>(): R;
    launchPath<R = unknown>(): R;
    suspendCount<R = number>(): R;
    resume<R = boolean>(): R;
    suspend<R = boolean>(): R;
    terminate<R = void>(): R;
    interrupt<R = void>(): R;
    setLaunchPath<R = void, P0 = unknown>(_setLaunchPath: P0): R;
    setCurrentDirectoryPath<R = void, P0 = unknown>(_setCurrentDirectoryPath: P0): R;
    launchAndReturnError<R = boolean, P0 = unknown>(_launchAndReturnError: P0): R;
    launch<R = void>(): R;
    qualityOfService<R = number>(): R;
    setQualityOfService<R = void, P0 = number>(_v: P0): R;
    standardError<R = unknown>(): R;
    setStandardError<R = void, P0 = unknown>(_v: P0): R;
    standardOutput<R = unknown>(): R;
    setStandardOutput<R = void, P0 = unknown>(_v: P0): R;
    standardInput<R = unknown>(): R;
    setStandardInput<R = void, P0 = unknown>(_v: P0): R;
    arguments<R = NSArray>(): R;
    setArguments<R = void, P0 = NSArray>(_v: P0): R;
    environment<R = NSDictionary>(): R;
    setEnvironment<R = void, P0 = NSDictionary>(_v: P0): R;
    processIdentifier<R = number>(): R;
    executableURL<R = NSURL>(): R;
    setExecutableURL<R = void, P0 = NSURL>(_v: P0): R;
    currentDirectoryURL<R = NSURL>(): R;
    setCurrentDirectoryURL<R = void, P0 = NSURL>(_v: P0): R;
    running<R = boolean>(): R;
    terminationReason<R = number>(): R;
    terminationStatus<R = number>(): R;
    terminationHandler<R = CDUnknownBlockType>(): R;
    setTerminationHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace NSTask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTask>(): R;
      new: <R = NSTask>() => R;
      launchedTaskWithExecutableURL_arguments_error_terminationHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_launchedTaskWithExecutableURL: P0, _arguments: P1, _error: P2, _terminationHandler: P3): R;
      launchedTaskWithLaunchPath_arguments<R = unknown, P0 = unknown, P1 = unknown>(_launchedTaskWithLaunchPath: P0, _arguments: P1): R;
      launchedTaskWithDictionary<R = unknown, P0 = unknown>(_launchedTaskWithDictionary: P0): R;
      currentTaskDictionary<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSTask: cocoa.NSTask.CLASS;
