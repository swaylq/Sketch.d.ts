/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchDevice<T0 = void, T1 = void, T2 = void> extends NSObject, NSHapticFeedbackPerformerProtocol {
    supportsForce<R = boolean>(): R;
    hasActuation<R = boolean>(): R;
    _cancelledTouches<R = unknown>(): R;
    _touchingTouches<R = unknown>(): R;
    _deviceInfo<R = unknown>(): R;
    _preventFlushingContextID_during<R = void, P0 = number, P1 = CDUnknownBlockType>(__preventFlushingContextID: P0, _during: P1): R;
    _flushContextID<R = void, P0 = number>(__flushContextID: P0): R;
    _commandeerDirectTouches_handler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__commandeerDirectTouches: P0, _handler: P1): R;
    _cancelAllTouchesRemoving<R = void, P0 = boolean>(__cancelAllTouchesRemoving: P0): R;
    _cancelTouchesForContextID_removing<R = void, P0 = number, P1 = boolean>(__cancelTouchesForContextID: P0, _removing: P1): R;
    _cancelCommandeeredTouchesForContextId<R = void, P0 = number>(__cancelCommandeeredTouchesForContextId: P0): R;
    _cancelViewTouchesForContextID<R = void, P0 = number>(__cancelViewTouchesForContextID: P0): R;
    _cancelActiveTouchGestureRecognizersForContextID<R = void, P0 = number>(__cancelActiveTouchGestureRecognizersForContextID: P0): R;
    _lastEndedTouches<R = unknown>(): R;
    _setLastEndedTouches<R = void, P0 = unknown>(__setLastEndedTouches: P0): R;
    _cancelledTouchesForContextID<R = unknown, P0 = number>(__cancelledTouchesForContextID: P0): R;
    _beginTouchForIdentity_contextId<R = unknown, P0 = unknown, P1 = number>(__beginTouchForIdentity: P0, _contextId: P1): R;
    _touchingTouchesForContextID<R = unknown, P0 = number>(__touchingTouchesForContextID: P0): R;
    setTouches_forContextID<R = void, P0 = unknown, P1 = number>(_setTouches: P0, _forContextID: P1): R;
    _removeCommandeeredTouchIdentities_forContextID<R = void, P0 = unknown, P1 = number>(__removeCommandeeredTouchIdentities: P0, _forContextID: P1): R;
    _commandeeredTouchIdentitiesForContextID<R = unknown, P0 = number>(__commandeeredTouchIdentitiesForContextID: P0): R;
    _commandeerTouches<R = void, P0 = unknown>(__commandeerTouches: P0): R;
    _commandeerTouchIdentities_forContextID<R = void, P0 = unknown, P1 = number>(__commandeerTouchIdentities: P0, _forContextID: P1): R;
    _gestureRecognizerClaimedTouchIdentitiesForContextID<R = unknown, P0 = number>(__gestureRecognizerClaimedTouchIdentitiesForContextID: P0): R;
    _removeClaimedTouchIdentities_forContextID<R = void, P0 = unknown, P1 = number>(__removeClaimedTouchIdentities: P0, _forContextID: P1): R;
    _claimTouchesAssociatedWithGestureRecognizer_forContextID<R = void, P0 = unknown, P1 = number>(__claimTouchesAssociatedWithGestureRecognizer: P0, _forContextID: P1): R;
    _removeActiveGestureRecognizer_forContextID<R = void, P0 = unknown, P1 = number>(__removeActiveGestureRecognizer: P0, _forContextID: P1): R;
    _activeTouchGestureRecognizersForContextID<R = unknown, P0 = number>(__activeTouchGestureRecognizersForContextID: P0): R;
    removeGestureRecognizersForTouch<R = void, P0 = unknown>(_removeGestureRecognizersForTouch: P0): R;
    addGestureRecognizers_forTouch<R = void, P0 = unknown, P1 = unknown>(_addGestureRecognizers: P0, _forTouch: P1): R;
    _gestureRecognizersForTouch<R = unknown, P0 = unknown>(__gestureRecognizersForTouch: P0): R;
    setOverridePressureConfiguration<R = void, P0 = unknown>(_setOverridePressureConfiguration: P0): R;
    _trueDeviceID<R = number>(): R;
    deviceType<R = number>(): R;
    _initWithIOHIDDictionary<R = unknown, P0 = unknown>(__initWithIOHIDDictionary: P0): R;
    dealloc<R = void>(): R;
    surfaceSize<R = CGSize>(): R;
    deviceID<R = number>(): R;
    description<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchDevice {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSHapticFeedbackPerformerProtocol {
      alloc<R = NSTouchDevice>(): R;
      new: <R = NSTouchDevice>() => R;
      _touchDeviceRemoved<R = void, P0 = unknown>(__touchDeviceRemoved: P0): R;
      _touchDeviceAdded<R = void, P0 = unknown>(__touchDeviceAdded: P0): R;
      _hasForceCapableTouchDevice<R = boolean>(): R;
      _hasPressureEnabledTouchDevice<R = boolean>(): R;
      _isTouchStillValid<R = boolean, P0 = unknown>(__isTouchStillValid: P0): R;
      _firstTouchInView_contextID<R = unknown, P0 = unknown, P1 = number>(__firstTouchInView: P0, _contextID: P1): R;
      _touchDeviceFromTrueDeviceID<R = unknown, P0 = number>(__touchDeviceFromTrueDeviceID: P0): R;
      touchDeviceFromDeviceID<R = unknown, P0 = number>(_touchDeviceFromDeviceID: P0): R;
      touchDevices<R = unknown>(): R;
      _touchDeviceWithIOHIDDictionary<R = unknown, P0 = unknown>(__touchDeviceWithIOHIDDictionary: P0): R;
      _pressureCapabilitiesPrefChanged<R = void, P0 = unknown>(__pressureCapabilitiesPrefChanged: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSTouchDevice: cocoa.NSTouchDevice.CLASS;
