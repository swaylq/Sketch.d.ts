/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreferencePane<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    didSwitchToPane<R = void>(): R;
    dismissAlertSheet<R = void>(): R;
    dismissAlertWindow<R = void, P0 = unknown>(_dismissAlertWindow: P0): R;
    initWithPreferencesController<R = unknown, P0 = unknown>(_initWithPreferencesController: P0): R;
    preferencesController<R = MSPreferencesController>(): R;
  }
  namespace MSPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSPreferencePane>(): R;
      new: <R = MSPreferencePane>() => R;
      nibName<R = unknown>(): R;
      toolbarIcon<R = unknown>(): R;
      title<R = unknown>(): R;
      identifier<R = unknown>(): R;
    }
  }
}

declare const MSPreferencePane: cocoa.MSPreferencePane.CLASS;
