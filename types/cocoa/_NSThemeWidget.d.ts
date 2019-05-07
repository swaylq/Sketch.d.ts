/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeWidget<T0 = void, T1 = void, T2 = void> extends NSButton {
    stopMonitoringFlagsChanged<R = void>(): R;
    startMonitoringFlagsChanged<R = void>(): R;
    update<R = void>(): R;
    setFrameOrigin_ignoreRentry<R = void, P0 = CGPoint, P1 = boolean>(_setFrameOrigin: P0, _ignoreRentry: P1): R;
    initWithButtonID<R = unknown, P0 = number>(_initWithButtonID: P0): R;
  }
  namespace _NSThemeWidget {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = _NSThemeWidget>(): R;
      new: <R = _NSThemeWidget>() => R;
      widgetInView_withButtonID_action<R = unknown, P0 = unknown, P1 = number, P2 = string>(_widgetInView: P0, _withButtonID: P1, _action: P2): R;
    }
  }
}
