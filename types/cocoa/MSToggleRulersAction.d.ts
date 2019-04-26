/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleRulersAction<T0 = void, T1 = void, T2 = void> extends MSToggleVisibilityAction {
    tooltip<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    labelForToolbar<R = unknown>(): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    isActive<R = boolean>(): R;
    toggleRulers<R = void, P0 = unknown>(_toggleRulers: P0): R;
  }
  namespace MSToggleRulersAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleVisibilityAction {
      alloc<R = MSToggleRulersAction>(): R;
      new: <R = MSToggleRulersAction>() => R;
    }
  }
}

declare const MSToggleRulersAction: cocoa.MSToggleRulersAction.CLASS;
