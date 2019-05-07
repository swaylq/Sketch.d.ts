/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThread<T0 = void, T1 = void, T2 = void> extends NSObject {
    _nq<R = void, P0 = unknown>(__nq: P0): R;
    main<R = void>(): R;
    start<R = void>(): R;
    description<R = unknown>(): R;
    cancel<R = void>(): R;
    _setThreadPriority<R = boolean, P0 = number>(__setThreadPriority: P0): R;
    _endQoSOverride<R = void, P0 = pthread_override_s>(__endQoSOverride: P0): R;
    _beginQoSOverride_relativePriority<R = pthread_override_s, P0 = number, P1 = number>(__beginQoSOverride: P0, _relativePriority: P1): R;
    dealloc<R = void>(): R;
    initWithTarget_selector_object<R = unknown, P0 = unknown, P1 = string, P2 = unknown>(_initWithTarget: P0, _selector: P1, _object: P2): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
    isDying<R = boolean>(): R;
    runLoop<R = unknown>(): R;
    cancelled<R = boolean>(): R;
    finished<R = boolean>(): R;
    executing<R = boolean>(): R;
    isMainThread<R = boolean>(): R;
    threadPriority<R = number>(): R;
    setThreadPriority<R = void, P0 = number>(_v: P0): R;
    qualityOfService<R = number>(): R;
    setQualityOfService<R = void, P0 = number>(_v: P0): R;
    stackSize<R = number>(): R;
    setStackSize<R = void, P0 = number>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    threadDictionary<R = NSMutableDictionary>(): R;
  }
  namespace NSThread {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSThread>(): R;
      new: <R = NSThread>() => R;
      detachNewThreadWithBlock<R = void, P0 = CDUnknownBlockType>(_detachNewThreadWithBlock: P0): R;
      detachNewThreadSelector_toTarget_withObject<R = void, P0 = string, P1 = unknown, P2 = unknown>(_detachNewThreadSelector: P0, _toTarget: P1, _withObject: P2): R;
      exit<R = void>(): R;
      currentThread<R = unknown>(): R;
      mainThread<R = unknown>(): R;
      callStackSymbols<R = unknown>(): R;
      callStackReturnAddresses<R = unknown>(): R;
      sleepForTimeInterval<R = void, P0 = number>(_sleepForTimeInterval: P0): R;
      sleepUntilDate<R = void, P0 = unknown>(_sleepUntilDate: P0): R;
      setThreadPriority<R = boolean, P0 = number>(_setThreadPriority: P0): R;
      threadPriority<R = number>(): R;
      isMultiThreaded<R = boolean>(): R;
      isMainThread<R = boolean>(): R;
    }
  }
}

declare const NSThread: cocoa.NSThread.CLASS;
