/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMenuBuilder<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MSMenuBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSMenuBuilder>(): R;
      new: <R = MSMenuBuilder>() => R;
      menuBuilderWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_menuBuilderWithTarget: P0, _action: P1): R;
      menuBuilderWithTarget<R = unknown, P0 = unknown>(_menuBuilderWithTarget: P0): R;
    }
  }
}

declare const MSMenuBuilder: cocoa.MSMenuBuilder.CLASS;
