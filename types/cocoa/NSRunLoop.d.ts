/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRunLoop<T0 = void, T1 = void, T2 = void> {
    // + NSRunLoop(NSDisplayLink): 
    removeDisplayLink_forMode<R = void, P0 = unknown, P1 = unknown>(_removeDisplayLink: P0, _forMode: P1): R;
    addDisplayLink_forMode<R = void, P0 = unknown, P1 = unknown>(_addDisplayLink: P0, _forMode: P1): R;
    // + NSRunLoop(NSOrderedPerforming): 
    cancelPerformSelectorsWithTarget<R = void, P0 = unknown>(_cancelPerformSelectorsWithTarget: P0): R;
    cancelPerformSelector_target_argument<R = void, P0 = string, P1 = unknown, P2 = unknown>(_cancelPerformSelector: P0, _target: P1, _argument: P2): R;
    performSelector_target_argument_order_modes<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(_performSelector: P0, _target: P1, _argument: P2, _order: P3, _modes: P4): R;
    // + NSRunLoop(NSRunLoop): 
    performBlock<R = void, P0 = CDUnknownBlockType>(_performBlock: P0): R;
    performInModes_block<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_performInModes: P0, _block: P1): R;
    configureAsServer<R = void>(): R;
    runBeforeDate<R = boolean, P0 = unknown>(_runBeforeDate: P0): R;
    runUntilDate<R = void, P0 = unknown>(_runUntilDate: P0): R;
    run<R = void>(): R;
    runMode_untilDate<R = boolean, P0 = unknown, P1 = unknown>(_runMode: P0, _untilDate: P1): R;
    runMode_beforeDate<R = boolean, P0 = unknown, P1 = unknown>(_runMode: P0, _beforeDate: P1): R;
    acceptInputForMode_beforeDate<R = void, P0 = unknown, P1 = unknown>(_acceptInputForMode: P0, _beforeDate: P1): R;
    _wakeup<R = void>(): R;
    limitDateForMode<R = unknown, P0 = unknown>(_limitDateForMode: P0): R;
    _invalidateTimers<R = void>(): R;
    currentMode<R = unknown>(): R;
    allModes<R = unknown>(): R;
    containsTimer_forMode<R = boolean, P0 = unknown, P1 = unknown>(_containsTimer: P0, _forMode: P1): R;
    timersForMode<R = unknown, P0 = unknown>(_timersForMode: P0): R;
    removeTimer_forMode<R = void, P0 = unknown, P1 = unknown>(_removeTimer: P0, _forMode: P1): R;
    addTimer_forMode<R = void, P0 = unknown, P1 = unknown>(_addTimer: P0, _forMode: P1): R;
    portsForMode<R = unknown, P0 = unknown>(_portsForMode: P0): R;
    containsPort_forMode<R = boolean, P0 = unknown, P1 = unknown>(_containsPort: P0, _forMode: P1): R;
    removePort_forMode<R = void, P0 = unknown, P1 = unknown>(_removePort: P0, _forMode: P1): R;
    addPort_forMode<R = void, P0 = unknown, P1 = unknown>(_addPort: P0, _forMode: P1): R;
    description<R = unknown>(): R;
    getCFRunLoop<R = __CFRunLoop>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    _removePort_forMode<R = void, P0 = unknown, P1 = unknown>(__removePort: P0, _forMode: P1): R;
    _addPort_forMode<R = void, P0 = unknown, P1 = unknown>(__addPort: P0, _forMode: P1): R;
    _containsPort_forMode<R = boolean, P0 = unknown, P1 = unknown>(__containsPort: P0, _forMode: P1): R;
    _portInvalidated<R = void, P0 = unknown>(__portInvalidated: P0): R;
    _enumerateInfoPairsWithBlock<R = void, P0 = CDUnknownBlockType>(__enumerateInfoPairsWithBlock: P0): R;
  }
  namespace NSRunLoop {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSRunLoop(NSRunLoop): 
      mainRunLoop<R = unknown>(): R;
      currentRunLoop<R = unknown>(): R;
      _new<R = unknown, P0 = unknown>(__new: P0): R;
    }
  }
}

declare const NSRunLoop: cocoa.NSRunLoop.CLASS;
