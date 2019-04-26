/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProcessInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    _reactivateActivity<R = void, P0 = unknown>(__reactivateActivity: P0): R;
    _supportsAutomaticTermination<R = boolean>(): R;
    _setShouldRelaunchDueToAutomaticTerminationStateChangedHandler<R = void, P0 = CDUnknownBlockType>(__setShouldRelaunchDueToAutomaticTerminationStateChangedHandler: P0): R;
    _enableAutomaticTerminationSupport<R = void>(): R;
    _isAutoQuittable<R = boolean>(): R;
    _shouldDisableRelaunchOnLoginDueToAutomaticTermination<R = boolean>(): R;
    enableAutomaticTermination<R = void>(): R;
    disableAutomaticTermination<R = void>(): R;
    _enableAutomaticTerminationOnly<R = void, P0 = unknown>(__enableAutomaticTerminationOnly: P0): R;
    _disableAutomaticTerminationOnly<R = void, P0 = unknown>(__disableAutomaticTerminationOnly: P0): R;
    _enableAutomaticTerminationAlreadyLocked<R = void, P0 = unknown>(__enableAutomaticTerminationAlreadyLocked: P0): R;
    _disableAutomaticTerminationAlreadyLocked<R = void, P0 = unknown>(__disableAutomaticTerminationAlreadyLocked: P0): R;
    _suddenTerminationDisablingCount<R = number>(): R;
    _exitWhenSuddenTerminationEnabledWithStatus<R = void, P0 = number>(__exitWhenSuddenTerminationEnabledWithStatus: P0): R;
    _exitIfSuddenTerminationEnabledWithStatus<R = void, P0 = number>(__exitIfSuddenTerminationEnabledWithStatus: P0): R;
    enableSuddenTermination<R = void>(): R;
    disableSuddenTermination<R = void>(): R;
    isTranslated<R = boolean>(): R;
    isOperatingSystemAtLeastVersion<R = boolean, P0 = unknown>(_isOperatingSystemAtLeastVersion: P0): R;
    operatingSystemName<R = unknown>(): R;
    operatingSystem<R = number>(): R;
    userHomeDirectory<R = unknown>(): R;
    setArguments<R = void, P0 = unknown>(_setArguments: P0): R;
    _registerForHardwareStateNotifications<R = void>(): R;
    dealloc<R = void>(): R;
    performExpiringActivityWithReason_usingBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_performExpiringActivityWithReason: P0, _usingBlock: P1): R;
    performActivityWithOptions_reason_usingBlock<R = void, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(_performActivityWithOptions: P0, _reason: P1, _usingBlock: P2): R;
    performActivityWithOptions_reason_block<R = void, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(_performActivityWithOptions: P0, _reason: P1, _block: P2): R;
    endActivity<R = void, P0 = unknown>(_endActivity: P0): R;
    beginActivityWithOptions_reason<R = unknown, P0 = number, P1 = unknown>(_beginActivityWithOptions: P0, _reason: P1): R;
    endSystemBehaviorSuspension<R = void, P0 = unknown>(_endSystemBehaviorSuspension: P0): R;
    beginSuspensionOfSystemBehaviors_reason<R = unknown, P0 = number, P1 = unknown>(_beginSuspensionOfSystemBehaviors: P0, _reason: P1): R;
    isLowPowerModeEnabled<R = boolean>(): R;
    thermalState<R = number>(): R;
    automaticTerminationSupportEnabled<R = boolean>(): R;
    setAutomaticTerminationSupportEnabled<R = void, P0 = boolean>(_v: P0): R;
    systemUptime<R = number>(): R;
    physicalMemory<R = number>(): R;
    activeProcessorCount<R = number>(): R;
    processorCount<R = number>(): R;
    operatingSystemVersion<R = unknown>(): R;
    operatingSystemVersionString<R = NSString>(): R;
    userName<R = NSString>(): R;
    globallyUniqueString<R = NSString>(): R;
    processIdentifier<R = number>(): R;
    processName<R = NSString>(): R;
    setProcessName<R = void, P0 = NSString>(_v: P0): R;
    hostName<R = NSString>(): R;
    arguments<R = NSArray>(): R;
    environment<R = NSDictionary>(): R;
    fullUserName<R = NSString>(): R;
  }
  namespace NSProcessInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSProcessInfo>(): R;
      new: <R = NSProcessInfo>() => R;
      processInfo<R = unknown>(): R;
    }
  }
}

declare const NSProcessInfo: cocoa.NSProcessInfo.CLASS;
