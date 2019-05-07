/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimatablePropertyContainerProtocol<T0 = void, T1 = void, T2 = void> {
    animationForKey<R = unknown, P0 = NSString>(_animationForKey: P0): R;
    animator<R = unknown>(): R;
    animations<R = NSDictionary>(): R;
    setAnimations<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace NSAnimatablePropertyContainerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      defaultAnimationForKey<R = unknown, P0 = NSString>(_defaultAnimationForKey: P0): R;
    }
  }
}
