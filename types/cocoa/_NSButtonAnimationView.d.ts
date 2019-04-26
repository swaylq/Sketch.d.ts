/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSButtonAnimationView<T0 = void, T1 = void, T2 = void> extends NSView {
    terminate<R = void>(): R;
    shortCircuitDeferredAnimationConfigurationIfNeeded<R = void>(): R;
    _deferredConfigureTriggered<R = void>(): R;
    _deferAnimationConfiguration<R = void>(): R;
    startPendingAnimationWithFrame_inView<R = boolean, P0 = CGRect, P1 = unknown>(_startPendingAnimationWithFrame: P0, _inView: P1): R;
    _resolvedButtonAppearance<R = unknown>(): R;
    _cuiSizeValue<R = __CFString>(): R;
    cancelPreviousCompletionBlock<R = void>(): R;
    _validateTransitionParameters<R = void>(): R;
    _buildCUIOptions<R = unknown>(): R;
    _coreUIWidgetName<R = unknown>(): R;
    _showPlaceholderLayer<R = boolean>(): R;
    _configureCurrentAnimation<R = void>(): R;
    animateFromOldState_oldHighlight<R = void, P0 = number, P1 = boolean>(_animateFromOldState: P0, _oldHighlight: P1): R;
    initWithCell<R = unknown, P0 = unknown>(_initWithCell: P0): R;
    status<R = number>(): R;
    buttonCell<R = NSButtonCell>(): R;
    setButtonCell<R = void, P0 = NSButtonCell>(_v: P0): R;
    controlView<R = NSView>(): R;
    setControlView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace _NSButtonAnimationView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSButtonAnimationView>(): R;
      new: <R = _NSButtonAnimationView>() => R;
    }
  }
}
