/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRunningApplication<T0 = void, T1 = void, T2 = void> extends NSObject {
    terminate<R = boolean>(): R;
    forceTerminate<R = boolean>(): R;
    _isLSStopped<R = boolean>(): R;
    _isProxiedByTalagent<R = boolean>(): R;
    activateWithOptions<R = boolean, P0 = number>(_activateWithOptions: P0): R;
    unhide<R = boolean>(): R;
    hide<R = boolean>(): R;
    _performWithPSN<R = boolean, P0 = CDUnknownBlockType>(__performWithPSN: P0): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    _hasASN<R = boolean, P0 = __LSASN>(__hasASN: P0): R;
    dealloc<R = void>(): R;
    _initDeadWithLSDictionary_forASN<R = unknown, P0 = __CFDictionary, P1 = __LSASN>(__initDeadWithLSDictionary: P0, _forASN: P1): R;
    initWithApplicationSerialNumber<R = unknown, P0 = __LSASN>(_initWithApplicationSerialNumber: P0): R;
    _fetchStaticInformationWithAtLeastKey<R = void, P0 = __CFString>(__fetchStaticInformationWithAtLeastKey: P0): R;
    _applyInformationFromLSDictionary_includeDynamicProperties<R = void, P0 = unknown, P1 = boolean>(__applyInformationFromLSDictionary: P0, _includeDynamicProperties: P1): R;
    _reasonThatQuittingWillBeNoisyOrLoseData<R = unknown>(): R;
    _quittingWillBeNoisyOrLoseData<R = boolean>(): R;
    _updateOrStaleProperty<R = void, P0 = number>(__updateOrStaleProperty: P0): R;
    _preserveStaleDynamicPropertiesForRemainderOfRunLoop<R = void>(): R;
    _preservingStaleProperties<R = boolean>(): R;
    _fetchDynamicPropertiesIfNecessaryOrAppSeedIsOutOfDate<R = void>(): R;
    _fetchDynamicPropertiesIfNecessary<R = void>(): R;
    _fetchDynamicProperties<R = void>(): R;
    applyPendingPropertyChanges<R = boolean>(): R;
    _updateActiveAndMenuBarOwnerProperties<R = void>(): R;
    _applyPropertyChanges_fromDictionary<R = void, P0 = number, P1 = __CFDictionary>(__applyPropertyChanges: P0, _fromDictionary: P1): R;
    _fetchValueForKey<R = unknown, P0 = void>(__fetchValueForKey: P0): R;
    _getProcessSerialNumber<R = boolean, P0 = ProcessSerialNumber>(__getProcessSerialNumber: P0): R;
    applicationSerialNumber<R = __LSASN>(): R;
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    _isAppPropertyUpdatedByLSNotifications<R = boolean, P0 = number>(__isAppPropertyUpdatedByLSNotifications: P0): R;
    _checkForUnecessaryLSNotifications<R = void>(): R;
    _updateObservationMask<R = void>(): R;
    _changeObservingNotificationMask_to<R = void, P0 = number, P1 = boolean>(__changeObservingNotificationMask: P0, _to: P1): R;
    _observeChangeInKey_withDataRef<R = void, P0 = number, P1 = void>(__observeChangeInKey: P0, _withDataRef: P1): R;
    _postWillOrDidChangeNotificationsForKeyIndex_isWill<R = void, P0 = number, P1 = boolean>(__postWillOrDidChangeNotificationsForKeyIndex: P0, _isWill: P1): R;
    executableArchitecture<R = number>(): R;
    launchDate<R = NSDate>(): R;
    processIdentifier<R = number>(): R;
    icon<R = NSImage>(): R;
    executableURL<R = NSURL>(): R;
    bundleURL<R = NSURL>(): R;
    bundleIdentifier<R = NSString>(): R;
    localizedName<R = NSString>(): R;
    activationPolicy<R = number>(): R;
    ownsMenuBar<R = boolean>(): R;
    active<R = boolean>(): R;
    hidden<R = boolean>(): R;
    finishedLaunching<R = boolean>(): R;
    terminated<R = boolean>(): R;
  }
  namespace NSRunningApplication {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSRunningApplication>(): R;
      new: <R = NSRunningApplication>() => R;
      terminateAutomaticallyTerminableApplications<R = void>(): R;
      _deactivateCurrentAppAndCheckIfFrontReservationIsAvailable<R = boolean>(): R;
      currentApplication<R = unknown>(): R;
      runningApplicationWithAuditToken<R = unknown, P0 = unknown>(_runningApplicationWithAuditToken: P0): R;
      runningApplicationWithProcessIdentifier<R = unknown, P0 = number>(_runningApplicationWithProcessIdentifier: P0): R;
      runningApplicationsWithBundleIdentifier<R = unknown, P0 = unknown>(_runningApplicationsWithBundleIdentifier: P0): R;
      _TALTerminatedApplications<R = unknown>(): R;
      _allApplications<R = unknown>(): R;
      _allRunningApplications<R = unknown>(): R;
      _transformASNArrayToAppArrayWithRelease<R = unknown, P0 = __CFArray>(__transformASNArrayToAppArrayWithRelease: P0): R;
      initialize<R = void>(): R;
      _dumpRunningApplicationObservationInfo<R = void>(): R;
    }
  }
}

declare const NSRunningApplication: cocoa.NSRunningApplication.CLASS;
