/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeWidgetCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    update<R = void>(): R;
    getState<R = number, P0 = unknown>(_getState: P0): R;
    _drawCustomImage_withFrame_inView<R = void, P0 = unknown, P1 = CGRect, P2 = unknown>(__drawCustomImage: P0, _withFrame: P1, _inView: P2): R;
    _currentCustomImageForWindowButton_view<R = unknown, P0 = number, P1 = unknown>(__currentCustomImageForWindowButton: P0, _view: P1): R;
    _currentWindowButton<R = number>(): R;
    setButtonID<R = void, P0 = number>(_setButtonID: P0): R;
    buttonID<R = number>(): R;
    coreUIDrawWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_coreUIDrawWithFrame: P0, _inView: P1): R;
    coreUIDrawOptionsInView_isFlipped<R = unknown, P0 = unknown, P1 = boolean>(_coreUIDrawOptionsInView: P0, _isFlipped: P1): R;
    coreUIWidgetType<R = unknown>(): R;
    coreUIWindowType<R = unknown>(): R;
    coreUIValue<R = unknown>(): R;
    coreUIState<R = unknown>(): R;
    coreUIPresentationState<R = unknown>(): R;
    _containingThemeFrameFromView<R = unknown, P0 = unknown>(__containingThemeFrameFromView: P0): R;
    isEnabled<R = boolean>(): R;
    isEdited<R = boolean>(): R;
    _realWindow<R = unknown>(): R;
    _accessibilityZoomButtonHasFullscreenBehavior<R = boolean>(): R;
    _accessibilityWindowDelegate<R = unknown>(): R;
    _accessibilityIsZoomButtonID<R = boolean>(): R;
    accessibilityHelp<R = unknown>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
    obscured<R = boolean>(): R;
    setObscured<R = void, P0 = boolean>(_v: P0): R;
    temporarilyDisabled<R = boolean>(): R;
    setTemporarilyDisabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSThemeWidgetCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = _NSThemeWidgetCell>(): R;
      new: <R = _NSThemeWidgetCell>() => R;
    }
  }
}
