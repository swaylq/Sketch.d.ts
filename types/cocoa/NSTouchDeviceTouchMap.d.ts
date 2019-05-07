/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchDeviceTouchMap<T0 = void, T1 = void, T2 = void> extends NSObject {
    touchIdentitiesAssociatedWithGestureRecognizer<R = unknown, P0 = unknown>(_touchIdentitiesAssociatedWithGestureRecognizer: P0): R;
    updateActiveGestureRecognizers<R = void>(): R;
    removeGestureRecognizerFromAllKeys<R = void, P0 = unknown>(_removeGestureRecognizerFromAllKeys: P0): R;
    gestureRecognizersForKey<R = unknown, P0 = unknown>(_gestureRecognizersForKey: P0): R;
    allowFlushing<R = void>(): R;
    preventFlushing<R = void>(): R;
    dealloc<R = void>(): R;
    flushCount<R = number>(): R;
    setFlushCount<R = void, P0 = number>(_v: P0): R;
    activeGestureRecognizers<R = NSMutableSet>(): R;
    setActiveGestureRecognizers<R = void, P0 = NSMutableSet>(_v: P0): R;
    commandeeredTouchIdentities<R = NSMutableSet>(): R;
    setCommandeeredTouchIdentities<R = void, P0 = NSMutableSet>(_v: P0): R;
    claimedTouchIdentities<R = NSMutableSet>(): R;
    setClaimedTouchIdentities<R = void, P0 = NSMutableSet>(_v: P0): R;
    cachedBeginTouches<R = NSMutableDictionary>(): R;
    setCachedBeginTouches<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    cancelledTouches<R = NSMutableSet>(): R;
    setCancelledTouches<R = void, P0 = NSMutableSet>(_v: P0): R;
    touches<R = NSMutableSet>(): R;
    setTouches<R = void, P0 = NSMutableSet>(_v: P0): R;
  }
  namespace NSTouchDeviceTouchMap {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchDeviceTouchMap>(): R;
      new: <R = NSTouchDeviceTouchMap>() => R;
    }
  }
}

declare const NSTouchDeviceTouchMap: cocoa.NSTouchDeviceTouchMap.CLASS;
