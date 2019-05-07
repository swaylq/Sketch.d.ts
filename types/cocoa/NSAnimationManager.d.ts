/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimationManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    animationForObject_keyPath<R = unknown, P0 = unknown, P1 = unknown>(_animationForObject: P0, _keyPath: P1): R;
    hasAnimationForObject_keyPath<R = boolean, P0 = unknown, P1 = unknown>(_hasAnimationForObject: P0, _keyPath: P1): R;
    targetValueForObject_keyPath<R = unknown, P0 = unknown, P1 = unknown>(_targetValueForObject: P0, _keyPath: P1): R;
    setTargetValue_forObject_keyPath_animation<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_setTargetValue: P0, _forObject: P1, _keyPath: P2, _animation: P3): R;
    removeAllAnimationsForObject<R = void, P0 = unknown>(_removeAllAnimationsForObject: P0): R;
    removeAnimationsForObject_keyPath<R = void, P0 = unknown, P1 = unknown>(_removeAnimationsForObject: P0, _keyPath: P1): R;
  }
  namespace NSAnimationManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAnimationManager>(): R;
      new: <R = NSAnimationManager>() => R;
      observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
      performAnimations<R = void, P0 = unknown>(_performAnimations: P0): R;
      currentAnimationManager<R = unknown>(): R;
    }
  }
}

declare const NSAnimationManager: cocoa.NSAnimationManager.CLASS;
