/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionPreferencesProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    save<R = void>(): R;
    setActive_forQuickAction<R = void, P0 = boolean, P1 = _NSQuickAction>(_setActive: P0, _forQuickAction: P1): R;
    applyActive<R = NSSet, P0 = NSSet>(_applyActive: P0): R;
  }
  namespace _NSQuickActionPreferencesProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      preferencesWithPresentation<R = _NSQuickActionPreferences, P0 = _NSQuickActionPresentation>(_preferencesWithPresentation: P0): R;
    }
  }
}
