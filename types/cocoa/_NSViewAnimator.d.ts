/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator<T0 = void, T1 = void, T2 = void> extends _NSObjectAnimator {
    setValue_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKeyPath: P1): R;
    subviews<R = unknown>(): R;
    superview<R = unknown>(): R;
    replaceSubview_with<R = void, P0 = unknown, P1 = unknown>(_replaceSubview: P0, _with: P1): R;
    removeFromSuperviewWithoutNeedingDisplay<R = void>(): R;
    removeFromSuperview<R = void>(): R;
    addSubview_positioned_relativeTo<R = void, P0 = unknown, P1 = number, P2 = unknown>(_addSubview: P0, _positioned: P1, _relativeTo: P2): R;
    addSubview<R = void, P0 = unknown>(_addSubview: P0): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    frameSize<R = CGSize>(): R;
    frameOrigin<R = CGPoint>(): R;
    frame<R = CGRect>(): R;
    setBounds<R = void, P0 = CGRect>(_setBounds: P0): R;
    bounds<R = CGRect>(): R;
    setFrameSize<R = void, P0 = CGSize>(_setFrameSize: P0): R;
    setFrameOrigin<R = void, P0 = CGPoint>(_setFrameOrigin: P0): R;
    _useCoreAnimationFrameOriginChanges<R = boolean>(): R;
    _useCoreAnimationFrameChanges<R = boolean>(): R;
    _isLayerBackedAtNotTheRootLayer<R = boolean>(): R;
    setShadow<R = void, P0 = unknown>(_setShadow: P0): R;
    setHidden<R = void, P0 = boolean>(_setHidden: P0): R;
    setFrameRotation<R = void, P0 = number>(_setFrameRotation: P0): R;
    setFrameCenterRotation<R = void, P0 = number>(_setFrameCenterRotation: P0): R;
    setContentFilters<R = void, P0 = unknown>(_setContentFilters: P0): R;
    setCompositingFilter<R = void, P0 = unknown>(_setCompositingFilter: P0): R;
    setBoundsSize<R = void, P0 = CGSize>(_setBoundsSize: P0): R;
    setBoundsOrigin<R = void, P0 = CGPoint>(_setBoundsOrigin: P0): R;
    setBackgroundFilters<R = void, P0 = unknown>(_setBackgroundFilters: P0): R;
    setAlphaValue<R = void, P0 = number>(_setAlphaValue: P0): R;
    _shouldDoLayerAnimation<R = boolean>(): R;
    _shouldDoAnimation<R = boolean>(): R;
  }
  namespace _NSViewAnimator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSObjectAnimator {}
  }
}
