/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpringAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    currentValue<R = number>(): R;
    durationForEpsilon<R = number, P0 = number>(_durationForEpsilon: P0): R;
    startAnimation<R = void>(): R;
    dealloc<R = void>(): R;
    initWithDuration_animationCurve<R = unknown, P0 = number, P1 = number>(_initWithDuration: P0, _animationCurve: P1): R;
    initWithDuration<R = unknown, P0 = number>(_initWithDuration: P0): R;
    timingFunction<R = CAMediaTimingFunction>(): R;
    setTimingFunction<R = void, P0 = CAMediaTimingFunction>(_v: P0): R;
    velocity<R = number>(): R;
    setVelocity<R = void, P0 = number>(_v: P0): R;
    damping<R = number>(): R;
    setDamping<R = void, P0 = number>(_v: P0): R;
    stiffness<R = number>(): R;
    setStiffness<R = void, P0 = number>(_v: P0): R;
    mass<R = number>(): R;
    setMass<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSSpringAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = NSSpringAnimation>(): R;
      new: <R = NSSpringAnimation>() => R;
    }
  }
}

declare const NSSpringAnimation: cocoa.NSSpringAnimation.CLASS;
