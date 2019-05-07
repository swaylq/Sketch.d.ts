/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressIndicator<T0 = void, T1 = void, T2 = void> extends NSView, NSAccessibilityProgressIndicatorProtocol {
    _updateHeartBeat<R = void>(): R;
    sizeToFit<R = void>(): R;
    stopAnimation<R = void, P0 = unknown>(_stopAnimation: P0): R;
    _stopAnimationAndRedisplay<R = void, P0 = boolean>(__stopAnimationAndRedisplay: P0): R;
    startAnimation<R = void, P0 = unknown>(_startAnimation: P0): R;
    incrementBy<R = void, P0 = number>(_incrementBy: P0): R;
    setUsesVectorMovement<R = void, P0 = boolean>(_setUsesVectorMovement: P0): R;
    usesVectorMovement<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    _drawThemeProgressArea<R = void, P0 = boolean>(__drawThemeProgressArea: P0): R;
    _drawThemeBackground<R = void>(): R;
    allowsVibrancy<R = boolean>(): R;
    _allowsCoreUI<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    _commonInit<R = void>(): R;
    _setProDrawingWidth<R = void, P0 = number>(__setProDrawingWidth: P0): R;
    _proDrawingWidth<R = number>(): R;
    _setProDelayedStartup<R = void, P0 = boolean>(__setProDelayedStartup: P0): R;
    _proDelayedStartup<R = boolean>(): R;
    _setProRevive<R = void, P0 = boolean>(__setProRevive: P0): R;
    _proIsSpinning<R = boolean>(): R;
    _setProAnimationIndex<R = void, P0 = number>(__setProAnimationIndex: P0): R;
    _proAnimationIndex<R = number>(): R;
    _installHeartBeat<R = void, P0 = boolean>(__installHeartBeat: P0): R;
    animate<R = void, P0 = unknown>(_animate: P0): R;
    setAnimationDelay<R = void, P0 = number>(_setAnimationDelay: P0): R;
    animationDelay<R = number>(): R;
    accessibilityIsOrientationAttributeSettable<R = boolean>(): R;
    accessibilityOrientationAttribute<R = unknown>(): R;
    accessibilityIsMaxValueAttributeSettable<R = boolean>(): R;
    accessibilityMaxValueAttribute<R = unknown>(): R;
    accessibilityIsMinValueAttributeSettable<R = boolean>(): R;
    accessibilityMinValueAttribute<R = unknown>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    roundDeterminateColor<R = NSColor>(): R;
    setRoundDeterminateColor<R = void, P0 = NSColor>(_v: P0): R;
    controlSize<R = number>(): R;
    setControlSize<R = void, P0 = number>(_v: P0): R;
    spinningTint<R = number>(): R;
    setSpinningTint<R = void, P0 = number>(_v: P0): R;
    controlTint<R = number>(): R;
    setControlTint<R = void, P0 = number>(_v: P0): R;
    bezeled<R = boolean>(): R;
    setBezeled<R = void, P0 = boolean>(_v: P0): R;
    indeterminate<R = boolean>(): R;
    setIndeterminate<R = void, P0 = boolean>(_v: P0): R;
    maxValue<R = number>(): R;
    setMaxValue<R = void, P0 = number>(_v: P0): R;
    minValue<R = number>(): R;
    setMinValue<R = void, P0 = number>(_v: P0): R;
    displayedWhenStopped<R = boolean>(): R;
    setDisplayedWhenStopped<R = void, P0 = boolean>(_v: P0): R;
    usesThreadedAnimation<R = boolean>(): R;
    setUsesThreadedAnimation<R = void, P0 = boolean>(_v: P0): R;
    doubleValue<R = number>(): R;
    setDoubleValue<R = void, P0 = number>(_v: P0): R;
    style<R = number>(): R;
    setStyle<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSProgressIndicator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSAccessibilityProgressIndicatorProtocol {
      alloc<R = NSProgressIndicator>(): R;
      new: <R = NSProgressIndicator>() => R;
    }
  }
}

declare const NSProgressIndicator: cocoa.NSProgressIndicator.CLASS;
