/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAutoExpandGroupsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    autoExpandGroups<R = void, P0 = unknown>(_autoExpandGroups: P0): R;
  }
  namespace MSAutoExpandGroupsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSAutoExpandGroupsAction>(): R;
      new: <R = MSAutoExpandGroupsAction>() => R;
    }
  }
}

declare const MSAutoExpandGroupsAction: cocoa.MSAutoExpandGroupsAction.CLASS;
