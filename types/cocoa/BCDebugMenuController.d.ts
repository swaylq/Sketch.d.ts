/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCDebugMenuController<T0 = void, T1 = void, T2 = void> extends BCSingleton {
    cxx_destruct<R = void>(): R;
    revealApplicationSupport<R = void, P0 = unknown>(_revealApplicationSupport: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    valueSelected<R = void, P0 = unknown>(_valueSelected: P0): R;
    optionSelected<R = void, P0 = unknown>(_optionSelected: P0): R;
    buildOptionsMenu_options_action<R = void, P0 = unknown, P1 = unknown, P2 = string>(_buildOptionsMenu: P0, _options: P1, _action: P2): R;
    buildOptionsMenu<R = void, P0 = unknown>(_buildOptionsMenu: P0): R;
    debugMenuItem<R = unknown>(): R;
    installDebugSubmenuWithTitle<R = unknown, P0 = unknown>(_installDebugSubmenuWithTitle: P0): R;
    addDebugMenu<R = void>(): R;
    init<R = unknown>(): R;
    settings<R = NSDictionary>(): R;
    setSettings<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace BCDebugMenuController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCSingleton {}
  }
}

declare const BCDebugMenuController: cocoa.BCDebugMenuController.CLASS;
