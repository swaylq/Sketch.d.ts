/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowBackdrop<T0 = void, T1 = void, T2 = void> extends NSCGSWindowBackdrop {
    setTintColor<R = void, P0 = CGColor>(_setTintColor: P0): R;
    tintColor<R = CGColor>(): R;
    setOrderedIn<R = void, P0 = boolean>(_setOrderedIn: P0): R;
    isOrderedIn<R = boolean>(): R;
    setSaturation<R = void, P0 = number>(_setSaturation: P0): R;
    saturation<R = number>(): R;
    setHasActiveAppearance<R = void, P0 = boolean>(_setHasActiveAppearance: P0): R;
    hasActiveAppearance<R = boolean>(): R;
    setLevel<R = void, P0 = number>(_setLevel: P0): R;
    level<R = number>(): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    frame<R = CGRect>(): R;
    setBlendMode<R = void, P0 = unknown>(_setBlendMode: P0): R;
    blendMode<R = unknown>(): R;
    setMaterial<R = void, P0 = unknown>(_setMaterial: P0): R;
    material<R = unknown>(): R;
    window<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
  }
  namespace _NSCGSWindowBackdrop {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSWindowBackdrop {
      alloc<R = _NSCGSWindowBackdrop>(): R;
      new: <R = _NSCGSWindowBackdrop>() => R;
    }
  }
}
